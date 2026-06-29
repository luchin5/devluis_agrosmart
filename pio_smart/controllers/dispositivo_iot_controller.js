import { getdispositivoIotService,postDispositivoIotService } from '../services/dispositivo_iot_service.js';

/**
 * CAPA DE CONTROLADORES PARA DISPOSITIVOS IOT
 */

export const getdispositivoIotController = async (req, res) => {
    try {
        

        const dispositivos = await getdispositivoIotService();

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

export const postDispositivoIotController = async (req, res) => {
    try {
        
        const dispositivo = req.body;
        const resultado = await postDispositivoIotService(dispositivo);
        res.status(201).json(resultado);
    } catch (error) {
        console.error('Error en el controlador de dispositivo IoT al crear dispositivo:', error);
        res.status(500).json({
            error: 'Error al crear el dispositivo'
        });
    }

}



