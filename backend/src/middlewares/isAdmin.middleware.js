import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import {
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
} from '#utils/app-error.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';

export const isAdmin = async (req, res, next) => {
  try {
    const userRole = req.user.role;

    if (userRole !== 'admin') {
      throw new UnauthorizedException(
        "Vous n'etes pas autoriser à accéder à cette ressource",
        ErrorCodeEnum.AUTH_UNAUTHORIZED_ACCESS
      );
    }
    next();
  } catch (e) {
    logger.error(`Error getting user role : ${e}`);
    throw e;
  }
};
