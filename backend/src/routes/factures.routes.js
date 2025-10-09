import express from 'express';

import {
  getAllFacture,
  getOneFacture,
  addNewFacture,
  updateOneFacture,
  deleteOneFacture,
} from '#controllers/factures.controller.js';

const factureRoutes = express.Router();

factureRoutes.post('/create/:id', addNewFacture);
factureRoutes.get('/', getAllFacture);
factureRoutes.get('/:id', getOneFacture);
factureRoutes.patch('/update/:id', updateOneFacture);
factureRoutes.delete('/delete/:id', deleteOneFacture);

export default factureRoutes;
