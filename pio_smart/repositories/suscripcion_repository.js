import { db_pool } from "../config/config.js";

/**
 * CAPA DE DATOS PARA SUSCRIPCIONES
 */

const suscripcionRepository = {

    getSuscripciones: async () => {
        console.log('Inicializando repositorio de suscripciones...');

        try {

            console.log('Obteniendo suscripciones desde la base de datos...');

            const suscripciones =
                await db_pool.any('SELECT * FROM suscripcion.fun_obtener_suscripciones()');

            return suscripciones;

        } catch (error) {

            console.error('Error al obtener suscripciones:', error);
            throw error;

        }
    }

}

export default suscripcionRepository;