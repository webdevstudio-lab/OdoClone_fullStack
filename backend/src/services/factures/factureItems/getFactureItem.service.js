import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const getFactureItem = async factureItemId => {
  try {
    if (!factureItemId) {
      throw new BadRequestException(
        "L'identifiant de l'item de la facture est manquant ou invalide!",
        ErrorCodeEnum.FACTURE_ITEM_NOT_FOUND
      );
    }
    const factureItem = await prisma.itemsFacture.findUnique({
      where: { itemId: factureItemId },
    });

    if (!factureItemId) {
      throw new BadRequestException(
        "Cette Ligne de la facture n'existe pas dans notre base de données!",
        ErrorCodeEnum.DEVIS_ITEM_NOT_FOUND
      );
    }

    return { factureItem };
  } catch (e) {
    logger.error(`Error getting factureItem: ${e}`);
    throw e;
  }
};
