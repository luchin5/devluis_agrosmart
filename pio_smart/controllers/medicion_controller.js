import { medicionService } from '../services/medicion_service.js';

/**
 * CAPA DE CONTROLADORES PARA MEDICIONES
 */

export const medicionController = async (req, res) => {
    try {
        console.log('Controlador de medición: Recibiendo solicitud para obtener mediciones...');

        const mediciones = await medicionService();

        if (!mediciones || mediciones.length === 0) {
            return res.status(404).json({
                error: 'No se encontraron mediciones'
            });
        }

        res.status(200).json(mediciones);

    } catch (error) {
        console.error('Error en el controlador de medición:', error);

        res.status(500).json({
            error: 'Error al obtener las mediciones'
        });
    }
}