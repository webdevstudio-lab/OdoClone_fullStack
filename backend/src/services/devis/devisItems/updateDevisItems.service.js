import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const updateDevisItems = async (devisItemId, body) => {
  try {
    const { description, quantity, unitePrice, unite } = body;

    if (!devisItemId) {
      throw new BadRequestException(
        "L'identifiant de l'item du devis est manquant ou invalide!",
        ErrorCodeEnum.DEVIS_ITEM_NOT_FOUND
      );
    }

    //on verifie si le devisItem existe
    const existingDevisItem = await prisma.itemsDevis.findUnique({
      where: { itemId: devisItemId },
    });

    if (!existingDevisItem) {
      throw new BadRequestException(
        "Cet Ligne du devis n'existe pas dans notre base de données!",
        ErrorCodeEnum.DEVIS_ITEM_NOT_FOUND
      );
    }

    //on recupere le devis pour verifier si il existe
    const devis = await prisma.devis.findUnique({
      where: { id: existingDevisItem.devisId },
    });

    if (!devis) {
      throw new BadRequestException(
        "Ce article n'est rattaché a aucun devis !",
        ErrorCodeEnum.DEVIS_NOT_FOUND
      );
    }

    //on retire le total du devisItem dans le total du devis
    await prisma.devis.update({
      where: { id: devis.id },
      data: {
        total: devis.total - existingDevisItem.total,
      },
    });

    //on met a jour le devisItem
    const updateDevisItem = await prisma.itemsDevis.update({
      where: { itemId: devisItemId },
      data: {
        description,
        quantity,
        unitePrice,
        unite,
        total: quantity * unitePrice,
      },
    });

    //**On met a jour le total de la devis */
    const totalDevis = await prisma.itemsDevis.aggregate({
      _sum: {
        total: true,
      },
    });

    await prisma.devis.update({
      where: { id: devis.id },
      data: {
        total: totalDevis._sum.total,
      },
    });

    return { updateDevisItem };
  } catch (e) {
    logger.error(`Error updating devisItem: ${e}`);
    throw e;
  }
};
