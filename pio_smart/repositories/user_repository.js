import { db_pool } from "../config/config.js";
/**
 * CAPA DE DATOS PARA USUARIOS
 * 
 * Esta capa se encarga de interactuar con la base de datos
 * para obtener, insertar, actualizar o eliminar datos relacionados
 * con los usuarios.
 * @returns
 */

// Objeto general de exportación de métodos de usuario
const userRepository = {
    // Método para obtener todos los usuarios
    getObtenerUuarios:async ()  => {
        try{
            const usuarios = await db_pool.any('SELECT * FROM usuario.fun_obtener_usuarios()');
            return usuarios;
        }
        catch(error){
            console.error('Error al obtener usuarios:', error);
            throw error;    
        }
    }
}

export default userRepository;