import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const getDevis = async devisId => {
  try {
    if (!devisId) {
      throw new BadRequestException(
        "L'identifiant du devis est manquant ou invalide!",
        ErrorCodeEnum.DEVIS_NOT_FOUND
      );
    }

    //on verifie si le devis existe
    const devis = await prisma.devis.findUnique({
      where: { id: devisId },
      include: {
        devisItem: {
          select: {
            itemId: true,
            description: true,
            quantity: true,
            unitePrice: true,
            total: true,
          },
        },
      },
    });

    if (!devis) {
      throw new BadRequestException(
        "Ce devis n'existe pas dans notre base de données!",
        ErrorCodeEnum.DEVIS_NOT_FOUND
      );
    }
    return { devis };
  } catch (e) {
    logger.error('Error while fetching devis', e);
    throw e;
  }
};
