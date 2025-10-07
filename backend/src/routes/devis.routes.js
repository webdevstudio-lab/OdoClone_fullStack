import express from 'express';

import {
  getAllDevis,
  getOneDevis,
  addNewDevis,
  updateOneDevis,
  deleteOneDevis,
} from '#controllers/devis.controller.js';

const devisRoutes = express.Router();

devisRoutes.post('/create/:id', addNewDevis);
devisRoutes.get('/', getAllDevis);
devisRoutes.get('/:id', getOneDevis);
devisRoutes.patch('/update/:id', updateOneDevis);
devisRoutes.delete('/delete/:id', deleteOneDevis);

export default devisRoutes;
