import { suscripcionService } from '../services/suscripcion_service.js';

/**
 * CAPA DE CONTROLADORES PARA SUSCRIPCIONES
 * 
 * Esta capa se encarga de recibir las solicitudes del cliente,
 * llamar a la capa de servicios para procesar la lógica de negocio,
 * y enviar la respuesta al cliente.
 * @returns 
 */

// Funciones de controlador de suscripción exportables
export const suscripcionController = async (req, res) => {
    try {
        console.log('Controlador de suscripción: Recibiendo solicitud para obtener suscripciones...');

        const suscripciones = await suscripcionService();

        if (!suscripciones || suscripciones.length === 0) {
            return res.status(404).json({
                error: 'No se encontraron suscripciones'
            });
        }

        res.status(200).json(suscripciones);

    } catch (error) {
        console.error('Error en el controlador de suscripción:', error);

        res.status(500).json({
            error: 'Error al obtener las suscripciones'
        });
    }
}