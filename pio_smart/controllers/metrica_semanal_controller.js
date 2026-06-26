import { metricaSemanalService } from '../services/metrica_semanal_service.js';

/**
 * CAPA DE CONTROLADORES PARA MÉTRICAS SEMANALES
 */

export const metricaSemanalController = async (req, res) => {
    try {
        console.log('Controlador de métrica semanal: Recibiendo solicitud para obtener métricas...');

        const metricas = await metricaSemanalService();

        if (!metricas || metricas.length === 0) {
            return res.status(404).json({
                error: 'No se encontraron métricas semanales'
            });
        }

        res.status(200).json(metricas);

    } catch (error) {
        console.error('Error en el controlador de métrica semanal:', error);

        res.status(500).json({
            error: 'Error al obtener las métricas semanales'
        });
    }
}