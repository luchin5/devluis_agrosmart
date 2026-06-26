import { db_pool } from "../config/config.js";

/**
 * CAPA DE DATOS PARA MÉTRICAS SEMANALES
 */

const metricaSemanalRepository = {

    getMetricasSemanales: async () => {
        console.log('Inicializando repositorio de métricas semanales...');

        try {

            console.log('Obteniendo métricas semanales desde la base de datos...');

            const metricas =
                await db_pool.any('SELECT * FROM metrica_semanal.fun_obtener_metricas_semanales()');

            return metricas;

        } catch (error) {

            console.error('Error al obtener métricas semanales:', error);
            throw error;

        }
    }

}

export default metricaSemanalRepository;