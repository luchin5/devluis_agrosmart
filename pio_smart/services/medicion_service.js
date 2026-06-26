import medicionRepository from "../repositories/medicion_repository.js";

/**
 * CAPA DE LÓGICA DE NEGOCIO PARA MEDICIONES
 */

export const medicionService = async () => {
    try {
        const mediciones =
            await medicionRepository.getMediciones();

        return mediciones;

    } catch (error) {
        console.error(
            'Error en el servicio de mediciones:',
            error
        );
        throw error;
    }
}