import { corralService } from '../services/corral_service.js';

/**
 * CAPA DE CONTROLADORES PARA CORRALES
 */

export const corralController = async (req, res) => {
    try {
        console.log('Controlador de corral: Recibiendo solicitud para obtener corrales...');

        const corrales = await corralService();

        if (!corrales || corrales.length === 0) {
            return res.status(404).json({
                error: 'No se encontraron corrales'
            });
        }

        res.status(200).json(corrales);

    } catch (error) {
        console.error('Error en el controlador de corral:', error);

        res.status(500).json({
            error: 'Error al obtener los corrales'
        });
    }
}