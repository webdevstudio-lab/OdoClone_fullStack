import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const getFactures = async () => {
  try {
    const facture = await prisma.facture.findMany({
      orderBy: { createAt: 'desc' },
    });
    if (facture.length === 0) {
      throw new BadRequestException(
        "Il n'y a aucune facture dans notre base de données!",
        ErrorCodeEnum.FACTURE_NOT_FOUND
      );
    }
    return { facture };
  } catch (e) {
    logger.error('Error while fetching facture', e);
    throw e;
  }
};
