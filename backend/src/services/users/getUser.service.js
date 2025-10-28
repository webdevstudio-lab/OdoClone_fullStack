import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { BadRequestException, NotFoundException } from '#utils/app-error.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';

export const getUser = async userId => {
  try {
    if (!userId) {
      throw new BadRequestException(
        "L'identifiant de l'utilisateur est manquant ou invalide!",
        ErrorCodeEnum.AUTH_USER_NOT_FOUND
      );
    }
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        isVerify: true,
        role: true,
        createAt: true,
      },
    });

    if (!user) {
      throw new NotFoundException(
        "Cette utilisateur n'existe pas dans notre base de données!",
        ErrorCodeEnum.AUTH_USER_NOT_FOUND
      );
    }
    return { user };
  } catch (e) {
    logger.error(`Error fetching user: ${e}`);
    throw e;
  }
};
