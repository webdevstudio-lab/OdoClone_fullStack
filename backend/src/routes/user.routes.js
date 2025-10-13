import {
  getOneUser,
  getAllUser,
  updateOneUser,
  updateUserPass,
  deleteOneUser,
  getCurrentUser,
} from '#controllers/user.controller.js';
import { isAdmin } from '#middlewares/isAdmin.middleware.js';
import express from 'express';

const userRoutes = express.Router();

userRoutes.get('/me', getCurrentUser);
userRoutes.post('/:id', getOneUser);
userRoutes.get('/all-users', isAdmin, getAllUser);
userRoutes.patch('/update-user/:id', updateOneUser);
userRoutes.patch('/update-password/:id', updateUserPass);
userRoutes.delete('/delete-user/:id', deleteOneUser);

export default userRoutes;
