import notificacionRepository from "../repositories/notificacion_repository.js";

/**
 * CAPA DE LÓGICA DE NEGOCIO PARA NOTIFICACIONES
 */

export const notificacionService = async () => {
    try {
        const notificaciones =
            await notificacionRepository.getNotificaciones();

        return notificaciones;

    } catch (error) {
        console.error(
            'Error en el servicio de notificaciones:',
            error
        );
        throw error;
    }
}