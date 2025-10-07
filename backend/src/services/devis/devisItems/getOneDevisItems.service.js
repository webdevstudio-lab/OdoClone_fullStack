import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const getDevisItem = async devisItemId => {
  try {
    if (!devisItemId) {
      throw new BadRequestException(
        "L'identifiant de l'item du devis est manquant ou invalide!",
        ErrorCodeEnum.DEVIS_ITEM_NOT_FOUND
      );
    }
    const devisItem = await prisma.itemsDevis.findUnique({
      where: { itemId: devisItemId },
    });

    if (!devisItem) {
      throw new BadRequestException(
        "Cet Ligne du devis n'existe pas dans notre base de données!",
        ErrorCodeEnum.DEVIS_ITEM_NOT_FOUND
      );
    }

    return { devisItem };
  } catch (e) {
    logger.error(`Error getting devisItem: ${e}`);
    throw e;
  }
};
