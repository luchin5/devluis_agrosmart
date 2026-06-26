import { eventoController } from "../controllers/evento_controller.js";
import express from 'express';

/**
 * CAPA DE RUTAS PARA EVENTOS
 */

const routeEvento = express.Router();

// Ruta para obtener todos los eventos
routeEvento.get('/eventos', eventoController);

export default routeEvento;