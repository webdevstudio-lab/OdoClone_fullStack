import express from 'express';
import {
  register,
  login,
  logout,
  activate,
  refToken,
} from '#controllers/auth.controller.js';

const authRoutes = express.Router();

authRoutes.post('/sign-up', register);
authRoutes.post('/activate/:id', activate);
authRoutes.post('/sign-in', login);
authRoutes.get('/logout', logout);
authRoutes.get('/refresh', refToken);

export default authRoutes;
