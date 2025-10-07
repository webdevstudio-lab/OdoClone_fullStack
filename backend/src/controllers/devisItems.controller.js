import { HTTPSTATUS } from '#config/http.config.js';
import { asyncHandler } from '#middlewares/asyncHandler.middleware.js';
import logger from '#config/logger.js';
import { itemSchema } from '#validations/devis.validation.js';
import { addDevisItems } from '#services/devis/devisItems/addDevisItems.service.js';
import { getDevisItem } from '#services/devis/devisItems/getOneDevisItems.service.js';
import { getAllDevisItems } from '#services/devis/devisItems/getAllDevisItems.service.js';
import { updateDevisItems } from '#services/devis/devisItems/updateDevisItems.service.js';
import { deleteDevisItem } from '#services/devis/devisItems/deleteDevisItems.service.js';
import { deleteAllDevisItems } from '#services/devis/devisItems/deleteAllDevisItems.service.js';

//ADD NEW DEVIS ITEMS
export const addNewDevisItem = asyncHandler(async (req, res, next) => {
  const body = itemSchema.parse(req.body);
  const devisId = req.params.id;

  //CREATE DEVIS ITEMS LOGIC
  const { devisItem } = await addDevisItems(devisId, body);

  //RETURN RESPONSE
  logger.info(`Devis items created successfully`);
  res.status(HTTPSTATUS.CREATED).json({
    message: "L'article a été ajouté avec succès",
    devisItem,
  });
});

//GET ON DEVIS ITEMS
export const getOneDevisItems = asyncHandler(async (req, res, next) => {
  const devisItemsId = req.params.id;
  //GET ONE DEVIS ITEMS LOGIC
  const { devisItem } = await getDevisItem(devisItemsId);
  //RETURN RESPONSE
  logger.info(`Devis items were fetched successfully`);
  res.status(HTTPSTATUS.OK).json({
    devisItem,
  });
});

//GET ALL DEVIS ITEMS
export const getAllDevisItem = asyncHandler(async (req, res, next) => {
  const itemId = req.params.id;
  //GET ALL DEVIS ITEMS LOGIC
  const { devisItems } = await getAllDevisItems(itemId);
  //RETURN RESPONSE
  logger.info(`Devis items were fetched successfully`);
  res.status(HTTPSTATUS.OK).json({
    devisItems,
  });
});

//UPDATE A DEVIS ITEMS
export const updateOneDevisItems = asyncHandler(async (req, res, next) => {
  const devisItemsId = req.params.id;
  const body = itemSchema.parse(req.body);
  //UPDATE A DEVIS ITEMS LOGIC
  const { updateDevisItem } = await updateDevisItems(devisItemsId, body);
  //RETURN RESPONSE
  logger.info(`Devis items ${devisItemsId} was updated successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: "L'article a été mis à jour avec succès",
    updateDevisItem,
  });
});

//DELETE A DEVIS ITEMS
export const deleteOneDevisItem = asyncHandler(async (req, res, next) => {
  const devisItemsId = req.params.id;
  //DELETE A DEVIS ITEMS LOGIC
  await deleteDevisItem(devisItemsId);
  //RETURN RESPONSE
  logger.info(`Devis items ${devisItemsId} was deleted successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: "L'article a été supprimé avec succès",
  });
});

//DELETE ALL DEVIS ITEMS
export const deleteAllDevisItem = asyncHandler(async (req, res, next) => {
  const devisId = req.params.id;
  //DELETE ALL DEVIS ITEMS LOGIC
  await deleteAllDevisItems(devisId);
  //RETURN RESPONSE
  logger.info(`Devis items ${devisId} was deleted successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: 'Les articles ont été supprimés avec succès',
  });
});
