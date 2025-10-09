import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';

export const deleteFacture = async factureId => {
  try {
    if (!factureId) {
      throw new BadRequestException(
        "L'identifiant de la facture est manquant ou invalide!",
        ErrorCodeEnum.FACTURE_NOT_FOUND
      );
    }

    //on verifie si la facture existe
    const existingFacture = await prisma.facture.findUnique({
      where: { id: factureId },
    });

    if (!existingFacture) {
      throw new BadRequestException(
        "Cet facture n'existe pas dans notre base de données!",
        ErrorCodeEnum.FACTURE_ITEM_NOT_FOUND
      );
    }

    await prisma.facture.delete({
      where: { id: factureId },
    });
  } catch (error) {
    logger.error('Error while deleting facture', error);
    throw error;
  }
};
