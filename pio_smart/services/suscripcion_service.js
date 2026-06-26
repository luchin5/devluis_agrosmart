import suscripcionRepository from "../repositories/suscripcion_repository.js";

/**
 * CAPA DE LÓGICA DE NEGOCIO PARA SUSCRIPCIONES
 */

export const suscripcionService = async () => {
    try {
        const suscripciones =
            await suscripcionRepository.getSuscripciones();

        return suscripciones;

    } catch (error) {
        console.error(
            'Error en el servicio de suscripciones:',
            error
        );
        throw error;
    }
}