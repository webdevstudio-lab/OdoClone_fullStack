import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const updateFactureItems = async (fatureItemId, body) => {
  try {
    const { description, quantity, unitePrice, unite } = body;

    if (!fatureItemId) {
      throw new BadRequestException(
        "L'identifiant de l'item de la  fature est manquant ou invalide!",
        ErrorCodeEnum.FACTURE_ITEM_NOT_FOUND
      );
    }

    //on verifie si le devisItem existe
    const existingFactureItem = await prisma.itemsFacture.findUnique({
      where: { itemId: fatureItemId },
    });

    if (!existingFactureItem) {
      throw new BadRequestException(
        "Cet Ligne de la facture n'existe pas dans notre base de données!",
        ErrorCodeEnum.FACTURE_ITEM_NOT_FOUND
      );
    }

    //on recupere la facture pour verifier si elle  existe
    const facture = await prisma.facture.findUnique({
      where: { id: existingFactureItem.factureId },
    });

    if (!facture) {
      throw new BadRequestException(
        "Ce article n'est rattaché a aucune Facture !",
        ErrorCodeEnum.FACTURE_NOT_FOUND
      );
    }

    //on retire le total de la factureItem dans le total de la facture
    await prisma.facture.update({
      where: { id: facture.id },
      data: {
        total: facture.total - existingFactureItem.total,
      },
    });

    //on met a jour la factreItem
    const updateFactureItem = await prisma.itemsFacture.update({
      where: { itemId: fatureItemId },
      data: {
        description,
        quantity,
        unitePrice,
        unite,
        total: quantity * unitePrice,
      },
    });

    //**On met a jour le total de la facture */
    const totalFacture = await prisma.itemsfacture.aggregate({
      _sum: {
        total: true,
      },
    });

    await prisma.facture.update({
      where: { id: facture.id },
      data: {
        total: totalFacture._sum.total,
      },
    });

    return { updateFactureItem };
  } catch (e) {
    logger.error(`Error updating factureItem: ${e}`);
    throw e;
  }
};
