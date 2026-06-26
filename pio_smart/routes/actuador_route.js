import { actuadorController } from "../controllers/actuador_controller.js";
import express from 'express';

/**
 * CAPA DE RUTAS PARA ACTUADORES
 */

const routeActuador = express.Router();

// Ruta para obtener todos los actuadores
routeActuador.get('/actuadores', actuadorController);

export default routeActuador;