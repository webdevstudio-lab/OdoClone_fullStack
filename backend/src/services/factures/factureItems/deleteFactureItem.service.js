import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const deleteFactureItem = async factureItemId => {
  try {
    if (!factureItemId) {
      throw new BadRequestException(
        "L'identifiant de l'item de la facture est manquant ou invalide!",
        ErrorCodeEnum.FACTURE_ITEM_NOT_FOUND
      );
    }
    //on verifie si le factureItem existe
    const existingFactureItem = await prisma.itemsFacture.findUnique({
      where: { itemId: factureItemId },
    });

    if (!existingFactureItem) {
      throw new BadRequestException(
        "Cette Ligne de la facture n'existe pas dans notre base de données!",
        ErrorCodeEnum.FACTURE_ITEM_NOT_FOUND
      );
    }

    //on recupere la facture pour verifier si il existe
    const facture = await prisma.facture.findUnique({
      where: { id: existingFactureItem.factureId },
    });

    if (!facture) {
      throw new BadRequestException(
        "Cette facture n'existe pas dans notre base de données!",
        ErrorCodeEnum.FACTURE_NOT_FOUND
      );
    }

    //on met a jour le total de la facture
    await prisma.facture.update({
      where: { id: facture.id },
      data: { total: facture.total - existingFactureItem.total },
    });

    await prisma.itemsFacture.delete({
      where: { itemId: factureItemId },
    });
  } catch (e) {
    logger.error(`Error deleting factureItem: ${e}`);
    throw e;
  }
};
