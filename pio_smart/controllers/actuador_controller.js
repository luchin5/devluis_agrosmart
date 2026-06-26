import { actuadorService } from '../services/actuador_service.js';

/**
 * CAPA DE CONTROLADORES PARA ACTUADORES
 */

export const actuadorController = async (req, res) => {
    try {
        console.log('Controlador de actuador: Recibiendo solicitud para obtener actuadores...');

        const actuadores = await actuadorService();

        if (!actuadores || actuadores.length === 0) {
            return res.status(404).json({
                error: 'No se encontraron actuadores'
            });
        }

        res.status(200).json(actuadores);

    } catch (error) {
        console.error('Error en el controlador de actuador:', error);

        res.status(500).json({
            error: 'Error al obtener los actuadores'
        });
    }
}