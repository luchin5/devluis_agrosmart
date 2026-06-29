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
                await db_pool.any('SELECT * FROM iot.dispositivo_iot');

            return dispositivos;

        } catch (error) {

            console.error('Error al obtener dispositivos:', error);
            throw error;

        }
    },

    postDispositivo: async (dispositivo) => {
        console.log('Inicializando repositorio de dispositivos IoT...');
        try {
            const resultado = await db_pool.one(`INSERT INTO iot.dispositivo_iot
                 (nombre,estado,ip_local,contrasena)
                  VALUES ($1, $2, $3, $4) RETURNING *`,
                   [dispositivo.nombre, dispositivo.estado, dispositivo.ip_local, dispositivo.contrasena]);
            return resultado;
        } catch (error) {
            console.error('Error al crear dispositivo IoT:', error);
            throw error;
        }
    }

}

export default dispositivoIotRepository;