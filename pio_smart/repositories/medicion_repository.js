import { db_pool } from "../config/config.js";

/**
 * CAPA DE DATOS PARA MEDICIONES
 */

const medicionRepository = {

    getMediciones: async () => {
        console.log('Inicializando repositorio de mediciones...');

        try {

            console.log('Obteniendo mediciones desde la base de datos...');

            const mediciones =
                await db_pool.any('SELECT * FROM medicion.fun_obtener_mediciones()');

            return mediciones;

        } catch (error) {

            console.error('Error al obtener mediciones:', error);
            throw error;

        }
    }

}

export default medicionRepository;