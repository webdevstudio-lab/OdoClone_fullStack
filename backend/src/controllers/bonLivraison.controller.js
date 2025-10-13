import { HTTPSTATUS } from '#config/http.config.js';
import { asyncHandler } from '#middlewares/asyncHandler.middleware.js';
import logger from '#config/logger.js';
import { bonLivraisonSchema } from '#validations/bonLivraison.validation.js';
import { addBonLivraison } from '#services/bonDeLivraisons/addBonLivraison.service.js';
import { getBonLivraison } from '#services/bonDeLivraisons/getBonLivraison.service.js';
import { getbonLivraisons } from '#services/bonDeLivraisons/getAllBonLivraison.service.js';
import { updateBonLivraison } from '#services/bonDeLivraisons/updateBonLivraison.service.js';
import { deleteBonLivraison } from '#services/bonDeLivraisons/deleteBonLivraison.service.js';

//ADD NEW BON DE LIVRAISON

export const addNewBonLivraison = asyncHandler(async (req, res) => {
  const body = bonLivraisonSchema.parse(req.body);
  const clientId = req.params.id;

  //CREATE BON DE LIVRAISON LOGIC
  const { bonDeLivraison } = await addBonLivraison(body, clientId);
  //RETURN RESPONSE
  logger.info(`Bon de livraison  created successfully`);
  res.status(HTTPSTATUS.CREATED).json({
    message: `Le bon de livraison a été crée avec succès!`,
    bonDeLivraison,
  });
});

//UPDATE BON DE LIVRAISON

export const updateBL = asyncHandler(async (req, res) => {
  const bonLivraisonId = req.params.id;
  const body = bonLivraisonSchema.parse(req.body);

  //UPDATE A BON DE LIVRAISON LOGIC
  const { bonLivraison } = await updateBonLivraison(bonLivraisonId, body);
  //RETURN RESPONSE
  logger.info(`Bon de livraison was updated successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: 'Le bon de livraison a été mis à jour avec succès',
    bonLivraison,
  });
});

//GET BON DE LIVRAISON

export const getBL = asyncHandler(async (req, res) => {
  const bonLivraisonId = req.params.id;
  //GET ONE BON DE LIVRAISON LOGIC
  const { bonLivraison } = await getBonLivraison(bonLivraisonId);
  //RETURN RESPONSE
  logger.info(`Bon de livraison was fetched successfully`);
  res.status(HTTPSTATUS.OK).json({
    bonLivraison,
  });
});

//GET ALL BON DE LIVRAISON

export const getAllBonLivraison = asyncHandler(async (req, res) => {
  //GET ALL BON DE LIVRAISON LOGIC
  const { bonDeLivraison } = await getbonLivraisons();
  //RETURN RESPONSE
  logger.info(`Bon de livraison were fetched successfully`);
  res.status(HTTPSTATUS.OK).json({
    bonDeLivraison,
  });
});

//DELETE BON DE LIVRAISON

export const deleteBL = asyncHandler(async (req, res) => {
  const bonLivraisonId = req.params.id;
  //DELETE BON DE LIVRAISON LOGIC
  await deleteBonLivraison(bonLivraisonId);
  //RETURN RESPONSE
  logger.info(`Bon de livraison was deleted successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: 'Le bon de livraison a été supprimée avec succès',
  });
});
