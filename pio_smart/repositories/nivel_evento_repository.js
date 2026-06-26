import { db_pool } from "../config/config.js";

/**
 * CAPA DE DATOS PARA NIVELES DE EVENTO
 */

const nivelEventoRepository = {

    getNivelesEvento: async () => {
        console.log('Inicializando repositorio de niveles de evento...');

        try {

            console.log('Obteniendo niveles de evento desde la base de datos...');

            const niveles =
                await db_pool.any('SELECT * FROM nivel_evento.fun_obtener_niveles_evento()');

            return niveles;

        } catch (error) {

            console.error('Error al obtener niveles de evento:', error);
            throw error;

        }
    }

}

export default nivelEventoRepository;