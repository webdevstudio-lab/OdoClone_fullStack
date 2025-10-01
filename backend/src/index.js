import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

//INTERNALS IMPORTS
import envConfig from '#config/env.config.js';
import { errorHandler } from '#middlewares/errorHandler.middleware.js';
import { asyncHandler } from '#middlewares/asyncHandler.middleware.js';
import { HTTPSTATUS } from '#config/http.config.js';
import logger from '#config/logger.js';

//ROUTES
import authRoutes from '#routes/auth.routes.js';
import userRoutes from '#routes/user.routes.js';

const Env = envConfig();

const app = express();
const BASE_PATH = Env.BASE_PATH;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: Env.FRONTEND_ORIGIN, credentials: true }));
app.use(helmet());
app.use(cookieParser());
app.use(
  morgan('combined', {
    stream: { write: message => logger.info(message.trim()) },
  })
);

app.get(
  `${BASE_PATH}`,
  asyncHandler(async (req, res, next) => {
    res.status(HTTPSTATUS.OK).json({
      message: 'Welcome to OdoClone API',
      status: 'OK',
      timestamp: new Date().toISOString(),
      service: 'OdoClone API',
      version: '1.0.0',
      environment: process.env.NODE_ENV,
      uptime: process.uptime(),
    });
  })
);

//ROUTES
app.use(`${BASE_PATH}/auth`, authRoutes);
app.use(`${BASE_PATH}/user`, userRoutes);

//MIDDLEWARES
app.use(errorHandler);

//START SERVER
app.listen(Env.PORT, async () => {
  console.log(
    `Server is running on port localhost:${Env.PORT} in ${Env.NODE_ENV} mode`
  );
});
