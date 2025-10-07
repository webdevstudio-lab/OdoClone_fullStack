import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const deleteDevisItem = async devisItemId => {
  try {
    if (!devisItemId) {
      throw new BadRequestException(
        "L'identifiant de l'item du devis est manquant ou invalide!",
        ErrorCodeEnum.DEVIS_ITEM_NOT_FOUND
      );
    }
    //on verifie si le devisItem existe
    const existingDevisItem = await prisma.itemsDevis.findUnique({
      where: { itemId: devisItemId },
    });

    if (!existingDevisItem) {
      throw new BadRequestException(
        "Cet Ligne du devis n'existe pas dans notre base de données!",
        ErrorCodeEnum.DEVIS_ITEM_NOT_FOUND
      );
    }

    //on recupere le devis pour verifier si il existe
    const devis = await prisma.devis.findUnique({
      where: { id: existingDevisItem.devisId },
    });

    if (!devis) {
      throw new BadRequestException(
        "Ce devis n'existe pas dans notre base de données!",
        ErrorCodeEnum.DEVIS_NOT_FOUND
      );
    }

    //on met a jour le total du devis
    await prisma.devis.update({
      where: { id: devis.id },
      data: { total: devis.total - existingDevisItem.total },
    });

    await prisma.itemsDevis.delete({
      where: { itemId: devisItemId },
    });
  } catch (e) {
    logger.error(`Error deleting devisItem: ${e}`);
    throw e;
  }
};
