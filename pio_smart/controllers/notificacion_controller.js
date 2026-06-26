import { notificacionService } from '../services/notificacion_service.js';

/**
 * CAPA DE CONTROLADORES PARA NOTIFICACIONES
 */

export const notificacionController = async (req, res) => {
    try {
        console.log('Controlador de notificación: Recibiendo solicitud para obtener notificaciones...');

        const notificaciones = await notificacionService();

        if (!notificaciones || notificaciones.length === 0) {
            return res.status(404).json({
                error: 'No se encontraron notificaciones'
            });
        }

        res.status(200).json(notificaciones);

    } catch (error) {
        console.error('Error en el controlador de notificación:', error);

        res.status(500).json({
            error: 'Error al obtener las notificaciones'
        });
    }
}