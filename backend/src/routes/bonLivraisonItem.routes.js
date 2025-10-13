import express from 'express';

import {
  getAllItemBonLivraison,
  getOneItemBonLivraison,
  addNewItemBonLivraison,
  updateItemBonLivraison,
  deleteItemBonLivraison,
  deleteAllItemBonLivraison,
} from '#controllers/itemBonLivraison.controller.js';

const bonLivraisonItemRoutes = express.Router();

bonLivraisonItemRoutes.post('/add/:id', addNewItemBonLivraison);
bonLivraisonItemRoutes.get('/all/:id', getAllItemBonLivraison);
bonLivraisonItemRoutes.get('/:id', getOneItemBonLivraison);
bonLivraisonItemRoutes.patch('/update/:id', updateItemBonLivraison);
bonLivraisonItemRoutes.delete('/delete/:id', deleteItemBonLivraison);
bonLivraisonItemRoutes.delete('/delete-all/:id', deleteAllItemBonLivraison);

export default bonLivraisonItemRoutes;
