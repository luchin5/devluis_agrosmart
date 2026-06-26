import { eventoService } from '../services/evento_service.js';

/**
 * CAPA DE CONTROLADORES PARA EVENTOS
 */

export const eventoController = async (req, res) => {
    try {
        console.log('Controlador de evento: Recibiendo solicitud para obtener eventos...');

        const eventos = await eventoService();

        if (!eventos || eventos.length === 0) {
            return res.status(404).json({
                error: 'No se encontraron eventos'
            });
        }

        res.status(200).json(eventos);

    } catch (error) {
        console.error('Error en el controlador de evento:', error);

        res.status(500).json({
            error: 'Error al obtener los eventos'
        });
    }
}