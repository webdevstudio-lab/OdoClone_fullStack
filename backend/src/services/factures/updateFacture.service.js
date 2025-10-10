import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const updateFacture = async (factureId, body) => {
  try {
    if (!factureId) {
      throw new BadRequestException(
        "L'identifiant du facture est manquant ou invalide!",
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

    const facture = await prisma.facture.update({
      where: { id: factureId },
      data: body,
    });

    return { facture };
  } catch (error) {
    logger.error('Error while fetching facture', error);
    throw error;
  }
};
