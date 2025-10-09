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
  const body = itemSchema.parse(req.body);
  const factureId = req.params.id;
  //CREATE FACTURE LOGIC
  const { facture } = await addFactureItems(body, factureId);
  //RETURN RESPONSE
  logger.info(`Facture ${facture.codeFacture} created successfully`);
  res.status(HTTPSTATUS.CREATED).json({
    message: `La facture a été crée avec le code: ${facture.codeFacture} !`,
    facture,
  });
});

//GET ONE FACTURE ITEM
export const getOneFactureItem = asyncHandler(async (req, res, next) => {
  const factureId = req.params.id;
  //GET ONE FACTURE LOGIC
  const { facture } = await getFactureItem(factureId);
  //RETURN RESPONSE
  logger.info(`Facture ${facture.codeFacture} was fetched successfully`);
  res.status(HTTPSTATUS.OK).json({
    facture,
  });
});

//GET ALL FACTURE ITEM
export const getAllFactureItem = asyncHandler(async (req, res, next) => {
  //GET ALL FACTURE LOGIC
  const { factures } = await getAllFactureItems();
  //RETURN RESPONSE
  logger.info(`Factures were fetched successfully`);
  res.status(HTTPSTATUS.OK).json({
    factures,
  });
});

//UPDATE FACTURE ITEM
export const updateOneFactureItem = asyncHandler(async (req, res, next) => {
  const factureId = req.params.id;
  const body = itemSchema.parse(req.body);
  //UPDATE A FACTURE LOGIC
  const { facture } = await updateFactureItems(factureId, body);
  //RETURN RESPONSE
  logger.info(`Facture ${factureId} was updated successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: 'La facture a été mis à jour avec succès',
    facture,
  });
});

//DELETE FACTURE ITEM
export const deleteOneFactureItem = asyncHandler(async (req, res, next) => {
  const factureId = req.params.id;
  //DELETE A FACTURE LOGIC
  await deleteFactureItem(factureId);
  //RETURN RESPONSE
  logger.info(`Facture ${factureId} was deleted successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: 'La facture a été supprimée avec succès',
  });
});

//DELETE ALL FACTURE ITEM

export const deleteAllFactureItem = asyncHandler(async (req, res, next) => {
  //DELETE ALL FACTURE LOGIC
  await deleteAllFactureItems();
  //RETURN RESPONSE
  logger.info(`All factures were deleted successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: 'Toutes les factures ont été supprimées avec succès',
  });
});
