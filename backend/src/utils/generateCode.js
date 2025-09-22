import logger from '#config/logger.js';
export const generateCode = async () => {
  try {
    const code = Math.floor(100000 + Math.random() * 900000);
    return code.toString().trim();
  } catch (e) {
    logger.error(`Error geterting verification code: ${e}`);
    throw e;
  }
};
