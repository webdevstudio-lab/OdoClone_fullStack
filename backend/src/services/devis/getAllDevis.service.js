import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const getDevises = async () => {
  try {
    const devis = await prisma.devis.findMany({
      orderBy: { createAt: 'desc' },
    });
    if (devis.length === 0) {
      throw new BadRequestException(
        "Il n'y a aucun devis dans notre base de données!",
        ErrorCodeEnum.DEVIS_NOT_FOUND
      );
    }
    return { devis };
  } catch (e) {
    logger.error('Error while fetching devis', e);
    throw e;
  }
};
