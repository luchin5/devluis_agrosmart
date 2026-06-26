import { sensorController } from "../controllers/sensor_controller.js";
import express from 'express';

/**
 * CAPA DE RUTAS PARA SENSORES
 */

const routeSensor = express.Router();

// Ruta para obtener todos los sensores
routeSensor.get('/sensores', sensorController);

export default routeSensor;