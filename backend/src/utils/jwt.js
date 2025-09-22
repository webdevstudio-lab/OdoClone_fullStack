import jwt from 'jsonwebtoken';
import envConfig from '#config/env.config.js';
import logger from '#config/logger.js';

const Env = envConfig();

export const generateAccessToken = async (Id, role) => {
  try {
    const accessTokenOptions = {
      expiresIn: Env.JWT_EXPIRES_IN,
      secret: Env.JWT_SECRET,
      audience: ['user'],
      algorithm: 'HS256',
    };

    const accessToken = jwt.sign({ Id, role }, accessTokenOptions.secret, {
      expiresIn: accessTokenOptions.expiresIn,
      audience: accessTokenOptions.audience,
      algorithm: accessTokenOptions.algorithm,
    });

    return accessToken;
  } catch (e) {
    logger.error(`Error generating access token: ${e}`);
    throw e;
  }
};

export const generateRefreshToken = async Id => {
  try {
    const refreshTokenOptions = {
      expiresIn: Env.JWT_EXPIRES_IN,
      audience: ['user'],
      algorithm: 'HS256',
    };

    const accessToken = jwt.sign({ Id }, Env.JWT_SECRET, {
      expiresIn: refreshTokenOptions.expiresIn,
      audience: refreshTokenOptions.audience,
      algorithm: refreshTokenOptions.algorithm,
    });

    return accessToken;
  } catch (e) {
    logger.error(`Error generating access token: ${e}`);
    throw e;
  }
};
