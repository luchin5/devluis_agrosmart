import { dispositivoIotService } from '../services/dispositivo_iot_service.js';

/**
 * CAPA DE CONTROLADORES PARA DISPOSITIVOS IOT
 */

export const dispositivoIotController = async (req, res) => {
    try {
        console.log('Controlador de dispositivo IoT: Recibiendo solicitud para obtener dispositivos...');

        const dispositivos = await dispositivoIotService();

        if (!dispositivos || dispositivos.length === 0) {
            return res.status(404).json({
                error: 'No se encontraron dispositivos'
            });
        }

        res.status(200).json(dispositivos);

    } catch (error) {
        console.error('Error en el controlador de dispositivo IoT:', error);

        res.status(500).json({
            error: 'Error al obtener los dispositivos'
        });
    }
}