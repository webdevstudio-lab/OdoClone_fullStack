import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const updateBlItems = async (itemId, body) => {
  try {
    const { description, quantity, unite } = body;

    if (!itemId) {
      throw new BadRequestException(
        "L'identifiant de l'item du bon de livraison est manquant ou invalide!",
        ErrorCodeEnum.BL_ITEM_NOT_FOUND
      );
    }

    //on verifie si l' item du bon de livraison existe
    const existingBlItem = await prisma.itemsBl.findUnique({
      where: { itemId: itemId },
    });

    if (!existingBlItem) {
      throw new BadRequestException(
        "Cet Ligne du bon de livraison n'existe pas dans notre base de données!",
        ErrorCodeEnum.BL_ITEM_NOT_FOUND
      );
    }

    //on recupere le bon de livraison pour verifier si il existe
    const bonDeLivraison = await prisma.bonDeLivraison.findUnique({
      where: { id: existingBlItem.BonLivId },
    });

    if (!bonDeLivraison) {
      throw new BadRequestException(
        "Ce article n'est rattaché a aucun bon de livraison !",
        ErrorCodeEnum.BL_NOT_FOUND
      );
    }

    //on met a jour le bon de livraisonItem
    const updateBlItem = await prisma.itemsBl.update({
      where: { itemId: itemId },
      data: {
        description,
        quantity,
        unite,
      },
    });

    return { updateBlItem };
  } catch (e) {
    logger.error(`Error updating factureItem: ${e}`);
    throw e;
  }
};
