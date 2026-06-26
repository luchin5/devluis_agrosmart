import loteAvesRepository from "../repositories/lote_aves_repository.js";

/**
 * CAPA DE LÓGICA DE NEGOCIO PARA LOTES DE AVES
 */

export const loteAvesService = async () => {
    try {
        const lotes =
            await loteAvesRepository.getLotesAves();

        return lotes;

    } catch (error) {
        console.error(
            'Error en el servicio de lotes de aves:',
            error
        );
        throw error;
    }
}