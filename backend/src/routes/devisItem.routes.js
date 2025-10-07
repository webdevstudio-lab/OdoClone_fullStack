import express from 'express';

import {
  getAllDevisItem,
  getOneDevisItems,
  addNewDevisItem,
  updateOneDevisItems,
  deleteOneDevisItem,
  deleteAllDevisItem,
} from '#controllers/devisItems.controller.js';

const devisItemRoutes = express.Router();

devisItemRoutes.post('/add/:id', addNewDevisItem);
devisItemRoutes.get('/all/:id', getAllDevisItem);
devisItemRoutes.get('/:id', getOneDevisItems);
devisItemRoutes.patch('/update/:id', updateOneDevisItems);
devisItemRoutes.delete('/delete/:id', deleteOneDevisItem);
devisItemRoutes.delete('/delete-all/:id', deleteAllDevisItem);

export default devisItemRoutes;
