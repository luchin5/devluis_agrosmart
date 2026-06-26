import { dispositivoIotController } from "../controllers/dispositivo_iot_controller.js";
import express from 'express';

/**
 * CAPA DE RUTAS PARA DISPOSITIVOS IOT
 */

const routeDispositivoIot = express.Router();

// Ruta para obtener todos los dispositivos IoT
routeDispositivoIot.get('/dispositivos', dispositivoIotController);

export default routeDispositivoIot;