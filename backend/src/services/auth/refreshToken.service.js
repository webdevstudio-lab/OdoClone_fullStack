import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { UnauthorizedException } from '#utils/app-error.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { compareValue } from '#utils/bcrypt.js';
import { generateAccessToken, verifyRefreshToken } from '#utils/jwt.js';

//refresh token
export const refreshToken = async token => {
  try {
    const { payload } = await verifyRefreshToken(token);

    if (!payload) {
      throw new UnauthorizedException(
        'Ce token est invalide. Vous devez vous connecter pour accéder à cette ressource',
        ErrorCodeEnum.AUTH_INVALID_TOKEN
      );
    }
    //get user
    const user = await prisma.user.findUnique({
      where: { id: payload.Id },
    });
    if (!user) {
      throw new UnauthorizedException(
        'Ce token est invalide. Vous devez vous connecter pour accéder à cette ressource',
        ErrorCodeEnum.AUTH_INVALID_TOKEN
      );
    }

    //compare hashed token
    const verifyToken = await compareValue(token, user.refresToken);
    if (!verifyToken) {
      throw new UnauthorizedException(
        'Ce token est invalide. Vous devez vous connecter pour accéder à cette ressource',
        ErrorCodeEnum.AUTH_INVALID_TOKEN
      );
    }

    //generate access token
    const accessToken = await generateAccessToken(user.id, user.role);
    return { accessToken };
  } catch (e) {
    logger.error(`Error refreshing token: ${e}`);
    throw e;
  }
};
