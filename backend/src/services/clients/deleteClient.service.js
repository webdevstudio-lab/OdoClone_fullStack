import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { NotFoundException } from '#utils/app-error.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';

export const deleteClient = async clientId => {
  try {
    if (!clientId) {
      throw new NotFoundException(
        "L'identifiant du client est manquant ou invalide!",
        ErrorCodeEnum.CLIENT_NOT_FOUND
      );
    }

    //verify if client exist
    const existingClient = await prisma.client.findUnique({
      where: { id: clientId },
    });

    if (!existingClient) {
      throw new NotFoundException(
        "Ce client n'existe pas dans notre base de données!",
        ErrorCodeEnum.CLIENT_NOT_FOUND
      );
    }

    await prisma.client.delete({
      where: { id: clientId },
    });

    return { existingClient };
  } catch (e) {
    logger.error(`Error creating the client: ${e}`);
    throw e;
  }
};
