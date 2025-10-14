import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import {
  BadRequestException,
  UnauthorizedException,
} from '#utils/app-error.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { compareValue, hashValue } from '#utils/bcrypt.js';
import { generateAccessToken, generateRefreshToken } from '#utils/jwt.js';

export const logInUser = async body => {
  try {
    const { email, password } = body;

    //Existing user
    const ExistingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!ExistingUser) {
      throw new BadRequestException(
        "Oups ! l'email ou le mot de passe est incorrect",
        ErrorCodeEnum.AUTH_USER_NOT_FOUND
      );
    }

    //check password
    const verifyPassword = await compareValue(password, ExistingUser.password);

    if (!verifyPassword) {
      throw new BadRequestException(
        "Oups ! l'email ou le mot de passe est incorrect",
        ErrorCodeEnum.AUTH_USER_NOT_FOUND
      );
    }

    //activated account
    const isActivated = ExistingUser.isVerify;

    if (!isActivated) {
      throw new UnauthorizedException(
        "Votre compte n'est pas encore activé , nous vous avons envoyé un mail contenant le lien d'activation de votre compte",
        ErrorCodeEnum.AUTH_UNAUTHORIZED_ACCESS
      );
    }

    //generate token
    const token = await generateAccessToken(ExistingUser.id, ExistingUser.role);
    const refreshToken = await generateRefreshToken(ExistingUser.id);

    //Hash refresh token
    const hashedRefreshToken = await hashValue(refreshToken);
    //update refresh token
    await prisma.user.update({
      where: { id: ExistingUser.id },
      data: { refresToken: hashedRefreshToken },
    });

    //return user
    return {
      user: {
        id: ExistingUser.id,
        name: ExistingUser.name,
        email: ExistingUser.email,
        role: ExistingUser.role,
        token,
        refreshToken,
      },
    };
  } catch (e) {
    logger.error(`Error logging  user: ${e}`);
    throw e;
  }
};
