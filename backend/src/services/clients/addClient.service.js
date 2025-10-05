import logger from '#config/logger.js';
import { prisma } from '#database/prisma.config.js';
import { ErrorCodeEnum } from '#enums/error-code.enum.js';
import { BadRequestException } from '#utils/app-error.js';
import { generateCode } from '#utils/generateCode.js';

export const addClient = async body => {
  try {
    const { name, email, phone, address, logo } = body;
    //existing client
    const existingClient = await prisma.client.findUnique({
      where: { phone },
    });

    if (existingClient) {
      throw new BadRequestException(
        'Oups ! Un client avec ce numero de telephone existe deja',
        ErrorCodeEnum.CLIENT_ALREADY_EXISTS
      );
    }
    // gererate client code
    const clientCode1 = await generateCode();
    const clientCode = `CL-${clientCode1}`;

    const client = await prisma.client.create({
      data: {
        name,
        email,
        phone,
        address,
        logo,
        codeClient: clientCode,
      },
    });

    return {
      client,
    };
  } catch (e) {
    logger.error(`Error creating the client: ${e}`);
    throw e;
  }
};
