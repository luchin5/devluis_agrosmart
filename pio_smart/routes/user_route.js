import { userController } from "../controllers/user_controller.js";
import express from 'express';
/** * CAPA DE RUTAS PARA USUARIOS
 * 
 * Esta capa se encarga de definir las rutas de la API relacionadas con los usuarios,
 * y asignar los controladores correspondientes para manejar las solicitudes.
 * @returns 
 */


const routeUsers = express.Router();

// Ruta para obtener todos los usuarios
routeUsers.get('/usuarios', userController);

export default routeUsers;
