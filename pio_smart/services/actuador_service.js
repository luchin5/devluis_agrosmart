import actuadorRepository from "../repositories/actuador_repository.js";

/**
 * CAPA DE LÓGICA DE NEGOCIO PARA ACTUADORES
 */

/**
 *
 * @returns
 */
// Funciones de servicio de actuadores exportables
export const actuadorService = async () => {
    try {
        const actuadores =
            await actuadorRepository.getActuadores();

        return actuadores;

    } catch (error) {
        console.error(
            'Error en el servicio de actuadores:',
            error
        );
        throw error;
    }
}