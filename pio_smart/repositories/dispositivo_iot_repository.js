import { db_pool } from "../config/config.js";

/**
 * CAPA DE DATOS PARA DISPOSITIVOS IOT
 */

const dispositivoIotRepository = {

    getDispositivos: async () => {
        console.log('Inicializando repositorio de dispositivos IoT...');

        try {

            console.log('Obteniendo dispositivos IoT desde la base de datos...');

            const dispositivos =
                await db_pool.any('SELECT * FROM dispositivo_iot.fun_obtener_dispositivos()');

            return dispositivos;

        } catch (error) {

            console.error('Error al obtener dispositivos:', error);
            throw error;

        }
    }

}

export default dispositivoIotRepository;