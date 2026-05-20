import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import routeUsers from './routes/user_route.js';

const app = express();

/**
 *  Middleware
 *  Los middlewares son funciones que se ejecutan durante el ciclo de vida de una solicitud a la API.
 *  Son quienes restringen el acceso a ciertas rutas, validan datos, manejan errores, entre otras funciones.
 *  */

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use('/api_piosmart/v1', routeUsers);

// Puerto de escucha
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`PIO SMART EJECUTANDOSE 🐤: http://localhost:${PORT}`);
});
