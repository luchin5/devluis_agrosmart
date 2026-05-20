import {userService} from '../services/user_service.js';
/**
 * CAPA DE CONTROLADORES PARA USUARIOS
 * 
 * Esta capa se encarga de recibir las solicitudes del cliente,
 * llamar a la capa de servicios para procesar la lógica de negocio,
 * y enviar la respuesta al cliente.
 * @returns 
 */

// Funciones de controlador de usuario exportables
export const userController = async (req, res) => {
    try {
        const usuarios = await userService();
        if (!usuarios || usuarios.length === 0) {
            return res.status(404).json({ error: 'No se encontraron usuarios' });
        }
        res.status(200).json(usuarios);
    } catch (error) {
        console.error('Error en el controlador de usuario:', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
}