import express from 'express';
import {
  getAllClients,
  getOneClient,
  addNewClient,
  updateOneClient,
  deleteOneClient,
} from '#controllers/client.controller.js';

const clientRoutes = express.Router();

clientRoutes.post('/create', addNewClient);
clientRoutes.get('/', getAllClients);
clientRoutes.get('/:id', getOneClient);
clientRoutes.patch('/update/:id', updateOneClient);
clientRoutes.delete('/:id', deleteOneClient);

export default clientRoutes;
