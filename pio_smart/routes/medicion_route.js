import { medicionController } from "../controllers/medicion_controller.js";
import express from 'express';

/**
 * CAPA DE RUTAS PARA MEDICIONES
 */

const routeMedicion = express.Router();

// Ruta para obtener todas las mediciones
routeMedicion.get('/mediciones', medicionController);

export default routeMedicion;