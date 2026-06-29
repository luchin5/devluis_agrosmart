import dispositivoIotRepository from "../repositories/dispositivo_iot_repository.js";

/**
 * CAPA DE LÓGICA DE NEGOCIO PARA DISPOSITIVOS IoT
 *
 * Esta capa se encarga de procesar la data obtenida
 * de la capa de datos.
 */

export const getdispositivoIotService = async () => {
    try {

        const dispositivos =
            await dispositivoIotRepository.getDispositivos();

        return dispositivos;

    } catch (error) {

        console.error(
            'Error en el servicio de dispositivos IoT:',
            error
        );

        throw error;
    }
}

export const postDispositivoIotService = async (dispositivo) => {
    try {
        const resultado = await dispositivoIotRepository.postDispositivo(dispositivo);
        return resultado;
    }
    catch (error) {
        console.error(
            'Error en el servicio de dispositivos IoT al crear dispositivo:',
            error
        );
        throw error;
    }

}
