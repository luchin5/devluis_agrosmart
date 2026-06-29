import { getdispositivoIotController,postDispositivoIotController } from "../controllers/dispositivo_iot_controller.js";
import express from 'express';

/**
 * CAPA DE RUTAS PARA DISPOSITIVOS IOT
 */

const routeDispositivoIot = express.Router();

// Ruta para obtener todos los dispositivos IoT
routeDispositivoIot.get('/dispositivos', getdispositivoIotController);
routeDispositivoIot.post('/dispositivos', postDispositivoIotController);

export default routeDispositivoIot;