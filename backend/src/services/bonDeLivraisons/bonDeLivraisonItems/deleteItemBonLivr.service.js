import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const deleteBlItem = async bonLivraisonItemId => {
  try {
    if (!bonLivraisonItemId) {
      throw new BadRequestException(
        "L'identifiant de l'item du bon de livraison est manquant ou invalide!",
        ErrorCodeEnum.BL_ITEM_NOT_FOUND
      );
    }
    //on verifie si le bon de livraisonItem de existe
    const existingBlItem = await prisma.itemsBl.findUnique({
      where: { itemId: bonLivraisonItemId },
    });

    if (!existingBlItem) {
      throw new BadRequestException(
        "Cette Ligne du bon de livraison n'existe pas dans notre base de données!",
        ErrorCodeEnum.BL_ITEM_NOT_FOUND
      );
    }

    //on recupere le bon de livraison pour verifier si il existe
    const bonLivraison = await prisma.bonDeLivraison.findUnique({
      where: { id: existingBlItem.BonLivId },
    });

    if (!bonLivraison) {
      throw new BadRequestException(
        "Ce bon de livraison n'existe pas dans notre base de données!",
        ErrorCodeEnum.BL_NOT_FOUND
      );
    }

    await prisma.itemsBl.delete({
      where: { itemId: bonLivraisonItemId },
    });
  } catch (e) {
    logger.error(`Error deleting factureItem: ${e}`);
    throw e;
  }
};
