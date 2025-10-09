import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const getAllFactureItems = async devisId => {
  try {
    if (!devisId) {
      throw new BadRequestException(
        "L'identifiant de la facture est manquant ou invalide!",
        ErrorCodeEnum.FACTURE_NOT_FOUND
      );
    }
    //on verifie si le facture existe
    const existingFacture = await prisma.facture.findUnique({
      where: { id: factureId },
    });

    if (!existingFacture) {
      throw new BadRequestException(
        "Cette facture n'existe pas dans notre base de données!",
        ErrorCodeEnum.FACTURE_NOT_FOUND
      );
    }

    const factureItems = await prisma.itemsFacture.findMany({
      where: { factureId },
    });
    if (factureItems.length === 0) {
      throw new BadRequestException(
        "Il n'y a aucune ligne dans cette facture !",
        ErrorCodeEnum.FACTURE_ITEM_NOT_FOUND
      );
    }

    return { factureItems };
  } catch (e) {
    logger.error(`Error fetching factureItems: ${e}`);
    throw e;
  }
};
