import envConfig from '#config/env.config.js';
import logger from '#config/logger.js';

const Env = envConfig();

export const REFRESH_PATH = `${Env.BASE_PATH}/auth/refresh`;

// const defaults = {
//   httpOnly: true,
//   secure: Env.NODE_ENV === 'production' ? true : false,
//   sameSite: Env.NODE_ENV === 'production' ? 'strict' : 'lax',
// };

const defaults = {
  httpOnly: true,
  secure: true,
  sameSite: 'strict',
};

const accessTokentOptions = {
  ...defaults,
  expires: new Date(Date.now() + 60 * 60 * 1000),
};

const refreshTokentOptions = {
  ...defaults,
  expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  // path: REFRESH_PATH,
};

export const setAuthCookies = async (res, accessToken, refreshToken) => {
  try {
    res.cookie('_odooClone_Access_Token', accessToken, accessTokentOptions);
    res.cookie('_odooClone_Refresh_Token', refreshToken, refreshTokentOptions);
  } catch (e) {
    logger.error(`Error setting auth cookies: ${e}`);
    throw e;
  }
};

export const setNewAcessCookie = async (res, accessToken) => {
  try {
    res.cookie('_odooClone_Access_Token', accessToken, accessTokentOptions);
  } catch (e) {
    logger.error(`Error setting auth cookies: ${e}`);
    throw e;
  }
};

export const clearAuthaccessCookies = res => res.clearCookie('');

export const clearAllCookies = res =>
  res
    .clearCookie('_odooClone_Access_Token')
    .clearCookie('_odooClone_Refresh_Token');
