import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const updateBonLivraison = async (bonLivraisonId, body) => {
  try {
    if (!bonLivraisonId) {
      throw new BadRequestException(
        "L'identifiant du bon de livraison est manquant ou invalide!",
        ErrorCodeEnum.BL_NOT_FOUND
      );
    }

    //on verifie si le bon de livraison existe
    const existingBonLivraison = await prisma.bonDeLivraison.findUnique({
      where: { id: bonLivraisonId },
    });

    if (!existingBonLivraison) {
      throw new BadRequestException(
        "Ce bon de livraison n'existe pas dans notre base de données!",
        ErrorCodeEnum.BL_NOT_FOUND
      );
    }

    const bonLivraison = await prisma.bonDeLivraison.update({
      where: { id: existingBonLivraison.id },
      data: body,
    });

    return { bonLivraison };
  } catch (error) {
    logger.error('Error while updating bon de livraison', error);
    throw error;
  }
};
