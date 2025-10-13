import { HTTPSTATUS } from '#config/http.config.js';
import { asyncHandler } from '#middlewares/asyncHandler.middleware.js';
import logger from '#config/logger.js';
import { itemSchema } from '#validations/bonLivraison.validation.js';
import { addBlItems } from '#services/bonDeLivraisons/bonDeLivraisonItems/addItemBonLivraison.service.js';
import { getBlItem } from '#services/bonDeLivraisons/bonDeLivraisonItems/getItemBonLivraison.service.js';
import { getAllBlItems } from '#services/bonDeLivraisons/bonDeLivraisonItems/getAllItemBonLivr.service.js';
import { updateBlItems } from '#services/bonDeLivraisons/bonDeLivraisonItems/updateItemBonLiv.service.js';
import { deleteBlItem } from '#services/bonDeLivraisons/bonDeLivraisonItems/deleteItemBonLivr.service.js';
import { deleteAllBlItems } from '#services/bonDeLivraisons/bonDeLivraisonItems/deleteAllItemBl.service.js';

//ADD ITEM BON LIVRAISON

export const addNewItemBonLivraison = asyncHandler(async (req, res) => {
  const body = itemSchema.parse(req.body);
  const bonLivraisonId = req.params.id;
  //CREATE ITEM LOGIC
  const { BlItem } = await addBlItems(bonLivraisonId, body);
  //RETURN RESPONSE
  logger.info(`Item created successfully`);
  res.status(HTTPSTATUS.CREATED).json({
    message: "l'article a été ajouté avec succès!",
    BlItem,
  });
});

//GET ONE ITEM BON LIVRAISON

export const getOneItemBonLivraison = asyncHandler(async (req, res) => {
  const bonlivraisonItemId = req.params.id;
  //GET ONE ITEM LOGIC
  const { BlItem } = await getBlItem(bonlivraisonItemId);
  //RETURN RESPONSE
  logger.info(`Item was fetched successfully`);
  res.status(HTTPSTATUS.OK).json({
    BlItem,
  });
});

//GET ALL ITEM BON LIVRAISON

export const getAllItemBonLivraison = asyncHandler(async (req, res) => {
  const bonLivraisonId = req.params.id;
  //GET ALL ITEM LOGIC
  const { BlItems } = await getAllBlItems(bonLivraisonId);
  //RETURN RESPONSE
  logger.info(`Items were fetched successfully`);
  res.status(HTTPSTATUS.OK).json({
    BlItems,
  });
});

//UPDATE ITEM BON LIVRAISON

export const updateItemBonLivraison = asyncHandler(async (req, res) => {
  const itemId = req.params.id;
  const body = itemSchema.parse(req.body);
  //UPDATE A ITEM LOGIC
  const { updateBlItem } = await updateBlItems(itemId, body);
  //RETURN RESPONSE
  logger.info(`Item was updated successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: "l'article a été mis à jour avec succès!",
    updateBlItem,
  });
});

//DELETE ITEM BON LIVRAISON

export const deleteItemBonLivraison = asyncHandler(async (req, res) => {
  const bonLivraisonItemId = req.params.id;
  //DELETE ITEM LOGIC
  await deleteBlItem(bonLivraisonItemId);
  //RETURN RESPONSE
  logger.info(`Item was deleted successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: "l'article a été supprimé avec succès!",
  });
});

//DELETE ALL ITEM BON LIVRAISON

export const deleteAllItemBonLivraison = asyncHandler(async (req, res) => {
  const bonLivraisonId = req.params.id;
  //DELETE ALL ITEM LOGIC
  await deleteAllBlItems(bonLivraisonId);
  //RETURN RESPONSE
  logger.info(`Items were deleted successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: 'les articles ont été supprimés avec succès!',
  });
});
