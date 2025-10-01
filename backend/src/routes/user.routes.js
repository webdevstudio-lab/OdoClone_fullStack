import {
  getOneUser,
  getAllUser,
  updateOneUser,
  updateUserPass,
  deleteOneUser,
} from '#controllers/user.controller.js';
import express from 'express';

const userRoutes = express.Router();

userRoutes.post('/:id', getOneUser);
userRoutes.get('/all-users', getAllUser);
userRoutes.patch('/update-user/:id', updateOneUser);
userRoutes.patch('/update-password/:id', updateUserPass);
userRoutes.delete('/delete-user/:id', deleteOneUser);

export default userRoutes;
