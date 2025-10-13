import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import {
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
} from '#utils/app-error.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import jwt from 'jsonwebtoken';

export const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies._odooClone_Access_Token;
    if (!token) {
      throw new BadRequestException(
        'Vous devez vous connecter pour accéder à cette ressource',
        ErrorCodeEnum.AUTH_TOKEN_NOT_FOUND
      );
    }

    //on verifie si le token est valide
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!decodedToken) {
      throw new UnauthorizedException(
        'Ce token est invalide. Vous devez vous connecter pour accéder à cette ressource',
        ErrorCodeEnum.AUTH_INVALID_TOKEN
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: decodedToken.Id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    if (!user) {
      throw new NotFoundException(
        "cette utilisateur n'existe pas dans notre base de données",
        ErrorCodeEnum.AUTH_USER_NOT_FOUND
      );
    }
    req.user = user;
    next();
  } catch (e) {
    logger.error(`error isAuth invalid access token: ${e}`);
    throw e;
  }
};
