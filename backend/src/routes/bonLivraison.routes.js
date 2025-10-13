import express from 'express';

import {
  getAllBonLivraison,
  getBL,
  addNewBonLivraison,
  updateBL,
  deleteBL,
} from '#controllers/bonLivraison.controller.js';

const bonLivraisonRoutes = express.Router();

bonLivraisonRoutes.post('/create/:id', addNewBonLivraison);
bonLivraisonRoutes.get('/', getAllBonLivraison);
bonLivraisonRoutes.get('/:id', getBL);
bonLivraisonRoutes.patch('/update/:id', updateBL);
bonLivraisonRoutes.delete('/delete/:id', deleteBL);

export default bonLivraisonRoutes;
