import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import {
  BadRequestException,
  UnauthorizedException,
} from '#utils/app-error.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { hashValue, compareValue } from '#utils/bcrypt.js';
import { generateCode } from '#utils/generateCode.js';

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

<<<<<<< HEAD:backend/src/services/auth/signUp.service.js
    //generate verification code
    const verificationCode = await generateCode();
=======
    //create verification code
>>>>>>> 108f9f2affecc08e5572d954aabb6e2be9d37d38:backend/src/services/auth.service.js

    //Hash password
    const hashedPassword = await hashValue(password);

    //Create user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        verifCode: verificationCode,
      },
    });

    //Return user
    return {
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        verifCode: newUser.verifCode,
      },
    };
  } catch (e) {
    logger.error(`Error creating the user: ${e}`);
    throw e;
  }
};
