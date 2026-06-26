import { db_pool } from "../config/config.js";

/**
 * CAPA DE DATOS PARA CORRALES
 */

const corralRepository = {

    getCorrales: async () => {
        console.log('Inicializando repositorio de corrales...');

        try {

            console.log('Obteniendo corrales desde la base de datos...');

            const corrales =
                await db_pool.any('SELECT * FROM corral.fun_obtener_corrales()');

            return corrales;

        } catch (error) {

            console.error('Error al obtener corrales:', error);
            throw error;

        }
    }

}

export default corralRepository;