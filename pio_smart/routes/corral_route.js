import { corralController } from "../controllers/corral_controller.js";
import express from 'express';

/**
 * CAPA DE RUTAS PARA CORRALES
 */

const routeCorral = express.Router();

// Ruta para obtener todos los corrales
routeCorral.get('/corrales', corralController);

export default routeCorral;