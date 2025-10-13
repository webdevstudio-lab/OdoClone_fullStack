import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const getBonLivraison = async getBonLivraisonId => {
  try {
    if (!getBonLivraisonId) {
      throw new BadRequestException(
        "L'identifiant du bon de livraison est manquant ou invalide!",
        ErrorCodeEnum.BL_NOT_FOUND
      );
    }

    //on verifie si le bon de livraison existe
    const bonLivraison = await prisma.bonDeLivraison.findUnique({
      where: { id: getBonLivraisonId },
      include: {
        blItem: {
          select: {
            itemId: true,
            description: true,
            unite: true,
            quantity: true,
          },
        },
      },
    });

    if (!bonLivraison) {
      throw new BadRequestException(
        "Ce bon de livraison n'existe pas dans notre base de données!",
        ErrorCodeEnum.BL_NOT_FOUND
      );
    }
    return { bonLivraison };
  } catch (e) {
    logger.error('Error while fetching bon de livraison', e);
    throw e;
  }
};
