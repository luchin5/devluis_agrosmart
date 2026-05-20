import userRepository from "../repositories/user_repository.js";
/**
 * CAPA DE LÓGICA DE NEGOCIO PARA USUARIOS
 * 
 * Esta capa se encarga de procesar la data obtenida
 * de la capa de datos.
 * @returns 
 */

// Funciones de servicio de usuario exportables
export const userService = async () => {
    try {
        const usuarios = await userRepository.getObtenerUuarios();
        return usuarios;
    } catch (error) {
        console.error('Error en el servicio de usuario:', error);
        throw error;
    }
}