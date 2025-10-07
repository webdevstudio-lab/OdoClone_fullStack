import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const addDevis = async (body, clientId) => {
  try {
    const { description } = body;
    const year = new Date().getFullYear();
    const num = `DEV-${year}-00`;

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
    const devis = await prisma.devis.findMany();

    if (devis.length === 0) {
      //**On cree le premier devis */
      const numDevis = `${num}1`;

      const devis = await prisma.devis.create({
        data: {
          numDevis,
          description,
          clientId,
        },
      });
      return { devis };
    } else {
      //on recupere le dernier devis
      const lasFact = await prisma.devis.findMany({
        orderBy: { createAt: 'desc' },
        select: { numDevis: true },
        take: 1,
      });

      //**On incremente le dernier numero du derniere devis pour  */
      const numDevis = `${num}${parseInt(lasFact[0].numDevis[lasFact[0].numDevis.length - 1]) + 1}`;

      //**On cree le devis suivant */
      const devis = await prisma.devis.create({
        data: {
          numDevis,
          description,
          clientId,
        },
      });

      return { devis };
    }
  } catch (e) {
    logger.error(`Error creating the devisItem  : ${e}`);
    throw e;
  }
};
