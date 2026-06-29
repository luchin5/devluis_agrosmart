import { getConfiguracionService,postConfiguracionService,postConfiguracionConexionService,getConfiguracionConexionServiceID } from '../services/configuracion_service.js';
import axios from 'axios';
/**
 * CAPA DE CONTROLADORES PARA CONFIGURACIONES
 */

export const getconfiguracionController = async (req, res) => {
    try {
        console.log('Controlador de configuración: Recibiendo solicitud para obtener configuraciones...');

        const configuraciones = await getConfiguracionService();

        if (!configuraciones || configuraciones.length === 0) {
            return res.status(404).json({
                error: 'No se encontraron configuraciones'
            });
        }

        res.status(200).json(configuraciones);

    } catch (error) {
        console.error('Error en el controlador de configuración:', error);

        res.status(500).json({
            error: 'Error al obtener las configuraciones'
        });
    }
}

export const postConfiguracionController = async (req,res) => {
    try{
        console.log('Controlador de configuración: Recibiendo solicitud para crear configuración...');
        const configuracion = req.body;
        const resultado = await postConfiguracionService(configuracion);
        res.status(201).json(resultado);
    }
    catch(error){
        console.error('Error en el controlador de configuración al crear configuración:', error);
        res.status(500).json({
            error: 'Error al crear la configuración'
        });
    }
}

// CONFIGURACION DE CONEXION WIFI
export const postConfiguracionConexionController = async (req,res) => {
    try{
        console.log('Controlador de configuración: Recibiendo solicitud para crear configuración de conexión...');
        const config_conexion = req.body;
        const resultado = await postConfiguracionConexionService(config_conexion);
        res.status(201).json(resultado);

        // ENVIAR CONFIGURACION DE CONEXION WIFI AL ARDUINO PARA QUE SE CONECTE A LA RED WIFI

        const config_conexion_arduino = await axios.post('http://192.168.4.1/configurar', {
            "modo":"URBANO",
            "nombre_red":"MiCasa",
            "contrasena_red":"12345678"
        });
    }
    catch(error){
        console.error('Error en el controlador de configuración al crear configuración de conexión:', error);
        res.status(500).json({
            error: 'Error al crear la configuración de conexión'
        });
    }   
}

export const getConfiguracionConexionControllerID = async (req,res) => {
    try{
        const {id} = req.query
        const resultado = await getConfiguracionConexionServiceID(id);
        res.status(200).json(resultado);
    }
    catch(error){
        console.error('Error en el controlador de configuración al obtener configuración de conexión por ID:', error);
        res.status(500).json({
            error: 'Error al obtener la configuración de conexión por ID'
        });
    }
}

