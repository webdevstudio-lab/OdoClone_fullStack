import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const addFactureItems = async (factureId, body) => {
  try {
    const { description, quantity, unitePrice, unite } = body;

    if (!factureId) {
      throw new BadRequestException(
        "L'identifiant de  la Facture est manquant ou invalide!",
        ErrorCodeEnum.FACTURE_NOT_FOUND
      );
    }

    //on verifie si la facture existe
    const existingFacture = await prisma.facture.findUnique({
      where: { id: factureId },
    });

    if (!existingFacture) {
      throw new BadRequestException(
        "Cette facture n'existe pas dans notre base de données!",
        ErrorCodeEnum.FACTURE_NOT_FOUND
      );
    }
    const factureItem = await prisma.itemsFacture.create({
      data: {
        description,
        quantity,
        unite,
        unitePrice,
        factureId,
        total: quantity * unitePrice,
      },
    });

    //on met a jour le total de la facture
    await prisma.facture.update({
      where: { id: factureId },
      data: {
        total: existingFacture.total + factureItem.total,
      },
    });
    return { factureItem };
  } catch (e) {
    logger.error(`Error creating the facture: ${e}`);
    throw e;
  }
};
