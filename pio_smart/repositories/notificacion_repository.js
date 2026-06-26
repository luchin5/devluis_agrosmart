import { db_pool } from "../config/config.js";

/**
 * CAPA DE DATOS PARA NOTIFICACIONES
 */

const notificacionRepository = {

    getNotificaciones: async () => {
        console.log('Inicializando repositorio de notificaciones...');

        try {

            console.log('Obteniendo notificaciones desde la base de datos...');

            const notificaciones =
                await db_pool.any('SELECT * FROM notificacion.fun_obtener_notificaciones()');

            return notificaciones;

        } catch (error) {

            console.error('Error al obtener notificaciones:', error);
            throw error;

        }
    }

}

export default notificacionRepository;