import corralRepository from "../repositories/corral_repository.js";

/**
 * CAPA DE LÓGICA DE NEGOCIO PARA CORRALES
 */

export const corralService = async () => {
    try {
        const corrales =
            await corralRepository.getCorrales();

        return corrales;

    } catch (error) {
        console.error(
            'Error en el servicio de corrales:',
            error
        );
        throw error;
    }
}