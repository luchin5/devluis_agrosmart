import configuracionRepository from "../repositories/configuracion_repository.js";

/**
 * CAPA DE LÓGICA DE NEGOCIO PARA CONFIGURACIONES
 */

export const configuracionService = async () => {
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