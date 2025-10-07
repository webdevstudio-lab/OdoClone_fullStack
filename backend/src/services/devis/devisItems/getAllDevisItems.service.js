import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const getAllDevisItems = async devisId => {
  try {
    if (!devisId) {
      throw new BadRequestException(
        "L'identifiant du devis est manquant ou invalide!",
        ErrorCodeEnum.DEVIS_NOT_FOUND
      );
    }
    //on verifie si le devis existe
    const existingDevis = await prisma.devis.findUnique({
      where: { id: devisId },
    });

    if (!existingDevis) {
      throw new BadRequestException(
        "Ce devis n'existe pas dans notre base de données!",
        ErrorCodeEnum.DEVIS_NOT_FOUND
      );
    }

    const devisItems = await prisma.itemsDevis.findMany({
      where: { devisId },
    });
    if (devisItems.length === 0) {
      throw new BadRequestException(
        "Il n'y a aucune ligne dans ce devis !",
        ErrorCodeEnum.DEVIS_ITEM_NOT_FOUND
      );
    }

    return { devisItems };
  } catch (e) {
    logger.error(`Error fetching devisItems: ${e}`);
    throw e;
  }
};
