import { db_pool } from "../config/config.js";

/**
 * CAPA DE DATOS PARA ACTUADORES
 */

const actuadorRepository = {

    getActuadores: async () => {
        console.log('Inicializando repositorio de actuadores...');

        try {

            console.log('Obteniendo actuadores desde la base de datos...');

            const actuadores =
                await db_pool.any('SELECT * FROM actuador.fun_obtener_actuadores()');

            return actuadores;

        } catch (error) {

            console.error('Error al obtener actuadores:', error);
            throw error;

        }
    }

}

export default actuadorRepository;