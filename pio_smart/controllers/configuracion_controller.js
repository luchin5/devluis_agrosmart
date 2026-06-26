import { configuracionService } from '../services/configuracion_service.js';

/**
 * CAPA DE CONTROLADORES PARA CONFIGURACIONES
 */

export const configuracionController = async (req, res) => {
    try {
        console.log('Controlador de configuración: Recibiendo solicitud para obtener configuraciones...');

        const configuraciones = await configuracionService();

        if (!configuraciones || configuraciones.length === 0) {
            return res.status(404).json({
                error: 'No se encontraron configuraciones'
            });
        }

        res.status(200).json(configuraciones);

    } catch (error) {
        console.error('Error en el controlador de configuración:', error);

        res.status(500).json({
            error: 'Error al obtener las configuraciones'
        });
    }
}