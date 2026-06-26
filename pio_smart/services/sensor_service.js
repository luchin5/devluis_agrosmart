import sensorRepository from "../repositories/sensor_repository.js";

/**
 * CAPA DE LÓGICA DE NEGOCIO PARA SENSORES
 */

export const sensorService = async () => {
    try {
        const sensores =
            await sensorRepository.getSensores();

        return sensores;

    } catch (error) {
        console.error(
            'Error en el servicio de sensores:',
            error
        );
        throw error;
    }
}