import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const addDevisItems = async (devisId, body) => {
  try {
    const { description, quantity, unitePrice, unite } = body;
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

    const devisItem = await prisma.itemsDevis.create({
      data: {
        description,
        quantity,
        unitePrice,
        unite,
        devisId,
        total: quantity * unitePrice,
      },
    });

    //on met a jour le total du devis
    await prisma.devis.update({
      where: { id: devisId },
      data: {
        total: existingDevis.total + devisItem.total,
      },
    });
    return { devisItem };
  } catch (e) {
    logger.error(`Error creating the devis: ${e}`);
    throw e;
  }
};
