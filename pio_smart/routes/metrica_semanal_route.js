import { metricaSemanalController } from "../controllers/metrica_semanal_controller.js";
import express from 'express';

/**
 * CAPA DE RUTAS PARA MÉTRICAS SEMANALES
 */

const routeMetricaSemanal = express.Router();

// Ruta para obtener todas las métricas semanales
routeMetricaSemanal.get('/metricas-semanales', metricaSemanalController);

export default routeMetricaSemanal;