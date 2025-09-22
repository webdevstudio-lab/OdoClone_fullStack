import { HTTPSTATUS } from '#config/http.config.js';
import { asyncHandler } from '#middlewares/asyncHandler.middleware.js';
import {
  signupSchema,
  loginSchema,
  activateSchema,
} from '#validations/auth.validation.js';
import logger from '#config/logger.js';
import { signUpUser } from '#services/auth/signUp.service.js';
import { logInUser } from '#services/auth/logIn.service.js';
import { activateAccount } from '#services/auth/activate.service.js';
import { setAuthCookies } from '#utils/cookies.js';

//REGISTER A USER
export const register = asyncHandler(async (req, res, next) => {
  const body = signupSchema.parse(req.body);

  //CREATE A USER LOGIC
  const { user } = await signUpUser(body);

<<<<<<< HEAD
  //SEND A CONFIRMATION EMAIL

=======
  //SEND VERIFICATON CODE BY EMAIL

  //RETURN RESPONSE
>>>>>>> 108f9f2affecc08e5572d954aabb6e2be9d37d38
  logger.info(`User whith email: ${user.email} was created successfully`);
  res.status(HTTPSTATUS.CREATED).json({
    message: "L'utilisateur a été créé avec succès",
    user,
  });
});

//ACTIVATE A USER ACCOUNT

export const activate = asyncHandler(async (req, res, next) => {
  const userId = req.params.id;
  const body = activateSchema.parse(req.body);

  //ACTIVATE USER ACCOUNT LOGIC
  const { user } = await activateAccount(userId, body);

  //SEND A CONFIRMATION EMAIL

  logger.info(`Account whith ID: ${user.id} was successfully activated`);
  res.status(HTTPSTATUS.CREATED).json({
    message: 'Le compte a été activé avec succès',
  });
});

//LOGIN A USER

export const login = asyncHandler(async (req, res, next) => {
  const body = loginSchema.parse(req.body);

  //LOGIN USER LOGIC
  const { user } = await logInUser(body);

  //SET COOKIES
  setAuthCookies(res, user.token, user.refreshToken);

  logger.info(`User whith email: ${user.email} was logged successfully`);
  res.status(HTTPSTATUS.CREATED).json({
    message: "L'utilisateur a été connecté avec succès",
    user,
  });
});

//LOGOUT A USER

export const logout = asyncHandler(async (req, res, next) => {});
