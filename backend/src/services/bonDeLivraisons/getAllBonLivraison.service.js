import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const getbonLivraisons = async () => {
  try {
    const bonDeLivraison = await prisma.bonDeLivraison.findMany({
      orderBy: { createAt: 'desc' },
    });
    if (bonDeLivraison.length === 0) {
      throw new BadRequestException(
        "Il n'y a aucun bon de Livraison dans notre base de données!",
        ErrorCodeEnum.BL_NOT_FOUND
      );
    }
    return { bonDeLivraison };
  } catch (e) {
    logger.error('Error while fetching bon de Livraison', e);
    throw e;
  }
};
