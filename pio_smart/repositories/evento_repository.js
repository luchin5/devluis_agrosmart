import { db_pool } from "../config/config.js";

/**
 * CAPA DE DATOS PARA EVENTOS
 */

const eventoRepository = {

    getEventos: async () => {
        console.log('Inicializando repositorio de eventos...');

        try {

            console.log('Obteniendo eventos desde la base de datos...');

            const eventos =
                await db_pool.any('SELECT * FROM evento.fun_obtener_eventos()');

            return eventos;

        } catch (error) {

            console.error('Error al obtener eventos:', error);
            throw error;

        }
    }

}

export default eventoRepository;