import metricaSemanalRepository from "../repositories/metrica_semanal_repository.js";

/**
 * CAPA DE LÓGICA DE NEGOCIO PARA MÉTRICAS SEMANALES
 */

export const metricaSemanalService = async () => {
    try {
        const metricas =
            await metricaSemanalRepository.getMetricasSemanales();

        return metricas;

    } catch (error) {
        console.error(
            'Error en el servicio de métricas semanales:',
            error
        );
        throw error;
    }
}