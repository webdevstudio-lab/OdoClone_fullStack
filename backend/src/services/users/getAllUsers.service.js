import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { NotFoundException } from '#utils/app-error.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';

export const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    if (users.length === 0) {
      throw new NotFoundException(
        "Il n'y a aucun utilisateur dans notre base de données!",
        ErrorCodeEnum.AUTH_USER_NOT_FOUND
      );
    }
    return {
      users,
    };
  } catch (e) {
    logger.error(`Error fetching users: ${e}`);
    throw e;
  }
};
