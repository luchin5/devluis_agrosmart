import { db_pool } from "../config/config.js";

/**
 * CAPA DE DATOS PARA CONFIGURACIONES
 */

console.log('Inicializando repositorio de configuraciones...');
const configuracionRepository = {

    // CONFIGURACION DE PARAMETROS DE MEDIDA
    getConfiguraciones: async () => {
        

        try {

          

            const configuraciones =
                await db_pool.any('SELECT * FROM iot.configuracion');

            return configuraciones;

        } catch (error) {

            console.error('Error al obtener configuraciones:', error);
            throw error;

        }
    },

    postConfiguracion: async (configuracion) => {
        console.log('Inicializando repositorio de configuraciones...');
        try {
            const resultado = await db_pool.one(`INSERT INTO iot.configuracion
                 (usuario_id,valor, tempminima,tempmaxima,nivelagua,humedad,dispositivo_iot_id)
                  VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
                   [configuracion.usuario_id, configuracion.valor, configuracion.tempminima, configuracion.tempmaxima, configuracion.nivelagua, configuracion.humedad, configuracion.dispositivo_iot_id]);
            return resultado;
        } catch (error) {
            console.error('Error al crear configuración:', error);
            throw error;
        }
    },


    // CONFIGURACION DE CONEXION WIFI

    postConfiguracionConexion : async (config_conexion) => {
        console.log('Inicializando repositorio de configuraciones...');
        try {
            const resultado = await db_pool.one(`INSERT INTO iot.config_conexion
                 (usuario_id,nombre_red,contrasena_red,modo,dispositivo_iot_id)
                  VALUES ($1, $2, $3, $4, $5) RETURNING *`,
                   [config_conexion.usuario_id, config_conexion.nombre_red, config_conexion.contrasena_red, config_conexion.modo, config_conexion.dispositivo_iot_id]);
            return resultado;
        } catch (error) {
            console.error('Error al crear configuración de conexión:', error);
            throw error;
        }
        
    },

    getConfiguracionConexionID : async (id) => {
        try{
            const resultadoID = await db_pool.one('SELECT * FROM iot.config_conexion WHERE id = $1', [id]);
            return resultadoID;
        }
        catch(error){
            console.error("Error al obtener configuración de conexión por ID:", error);
            throw error;
        }}

}

export default configuracionRepository;