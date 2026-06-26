import { nivelEventoService } from '../services/nivel_evento_service.js';

/**
 * CAPA DE CONTROLADORES PARA NIVELES DE EVENTO
 */

export const nivelEventoController = async (req, res) => {
    try {
        console.log('Controlador de nivel de evento: Recibiendo solicitud para obtener niveles de evento...');

        const nivelesEvento = await nivelEventoService();

        if (!nivelesEvento || nivelesEvento.length === 0) {
            return res.status(404).json({
                error: 'No se encontraron niveles de evento'
            });
        }

        res.status(200).json(nivelesEvento);

    } catch (error) {
        console.error('Error en el controlador de nivel de evento:', error);

        res.status(500).json({
            error: 'Error al obtener los niveles de evento'
        });
    }
}