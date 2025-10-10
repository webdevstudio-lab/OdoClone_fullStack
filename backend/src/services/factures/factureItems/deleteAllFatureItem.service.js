import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const deleteAllFactureItems = async factureId => {
  try {
    if (!factureId) {
      throw new BadRequestException(
        "L'identifiant  de la facture  est manquant ou invalide!",
        ErrorCodeEnum.FACTURE_ITEM_NOT_FOUND
      );
    }

    //on verifie si la facture existe
    const existingFacture = await prisma.facture.findUnique({
      where: { id: factureId },
    });

    if (!existingFacture) {
      throw new BadRequestException(
        "Cette facture n'existe pas dans notre base de données!",
        ErrorCodeEnum.FACTURE_NOT_FOUND
      );
    }

    //on met a jour le total de la facture
    await prisma.facture.update({
      where: { id: existingFacture.id },
      data: { total: 0 },
    });

    await prisma.itemsFacture.deleteMany({
      where: { factureId },
    });
  } catch (e) {
    logger.error(`Error deleting devisItem: ${e}`);
    throw e;
  }
};
