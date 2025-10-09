import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const addFacture = async (body, clientId) => {
  try {
    const { description } = body;
    const year = new Date().getFullYear();
    const num = `FAC-${year}-00`;

    //Verifier si le client existe
    const existingClient = await prisma.client.findUnique({
      where: { id: clientId },
    });

    if (!existingClient) {
      throw new BadRequestException(
        "Ce client n'existe pas dans notre base de données",
        ErrorCodeEnum.CLIENT_NOT_FOUND
      );
    }

    //On recupere tout les devis
    const facture = await prisma.facture.findMany();

    if (facture.length === 0) {
      //**On cree le premier devis */
      const numFacture = `${num}1`;

      const facture = await prisma.facture.create({
        data: {
          numFacture,
          description,
          clientId,
        },
      });
      return { facture };
    } else {
      //on recupere le dernier facture
      const lasFact = await prisma.facture.findMany({
        orderBy: { createAt: 'desc' },
        select: { numFacture: true },
        take: 1,
      });

      //**On incremente le dernier numero du derniere facture pour  */
      const numFacture = `${num}${parseInt(lasFact[0].numFacture[lasFact[0].numFacture.length - 1]) + 1}`;

      //**On cree le facture suivant */
      const facture = await prisma.facture.create({
        data: {
          numFacture,
          description,
          clientId,
        },
      });

      return { facture };
    }
  } catch (e) {
    logger.error(`Error creating the facture  : ${e}`);
    throw e;
  }
};
