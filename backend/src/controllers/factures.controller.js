import { HTTPSTATUS } from '#config/http.config.js';
import { asyncHandler } from '#middlewares/asyncHandler.middleware.js';
import logger from '#config/logger.js';
import { factureSchema } from '#validations/facture.validation.js';
import { addFacture } from '#services/factures/addFacture.service.js';
import { getFacture } from '#services/factures/getOneFacture.service.js';
import { getFactures } from '#services/factures/getAllFacture.service.js';
import { updateFacture } from '#services/factures/updateFacture.service.js';
import { deleteFacture } from '#services/factures/deleteFacture.service.js';

//ADD NEW FACTURE
export const addNewFacture = asyncHandler(async (req, res, next) => {
  const body = factureSchema.parse(req.body);
  const clientId = req.params.id;

  //CREATE FACTURE LOGIC
  const { facture } = await addFacture(body, clientId);
  //RETURN RESPONSE
  logger.info(`Facture ${facture.codeFacture} created successfully`);
  res.status(HTTPSTATUS.CREATED).json({
    message: `La facture a été crée avec le code: ${facture.codeFacture} !`,
    facture,
  });
});

//GET ONE FACTURE
export const getOneFacture = asyncHandler(async (req, res, next) => {
  const factureId = req.params.id;
  //GET ONE FACTURE LOGIC
  const { facture } = await getFacture(factureId);
  //RETURN RESPONSE
  logger.info(`Facture were fetched successfully`);
  res.status(HTTPSTATUS.OK).json({
    facture,
  });
});

//GET ALL FACTURE

export const getAllFacture = asyncHandler(async (req, res, next) => {
  //GET ALL FACTURE LOGIC
  const { factures } = await getFactures();
  //RETURN RESPONSE
  logger.info(`Factures were fetched successfully`);
  res.status(HTTPSTATUS.OK).json({
    factures,
  });
});

//UPDATE FACTURE

export const updateOneFacture = asyncHandler(async (req, res, next) => {
  const factureId = req.params.id;
  const body = factureSchema.parse(req.body);
  //UPDATE A FACTURE LOGIC
  const { facture } = await updateFacture(factureId, body);
  //RETURN RESPONSE
  logger.info(`Facture ${factureId} was updated successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: 'La facture a été mis à jour avec succès',
    facture,
  });
});

//DELETE FACTURE

export const deleteOneFacture = asyncHandler(async (req, res, next) => {
  const factureId = req.params.id;
  //DELETE A FACTURE LOGIC
  await deleteFacture(factureId);
  //RETURN RESPONSE
  logger.info(`Facture whith ID: ${factureId} was deleted successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: 'Facture deleted successfully',
  });
});
