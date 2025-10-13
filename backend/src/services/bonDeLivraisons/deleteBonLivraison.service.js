import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const deleteBonLivraison = async bonLivraisonId => {
  try {
    if (!bonLivraisonId) {
      throw new BadRequestException(
        "L'identifiant du bon de Livraison est manquant ou invalide!",
        ErrorCodeEnum.BL_NOT_FOUND
      );
    }

    //on verifie si le bon de livraison existe
    const existingBL = await prisma.bonDeLivraison.findUnique({
      where: { id: bonLivraisonId },
    });

    if (!existingBL) {
      throw new BadRequestException(
        "Ce bon de Livraison n'existe pas dans notre base de données!",
        ErrorCodeEnum.BL_NOT_FOUND
      );
    }

    await prisma.bonDeLivraison.delete({
      where: { id: bonLivraisonId },
    });
  } catch (error) {
    logger.error('Error while deleting Bon de Livraison', error);
    throw error;
  }
};
