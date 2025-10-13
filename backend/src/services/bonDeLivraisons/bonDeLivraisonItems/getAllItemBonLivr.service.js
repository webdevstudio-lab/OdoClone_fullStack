import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const getAllBlItems = async bonLivraisonId => {
  try {
    if (!bonLivraisonId) {
      throw new BadRequestException(
        "L'identifiant de la facture est manquant ou invalide!",
        ErrorCodeEnum.FACTURE_NOT_FOUND
      );
    }
    //on verifie si le facture existe
    const existingBonLivraison = await prisma.bonDeLivraison.findUnique({
      where: { id: bonLivraisonId },
    });

    if (!existingBonLivraison) {
      throw new BadRequestException(
        "Ce bon de livraison n'existe pas dans notre base de données!",
        ErrorCodeEnum.BL_NOT_FOUND
      );
    }

    const BlItems = await prisma.itemsBl.findMany({
      where: { BonLivId: bonLivraisonId },
    });
    if (BlItems.length === 0) {
      throw new BadRequestException(
        "Il n'y a aucune ligne dans ce bon de livraison !",
        ErrorCodeEnum.BL_ITEM_NOT_FOUND
      );
    }

    return { BlItems };
  } catch (e) {
    logger.error(`Error fetching BlItems: ${e}`);
    throw e;
  }
};
