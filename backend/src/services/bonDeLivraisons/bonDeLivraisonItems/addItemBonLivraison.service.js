import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const addBlItems = async (bonLivraisonId, body) => {
  try {
    const { description, quantity, unite } = body;

    if (!bonLivraisonId) {
      throw new BadRequestException(
        "L'identifiant du bon de livraison est manquant ou invalide!",
        ErrorCodeEnum.BL_NOT_FOUND
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
    const BlItem = await prisma.itemsBl.create({
      data: {
        description,
        quantity,
        unite,
        BonLivId: existingBl.id,
      },
    });

    return { BlItem };
  } catch (e) {
    logger.error(`Error creating the item Bl: ${e}`);
    throw e;
  }
};
