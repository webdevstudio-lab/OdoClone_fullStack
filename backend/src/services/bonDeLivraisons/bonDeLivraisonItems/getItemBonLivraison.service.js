import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const getBlItem = async bonlivraisonItemId => {
  try {
    if (!bonlivraisonItemId) {
      throw new BadRequestException(
        "L'identifiant de l'item du bon de livraison est manquant ou invalide!",
        ErrorCodeEnum.BL_ITEM_NOT_FOUND
      );
    }
    const BlItem = await prisma.itemsBl.findUnique({
      where: { itemId: bonlivraisonItemId },
    });

    if (!BlItem) {
      throw new BadRequestException(
        "Cette Ligne du bon de livraison n'existe pas dans notre base de données!",
        ErrorCodeEnum.BL_ITEM_NOT_FOUND
      );
    }

    return { BlItem };
  } catch (e) {
    logger.error(`Error getting bon de livraisonItem: ${e}`);
    throw e;
  }
};
