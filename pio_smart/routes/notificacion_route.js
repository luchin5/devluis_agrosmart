import { notificacionController } from "../controllers/notificacion_controller.js";
import express from 'express';

/**
 * CAPA DE RUTAS PARA NOTIFICACIONES
 */

const routeNotificacion = express.Router();

// Ruta para obtener todas las notificaciones
routeNotificacion.get('/notificaciones', notificacionController);

export default routeNotificacion;