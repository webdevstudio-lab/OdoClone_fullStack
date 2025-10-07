import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const deleteAllDevisItems = async devisId => {
  try {
    if (!devisId) {
      throw new BadRequestException(
        "L'identifiant  du devis est manquant ou invalide!",
        ErrorCodeEnum.DEVIS_ITEM_NOT_FOUND
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

    //on met a jour le total du devis
    await prisma.devis.update({
      where: { id: existingDevis.id },
      data: { total: 0 },
    });

    await prisma.itemsDevis.deleteMany({
      where: { devisId },
    });
  } catch (e) {
    logger.error(`Error deleting devisItem: ${e}`);
    throw e;
  }
};
