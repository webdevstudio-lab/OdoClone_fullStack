import { getEnv } from '../utils/get-env.js';

const envConfig = () => ({
  NODE_ENV: getEnv('NODE_ENV', 'development'),

  PORT: getEnv('PORT', '3000'),
  BASE_PATH: getEnv('BASE_PATH', '/api'),
  DATABASE_URL: getEnv('DATABASE_URL'),

  JWT_SECRET: getEnv('JWT_SECRET', 'secret_jwt'),
  JWT_SECRET_REFRESH: getEnv('REFRESH_SECRET', 'secret_refresh_jwt'),
  JWT_EXPIRES_IN: getEnv('JWT_EXPIRES_IN', '5'),
  JWT_REFRESH_EXPIRES_IN: getEnv('JWT_REFRESH_EXPIRES_IN', '7d'),

  FRONTEND_ORIGIN: getEnv('FRONTEND_ORIGIN', 'localhost'),
});

export default envConfig;
