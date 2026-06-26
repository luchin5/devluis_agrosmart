import { eventoController } from "../controllers/lote_aves_controller.js";
import express from 'express';

/**
 * CAPA DE RUTAS PARA LOTES DE AVES
 */

const routeLoteAves = express.Router();

// Ruta para obtener todos los lotes de aves
routeLoteAves.get('/lotes', eventoController);

export default routeLoteAves;