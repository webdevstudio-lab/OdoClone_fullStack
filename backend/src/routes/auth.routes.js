import express from 'express';
import { register, login, logout } from '#controllers/auth.controller.js';

const authRoutes = express.Router();

authRoutes.post('/sign-up', register);
authRoutes.post('/login', login);
authRoutes.post('/logout', logout);

export default authRoutes;
