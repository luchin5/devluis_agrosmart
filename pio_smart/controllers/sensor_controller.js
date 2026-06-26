import { sensorService } from '../services/sensor_service.js';

/**
 * CAPA DE CONTROLADORES PARA SENSORES
 * 
 * Esta capa se encarga de recibir las solicitudes del cliente,
 * llamar a la capa de servicios para procesar la lógica de negocio,
 * y enviar la respuesta al cliente.
 * @returns 
 */

// Funciones de controlador de sensor exportables
export const sensorController = async (req, res) => {
    try {
        console.log('Controlador de sensor: Recibiendo solicitud para obtener sensores...');

        const sensores = await sensorService();

        if (!sensores || sensores.length === 0) {
            return res.status(404).json({
                error: 'No se encontraron sensores'
            });
        }

        res.status(200).json(sensores);

    } catch (error) {
        console.error('Error en el controlador de sensor:', error);

        res.status(500).json({
            error: 'Error al obtener los sensores'
        });
    }
}