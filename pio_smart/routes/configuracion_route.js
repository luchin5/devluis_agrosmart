import { configuracionController } from "../controllers/configuracion_controller.js";
import express from 'express';

/**
 * CAPA DE RUTAS PARA CONFIGURACIONES
 */

const routeConfiguracion = express.Router();

// Ruta para obtener todas las configuraciones
routeConfiguracion.get('/configuraciones', configuracionController);

export default routeConfiguracion;