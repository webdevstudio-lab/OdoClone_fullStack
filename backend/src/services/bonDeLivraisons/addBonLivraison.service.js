import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const addBonLivraison = async (body, clientId) => {
  try {
    const { description } = body;
    const year = new Date().getFullYear();
    const num = `BL-${year}-00`;

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

    //On recupere tout les bon de livraison
    const bonLivraison = await prisma.bonDeLivraison.findMany();

    if (bonLivraison.length === 0) {
      //**On cree le premier bon de livraison */
      const numBonLivraison = `${num}1`;

      const bonDeLivraison = await prisma.bonDeLivraison.create({
        data: {
          numBon: numBonLivraison,
          description,
          clientId,
        },
      });
      return { bonDeLivraison };
    } else {
      //on recupere le dernier bon de livraison
      const lasFact = await prisma.bonDeLivraison.findMany({
        orderBy: { createAt: 'desc' },
        select: { numBon: true },
        take: 1,
      });

      //**On incremente le dernier numero du derniere bon de livraison  */
      const numBonLivraison = `${num}${parseInt(lasFact[0].numBon[lasFact[0].numBon.length - 1]) + 1}`;

      //**On cree le bon de livraison suivant */
      const bonDeLivraison = await prisma.bonDeLivraison.create({
        data: {
          numBon: numBonLivraison,
          description,
          clientId,
        },
      });

      return { bonDeLivraison };
    }
  } catch (e) {
    logger.error(`Error creating the bon de livraison : ${e}`);
    throw e;
  }
};
