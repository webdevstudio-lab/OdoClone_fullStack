import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { NotFoundException } from '#utils/app-error.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';

export const deleteUser = async userId => {
  try {
    if (!userId) {
      throw new NotFoundException(
        "L'identifiant de l'utilisateur est manquant ou invalide!",
        ErrorCodeEnum.AUTH_USER_NOT_FOUND
      );
    }
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new NotFoundException(
        "Cette utilisateur n'existe pas dans notre base de données!",
        ErrorCodeEnum.AUTH_USER_NOT_FOUND
      );
    }
    await prisma.user.delete({
      where: { id: userId },
    });

    return {
      ...user,
      password: undefined,
    };
  } catch (e) {
    logger.error(`Error deleting user: ${e}`);
    throw e;
  }
};
