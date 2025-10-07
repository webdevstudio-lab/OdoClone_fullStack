import { HTTPSTATUS } from '#config/http.config.js';
import { asyncHandler } from '#middlewares/asyncHandler.middleware.js';
import logger from '#config/logger.js';
import { devisSchema } from '#validations/devis.validation.js';
import { addDevis } from '#services/devis/addDevis.service.js';
import { getDevises } from '#services/devis/getAllDevis.service.js';
import { getDevis } from '#services/devis/getOneDevis.service.js';
import { updatedevis } from '#services/devis/updateDevis.service.js';
import { deleteDevis } from '#services/devis/deleteDevis.service.js';

//CREATE A DEVIS
export const addNewDevis = asyncHandler(async (req, res, next) => {
  const body = devisSchema.parse(req.body);
  const clientId = req.params.id;

  //CREATE A DEVIS LOGIC
  const { devis } = await addDevis(body, clientId);
  //RETURN RESPONSE
  logger.info(`Devis created successfully`);
  res.status(HTTPSTATUS.CREATED).json({
    message: `Le devis a été crée avec le code: ${devis.numDevis} !`,
    devis,
  });
});

//GET ALL DEVIS
export const getAllDevis = asyncHandler(async (req, res, next) => {
  //GET ALL DEVIS LOGIC
  const { devis } = await getDevises();
  //RETURN RESPONSE
  logger.info(`Devis were fetched successfully`);
  res.status(HTTPSTATUS.OK).json({
    devis,
  });
});

//GET ONE DEVIS
export const getOneDevis = asyncHandler(async (req, res, next) => {
  const devisId = req.params.id;
  //GET ONE DEVIS LOGIC
  const { devis } = await getDevis(devisId);
  //RETURN RESPONSE
  logger.info(`Devis were fetched successfully`);
  res.status(HTTPSTATUS.OK).json({
    devis,
  });
});

//UPDATE A DEVIS
export const updateOneDevis = asyncHandler(async (req, res, next) => {
  const devisId = req.params.id;
  const body = devisSchema.parse(req.body);
  //UPDATE A DEVIS LOGIC
  const { devis } = await updatedevis(devisId, body);
  //RETURN RESPONSE
  logger.info(`Devis ${devisId} was updated successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: 'Le devis a été mis à jour avec succès',
    devis,
  });
});

//DELETE A DEVIS
export const deleteOneDevis = asyncHandler(async (req, res, next) => {
  const devisId = req.params.id;
  //DELETE A DEVIS LOGIC
  await deleteDevis(devisId);
  //RETURN RESPONSE
  logger.info(`Devis ${devisId} was deleted successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: 'Le devis a été supprimé avec succès',
  });
});
