import { nivelEventoController } from "../controllers/nivel_evento_controller.js";
import express from 'express';

/**
 * CAPA DE RUTAS PARA NIVELES DE EVENTO
 */

const routeNivelEvento = express.Router();

// Ruta para obtener todos los niveles de evento
routeNivelEvento.get('/niveles-evento', nivelEventoController);

export default routeNivelEvento;