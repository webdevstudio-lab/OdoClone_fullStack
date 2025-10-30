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
import { refreshToken } from '#services/auth/refreshToken.service.js';
import {
  setAuthCookies,
  setNewAcessCookie,
  clearAllCookies,
} from '#utils/cookies.js';

//REGISTER A USER
export const register = asyncHandler(async (req, res, next) => {
  const body = signupSchema.parse(req.body);

  //CREATE A USER LOGIC
  const { user } = await signUpUser(body);

  //SEND A CONFIRMATION EMAIL

  //SEND VERIFICATON CODE BY EMAIL

  //RETURN RESPONSE
  // logger.info(`User whith email: ${user.email} was created successfully`);
  res.status(HTTPSTATUS.CREATED).json({
    message: "L'utilisateur a été créé avec succès",
    user,
  });
});

//ACTIVATE A USER ACCOUNT

export const activate = asyncHandler(async (req, res, next) => {
  const userId = req.params.id;
  const code = activateSchema.parse(req.body);

  //ACTIVATE USER ACCOUNT LOGIC
  const { user } = await activateAccount(userId, code);

  //SEND A CONFIRMATION EMAIL
  // logger.info(`Account whith ID: ${user.id} was successfully activated`);
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

  // logger.info(`User whith email: ${user.email} was logged successfully`);
  res.status(HTTPSTATUS.CREATED).json({
    message: "L'utilisateur a été connecté avec succès",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      isVerify: user.isVerify,
      token: user.token,
      refreshToken: user.refreshToken,
    },
  });
});

//LOGOUT A USER

export const logout = asyncHandler(async (req, res, next) => {
  //LOGOUT USER LOGIC
  clearAllCookies(res);

  //RETURN RESPONSE
  // logger.info(`User was sucessfuly logout `);
  res.status(HTTPSTATUS.CREATED).json({
    message: "L'utilisateur a été déconnecté avec succès",
  });
});

//REFRESH TOKEN

export const refToken = asyncHandler(async (req, res, next) => {
  const token = req.cookies._odooClone_Refresh_Token;

  //REFRESH TOKEN LOGIC
  const { accessToken } = await refreshToken(token);

  //SET NEW ACCESS TOKEN
  setNewAcessCookie(res, accessToken);

  //RETURN RESPONSE
  // logger.info(`token was refreshed successfully`);
  res.status(HTTPSTATUS.CREATED).json({
    message: 'Le token a été mis à jour avec succès',
  });
});
