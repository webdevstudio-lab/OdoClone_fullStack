import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { NotFoundException } from '#utils/app-error.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { compareValue, hashValue } from '#utils/bcrypt.js';

export const updateUserPassword = async (userId, body) => {
  const { oldPassword, newPassword } = body;
  try {
    if (!userId) {
      throw new NotFoundException(
        "L'identifiant de l'utilisateur est manquant ou invalide!",
        ErrorCodeEnum.AUTH_USER_NOT_FOUND
      );
    }

    if (oldPassword === newPassword) {
      throw new NotFoundException(
        'Le nouveau mot de passe est identique au mot de passe actuel!',
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
    const isValid = await compareValue(oldPassword, user.password);

    if (!isValid) {
      throw new NotFoundException(
        "L'ancien mot de passe est incorrect!",
        ErrorCodeEnum.AUTH_USER_NOT_FOUND
      );
    }

    //crypt password
    const hashedPassword = await hashValue(newPassword);

    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    return user;
  } catch (e) {
    logger.error(`Error updating user: ${e}`);
    throw e;
  }
};
