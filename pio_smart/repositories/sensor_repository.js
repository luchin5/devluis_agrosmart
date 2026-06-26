import { db_pool } from "../config/config.js";

/**
 * CAPA DE DATOS PARA SENSORES
 */

const sensorRepository = {

    getSensores: async () => {
        console.log('Inicializando repositorio de sensores...');

        try {

            console.log('Obteniendo sensores desde la base de datos...');

            const sensores =
                await db_pool.any('SELECT * FROM sensor.fun_obtener_sensores()');

            return sensores;

        } catch (error) {

            console.error('Error al obtener sensores:', error);
            throw error;

        }
    }

}

export default sensorRepository;