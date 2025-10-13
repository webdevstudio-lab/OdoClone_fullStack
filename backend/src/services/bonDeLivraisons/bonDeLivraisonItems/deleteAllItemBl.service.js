import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const deleteAllBlItems = async bonLivraisonId => {
  try {
    if (!bonLivraisonId) {
      throw new BadRequestException(
        "L'identifiant  du bon de livraison est manquant ou invalide!",
        ErrorCodeEnum.BL_ITEM_NOT_FOUND
      );
    }

    //on verifie si le bon de livraison existe
    const existingBl = await prisma.bonDeLivraison.findUnique({
      where: { id: bonLivraisonId },
    });

    if (!existingBl) {
      throw new BadRequestException(
        "Ce bon de livraison n'existe pas dans notre base de données!",
        ErrorCodeEnum.BL_NOT_FOUND
      );
    }

    await prisma.itemsBl.deleteMany({
      where: { BonLivId: bonLivraisonId },
    });
  } catch (e) {
    logger.error(`Error deleting devisItem: ${e}`);
    throw e;
  }
};
