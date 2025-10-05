import { HTTPSTATUS } from '#config/http.config.js';
import { asyncHandler } from '#middlewares/asyncHandler.middleware.js';
import logger from '#config/logger.js';
import { getClients } from '#services/clients/getAllClients.service.js';
import { getClient } from '#services/clients/getOneClient.service.js';
import { addClient } from '#services/clients/addClient.service.js';
import { updateClient } from '#services/clients/updateClient.service.js';
import { deleteClient } from '#services/clients/deleteClient.service.js';
import { clientSchema } from '#validations/client.validation.js';

//ADD NEW CLIENTS
export const addNewClient = asyncHandler(async (req, res, next) => {
  const body = clientSchema.parse(req.body);
  //CREATE CLIENT LOGIC
  const { client } = await addClient(body);

  //RETURN RESPONSE
  logger.info(`Client ${client.codeClient} created successfully`);

  res.status(HTTPSTATUS.CREATED).json({
    message: `Le client a été crée avec le code: ${client.codeClient} !`,
    client,
  });
});

//GET ONE CLIENT
export const getOneClient = asyncHandler(async (req, res, next) => {
  const clientId = req.params.id;

  //GET A CLIENT LOGIC
  const { client } = await getClient(clientId);

  //RETURN RESPONSE
  logger.info(`Client ${clientId} was fetched successfully`);
  res.status(HTTPSTATUS.OK).json({
    client,
  });
});

//GET ALL CLIENTS
export const getAllClients = asyncHandler(async (req, res, next) => {
  //GET ALL CLIENTS LOGIC
  const { clients } = await getClients();
  //RETURN RESPONSE
  logger.info(`Clients were fetched successfully`);

  res.status(HTTPSTATUS.OK).json({
    clients,
  });
});

//UPDATE A CLIENT
export const updateOneClient = asyncHandler(async (req, res, next) => {
  const clientId = req.params.id;
  const body = clientSchema.parse(req.body);

  //UPDATE A CLIENT LOGIC
  const { client } = await updateClient(clientId, body);

  //RETURN RESPONSE
  logger.info(`Client ${clientId} was updated successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: 'Le client a été mis à jour avec succès',
    client,
  });
});

//DELETE A CLIENT
export const deleteOneClient = asyncHandler(async (req, res, next) => {
  const clientId = req.params.id;
  //DELETE A CLIENT LOGIC
  const { client } = await deleteClient(clientId);

  //RETURN RESPONSE
  logger.info(`Client ${clientId} was deleted successfully`);
  res.status(HTTPSTATUS.OK).json({
    message: `Le client a été supprimé avec succès`,
  });
});
