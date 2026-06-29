import configuracionRepository from "../repositories/configuracion_repository.js";

/**
 * CAPA DE LÓGICA DE NEGOCIO PARA CONFIGURACIONES
 */

export const getConfiguracionService = async () => {
    try {
        const configuraciones =
            await configuracionRepository.getConfiguraciones();

        return configuraciones;

    } catch (error) {
        console.error(
            'Error en el servicio de configuraciones:',
            error
        );
        throw error;
    }
}

export const postConfiguracionService = async (configuracion) => {
    try {
        const resultado =
            await configuracionRepository.postConfiguracion(configuracion);
        return resultado;
    }
    catch (error) {
        console.error(
            'Error en el servicio de configuraciones al crear configuración:',
            error
        );
        throw error;    

    }
}

// CONFIGURACIÓN DE CONEXION WIFI
export const postConfiguracionConexionService = async (config_conexion) => {
    try {
        const resultado = await configuracionRepository.postConfiguracionConexion(config_conexion);
        return resultado;
    }
    catch (error) {
        console.error(
            'Error en el servicio de configuraciones al crear configuración de conexión:',
            error
        );
        throw error;    
    }
}

export const getConfiguracionConexionServiceID = async (id) => {
    try{
        const resultadoID = await configuracionRepository.getConfiguracionConexionID(id);
        return resultadoID
    }
    catch(error){
        console.error("Error en el servicio de configuraciones al obtener configuración de conexión por ID:", error);
        throw error;
    }
}



