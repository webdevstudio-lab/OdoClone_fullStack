import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { NotFoundException } from '#utils/app-error.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';

export const updateClient = async (clientId, body) => {
  try {
    const { name, email, phone, address, logo } = body;

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

    const verifyPhone = phone === existingClient.phone;

    if (!verifyPhone) {
      //on verifie si le numéro de téléphone est déjà utilisé
      const existingPhone = await prisma.client.findUnique({
        where: { phone },
      });
      if (existingPhone) {
        throw new NotFoundException(
          'Oups ! Un client avec ce numero de telephone existe deja',
          ErrorCodeEnum.CLIENT_ALREADY_EXISTS
        );
      }
    }

    const client = await prisma.client.update({
      where: { id: clientId },
      data: {
        name,
        email,
        phone,
        address,
        logo,
      },
    });
    return { client };
  } catch (e) {
    logger.error(`Error updating client: ${e}`);
    throw e;
  }
};
