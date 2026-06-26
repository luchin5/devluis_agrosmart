import { suscripcionController } from "../controllers/suscripcion_controller.js";
import express from 'express';

/**
 * CAPA DE RUTAS PARA SUSCRIPCIONES
 */

const routeSuscripcion = express.Router();

// Ruta para obtener todas las suscripciones
routeSuscripcion.get('/suscripciones', suscripcionController);

export default routeSuscripcion;