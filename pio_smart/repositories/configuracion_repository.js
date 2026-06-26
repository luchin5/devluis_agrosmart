import { db_pool } from "../config/config.js";

/**
 * CAPA DE DATOS PARA CONFIGURACIONES
 */

const configuracionRepository = {

    getConfiguraciones: async () => {
        console.log('Inicializando repositorio de configuraciones...');

        try {

            console.log('Obteniendo configuraciones desde la base de datos...');

            const configuraciones =
                await db_pool.any('SELECT * FROM configuracion.fun_obtener_configuraciones()');

            return configuraciones;

        } catch (error) {

            console.error('Error al obtener configuraciones:', error);
            throw error;

        }
    }

}

export default configuracionRepository;