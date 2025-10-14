import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { xss } from 'express-xss-sanitizer';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';

//INTERNALS IMPORTS
import envConfig from '#config/env.config.js';
import { errorHandler } from '#middlewares/errorHandler.middleware.js';
import { asyncHandler } from '#middlewares/asyncHandler.middleware.js';
import { HTTPSTATUS } from '#config/http.config.js';
import logger from '#config/logger.js';
import { isAuth } from '#middlewares/isAuth.middlewares.js';

//ROUTES
import authRoutes from '#routes/auth.routes.js';
import userRoutes from '#routes/user.routes.js';
import clientRoutes from '#routes/client.routes.js';
import devisRoutes from '#routes/devis.routes.js';
import devisItemRoutes from '#routes/devisItem.routes.js';
import factureRoutes from '#routes/factures.routes.js';
import factureItemRoutes from '#routes/factureItem.routes.js';
import bonLivraisonRoutes from '#routes/bonLivraison.routes.js';
import bonLivraisonItemRoutes from '#routes/bonLivraisonItem.routes.js';

const Env = envConfig();

const app = express();
const BASE_PATH = Env.BASE_PATH;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  handler: (req, res) => {
    console.warn(`Rate limit exceeded by IP : ${req.ip}`);
    res.status(HTTPSTATUS.TOO_MANY_REQUESTS).json({
      message: 'Too many requests, please try again later',
    });
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: Env.FRONTEND_ORIGIN, credentials: true }));
app.use(xss());
app.use(helmet());
app.use(cookieParser());
app.use(limiter);
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
app.use(`${BASE_PATH}/user`, isAuth, userRoutes);
app.use(`${BASE_PATH}/client`, isAuth, clientRoutes);
app.use(`${BASE_PATH}/devis`, devisRoutes);
app.use(`${BASE_PATH}/devisitem`, devisItemRoutes);
app.use(`${BASE_PATH}/factures`, factureRoutes);
app.use(`${BASE_PATH}/factureitem`, factureItemRoutes);
app.use(`${BASE_PATH}/bonLivraison`, bonLivraisonRoutes);
app.use(`${BASE_PATH}/bonLivraisonItem`, bonLivraisonItemRoutes);

//MIDDLEWARES
app.use(errorHandler);

//START SERVER
app.listen(Env.PORT, async () => {
  console.log(
    `Server is running on port localhost:${Env.PORT} in ${Env.NODE_ENV} mode`
  );
});
