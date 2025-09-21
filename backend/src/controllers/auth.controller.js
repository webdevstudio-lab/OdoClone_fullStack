import { HTTPSTATUS } from '#config/http.config.js';
import { asyncHandler } from '#middlewares/asyncHandler.middleware.js';
import { signupSchema, loginSchema } from '#validations/auth.validation.js';
import logger from '#config/logger.js';
import { signUpUser } from '#services/auth.service.js';

//REGISTER A USER
export const register = asyncHandler(async (req, res, next) => {
  const body = signupSchema.parse(req.body);

  //CREATE A USER LOGIC
  const { user } = await signUpUser(body);

  //SEND VERIFICATON CODE BY EMAIL

  //RETURN RESPONSE
  logger.info(`User whith email: ${user.email} was created successfully`);
  res.status(HTTPSTATUS.CREATED).json({
    message: "L'utilisateur a été créé avec succès",
    user,
  });
});

//LOGIN A USER
export const login = asyncHandler(async (req, res, next) => {});

//LOGOUT A USER
export const logout = asyncHandler(async (req, res, next) => {});
