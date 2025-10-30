import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import {
  BadRequestException,
  UnauthorizedException,
} from '#utils/app-error.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';

export const activateAccount = async (userId, code) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId, isVerify: false },
    });

    if (!user) {
      throw new BadRequestException(
        "Ce compte n'existe pas ou il a deja été activer",
        ErrorCodeEnum.AUTH_USER_NOT_FOUND
      );
    }

    if (user.verifCode !== code.code) {
      throw new UnauthorizedException(
        'Le code de verification est incorrect',
        ErrorCodeEnum.AUTH_INVALID_TOKEN
      );
    } else {
      await prisma.user.update({
        where: { id: userId },
        data: { isVerify: true, verifCode: 'null' },
      });
    }

    return {
      user: {
        id: user.id,
      },
    };
  } catch (e) {
    logger.error(`Error activating account: ${e}`);
    throw e;
  }
};
