import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { NotFoundException } from '#utils/app-error.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';

export const getClients = async () => {
  try {
    const clients = await prisma.client.findMany({
      orderBy: { createAt: 'desc' },
    });

    if (clients.length === 0) {
      throw new NotFoundException(
        "Il n'y a aucun client dans notre base de données!",
        ErrorCodeEnum.CLIENT_NOT_FOUND
      );
    }
    return {
      clients,
    };
  } catch (e) {
    logger.error(`Error creating the client: ${e}`);
    throw e;
  }
};
