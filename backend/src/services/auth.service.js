import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import {
  BadRequestException,
  UnauthorizedException,
} from '#utils/app-error.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { hashValue, compareValue } from '#utils/bcrypt.js';

export const signUpUser = async body => {
  try {
    const { name, email, password, role = 'user' } = body;

    //Existing user
    const ExistingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (ExistingUser) {
      throw new BadRequestException(
        'Oups ! Un compte avec cette addresse email existe deja',
        ErrorCodeEnum.AUTH_USER_ALREADY_EXISTS
      );
    }

    //Hash password
    const hashedPassword = await hashValue(password);

    //Create user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

    //Return user
    return {
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    };
  } catch (e) {
    logger.error(`Error creating the user: ${e}`);
    throw e;
  }
};
