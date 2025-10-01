import { HTTPSTATUS } from '#config/http.config.js';
import { asyncHandler } from '#middlewares/asyncHandler.middleware.js';
import logger from '#config/logger.js';
import { getUser } from '#services/users/getUser.service.js';
import { updateUser } from '#services/users/updateUser.service.js';
import { getAllUsers } from '#services/users/getAllUsers.service.js';
import { deleteUser } from '#services/users/deleteUser.service.js';
import { updateUserPassword } from '#services/users/updatePassword.service.js';
import {
  userSchema,
  userPasswordSchema,
} from '#validations/user.validation.js';

//GET A USER BY ID
export const getOneUser = asyncHandler(async (req, res, next) => {
  const userId = req.params.id;
  //GET A USER LOGIC
  const user = await getUser(userId);
  //RETURN RESPONSE
  logger.info(`User whith ID: ${userId} was fetched successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: 'User fetched successfully',
    user,
  });
});

//UPDATE A USER
export const updateOneUser = asyncHandler(async (req, res, next) => {
  const userId = req.params.id;
  const body = userSchema.parse(req.body);
  //UPDATE A USER LOGIC
  const user = await updateUser(userId, body);
  //RETURN RESPONSE
  logger.info(`User whith ID: ${userId} was updated successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: 'User updated successfully',
  });
});

//GET ALL USERS
export const getAllUser = asyncHandler(async (req, res, next) => {
  //GET ALL USERS LOGIC
  const users = await getAllUsers();
  //RETURN RESPONSE
  logger.info(`Users were fetched successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: 'Users fetched successfully',
    users,
  });
});

//DELETE A USER
export const deleteOneUser = asyncHandler(async (req, res, next) => {
  const userId = req.params.id;
  //DELETE A USER LOGIC
  await deleteUser(userId);
  //RETURN RESPONSE
  logger.info(`User whith ID: ${userId} was deleted successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: 'User deleted successfully',
  });
});

//UPDATE USER PASSWORD
export const updateUserPass = asyncHandler(async (req, res, next) => {
  const userId = req.params.id;
  const body = userPasswordSchema.parse(req.body);

  //UPDATE A USER LOGIC
  const user = await updateUserPassword(userId, body);

  //RETURN RESPONSE
  logger.info(`User whith ID: ${userId} was updated successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: 'User updated successfully',
  });
});
