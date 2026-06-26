import nivelEventoRepository from "../repositories/nivel_evento_repository.js";

/**
 * CAPA DE LÓGICA DE NEGOCIO PARA NIVELES DE EVENTO
 */

export const nivelEventoService = async () => {
    try {
        const nivelesEvento =
            await nivelEventoRepository.getNivelesEvento();

        return nivelesEvento;

    } catch (error) {
        console.error(
            'Error en el servicio de niveles de evento:',
            error
        );
        throw error;
    }
}