import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const getFacture = async factureId => {
  try {
    if (!factureId) {
      throw new BadRequestException(
        "L'identifiant de la facture est manquant ou invalide!",
        ErrorCodeEnum.DEVIS_NOT_FOUND
      );
    }

    //on verifie si le facture existe
    const facture = await prisma.facture.findUnique({
      where: { id: factureId },
      include: {
        factureItem: {
          select: {
            itemId: true,
            description: true,
            quantity: true,
            unite: true,
            unitePrice: true,
            total: true,
          },
        },
      },
    });

    if (!facture) {
      throw new BadRequestException(
        "Ce facture n'existe pas dans notre base de données!",
        ErrorCodeEnum.FACTURE_ITEM_NOT_FOUND
      );
    }
    return { facture };
  } catch (e) {
    logger.error('Error while fetching facture', e);
    throw e;
  }
};
