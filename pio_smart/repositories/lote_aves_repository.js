import { db_pool } from "../config/config.js";

/**
 * CAPA DE DATOS PARA LOTES DE AVES
 */

const loteAvesRepository = {

    getLotesAves: async () => {
        console.log('Inicializando repositorio de lotes de aves...');

        try {

            console.log('Obteniendo lotes de aves desde la base de datos...');

            const lotes =
                await db_pool.any('SELECT * FROM lote_aves.fun_obtener_lotes_aves()');

            return lotes;

        } catch (error) {

            console.error('Error al obtener lotes de aves:', error);
            throw error;

        }
    }

}

export default loteAvesRepository;