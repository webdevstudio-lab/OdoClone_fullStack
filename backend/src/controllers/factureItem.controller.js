import { HTTPSTATUS } from '#config/http.config.js';
import { asyncHandler } from '#middlewares/asyncHandler.middleware.js';
import logger from '#config/logger.js';
import { itemSchema } from '#validations/facture.validation.js';
import { addFactureItems } from '#services/factures/factureItems/addFacturesItem.service.js';
import { getFactureItem } from '#services/factures/factureItems/getFactureItem.service.js';
import { getAllFactureItems } from '#services/factures/factureItems/getAllFactureItem.service.js';
import { updateFactureItems } from '#services/factures/factureItems/updateFactureItem.service.js';
import { deleteFactureItem } from '#services/factures/factureItems/deleteFactureItem.service.js';
import { deleteAllFactureItems } from '#services/factures/factureItems/deleteAllFatureItem.service.js';

//ADD NEW FACTURE ITEM
export const addNewFactureItem = asyncHandler(async (req, res, next) => {
  const factureId = req.params.id;
  const body = itemSchema.parse(req.body);

  //CREATE FACTURE LOGIC
  const { factureItem } = await addFactureItems(factureId, body);
  //RETURN RESPONSE
  logger.info(`Facture  created successfully`);
  res.status(HTTPSTATUS.CREATED).json({
    message: "l'article a été ajouté avec succès!",
    factureItem,
  });
});

//GET ONE FACTURE ITEM
export const getOneFactureItem = asyncHandler(async (req, res, next) => {
  const factureId = req.params.id;
  //GET ONE FACTURE LOGIC
  const { factureItem } = await getFactureItem(factureId);
  //RETURN RESPONSE
  logger.info(`Facture was fetched successfully`);
  res.status(HTTPSTATUS.OK).json({
    factureItem,
  });
});

//GET ALL FACTURE ITEM
export const getAllFactureItem = asyncHandler(async (req, res, next) => {
  const factureId = req.params.id;
  //GET ALL FACTURE LOGIC
  const { factureItem } = await getAllFactureItems(factureId);
  //RETURN RESPONSE
  logger.info(`Factures were fetched successfully`);
  res.status(HTTPSTATUS.OK).json({
    factureItem,
  });
});

//UPDATE FACTURE ITEM
export const updateOneFactureItem = asyncHandler(async (req, res, next) => {
  const itemId = req.params.id;
  const body = itemSchema.parse(req.body);
  //UPDATE A FACTURE LOGIC
  const { updateFactureItem } = await updateFactureItems(itemId, body);
  //RETURN RESPONSE
  logger.info(`Facture  was updated successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: 'La facture a été mis à jour avec succès',
    updateFactureItem,
  });
});

//DELETE FACTURE ITEM
export const deleteOneFactureItem = asyncHandler(async (req, res, next) => {
  const factureId = req.params.id;
  //DELETE A FACTURE LOGIC
  await deleteFactureItem(factureId);
  //RETURN RESPONSE
  logger.info(`Facture was deleted successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: "L'article a été supprimée avec succès",
  });
});

//DELETE ALL FACTURE ITEM

export const deleteAllFactureItem = asyncHandler(async (req, res, next) => {
  const factureId = req.params.id;
  //DELETE ALL FACTURE LOGIC
  await deleteAllFactureItems(factureId);
  //RETURN RESPONSE
  logger.info(`All factures were deleted successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: 'Toutes les ligne de la factures ont été supprimées avec succès',
  });
});
