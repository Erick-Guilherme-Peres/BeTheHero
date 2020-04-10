const express = require("express");

const OngsController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

  routes.post('/sessions', SessionController.create);

  routes.get('/ongs', OngsController.index);
  routes.post('/ongs', OngsController.create);

  routes.get('/profile', ProfileController.index);
  
  routes.get('/incidents', IncidentsController.index);
  routes.post('/incidents', IncidentsController.create);
  routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;

/**
 * Rota / Recurso
 */

 /**
  * Metodos HTTP:
  * 
  * GET: Buscar / Listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE : Deletar uma informação no back-end
  */

  /**
   * Tipos de Parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?"
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */
