import { getconfiguracionController,postConfiguracionConexionController,postConfiguracionController,getConfiguracionConexionControllerID } from "../controllers/configuracion_controller.js";
import express from 'express';

/**
 * CAPA DE RUTAS PARA CONFIGURACIONES
 */

const routeConfiguracion = express.Router();

// Ruta para obtener todas las configuraciones
routeConfiguracion.get('/configuraciones', getconfiguracionController);

// Ruta para crear una nueva configuración
routeConfiguracion.post('/configuraciones', postConfiguracionController);

// Ruta para crear una nueva configuración de conexión
routeConfiguracion.post('/configuraciones/conexion', postConfiguracionConexionController);

routeConfiguracion.get('/configuraciones/conexion', getConfiguracionConexionControllerID);

export default routeConfiguracion;