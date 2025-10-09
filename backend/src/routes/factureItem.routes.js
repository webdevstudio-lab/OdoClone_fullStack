import express from 'express';

import {
  getAllFactureItem,
  getOneFactureItem,
  addNewFactureItem,
  updateOneFactureItem,
  deleteOneFactureItem,
  deleteAllFactureItem,
} from '#controllers/factureItem.controller.js';

const factureItemRoutes = express.Router();

factureItemRoutes.post('/add/:id', addNewFactureItem);
factureItemRoutes.get('/all/:id', getAllFactureItem);
factureItemRoutes.get('/:id', getOneFactureItem);
factureItemRoutes.patch('/update/:id', updateOneFactureItem);
factureItemRoutes.delete('/delete/:id', deleteOneFactureItem);
factureItemRoutes.delete('/delete-all/:id', deleteAllFactureItem);

export default factureItemRoutes;
