import eventoRepository from "../repositories/evento_repository.js";

/**
 * CAPA DE LÓGICA DE NEGOCIO PARA EVENTOS
 */

export const eventoService = async () => {
    try {
        const eventos =
            await eventoRepository.getEventos();

        return eventos;

    } catch (error) {
        console.error(
            'Error en el servicio de eventos:',
            error
        );
        throw error;
    }
}