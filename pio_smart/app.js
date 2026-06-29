console.log('ARCHIVO PRINCIPAL CARGADO');
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import routeUsers from './routes/user_route.js';
import routeActuador from './routes/actuador_route.js';
import routeConfiguracion from './routes/configuracion_route.js';
import routeCorral from './routes/corral_route.js';
import routeDispositivoIot from './routes/dispositivo_iot_route.js';
import routeEvento from './routes/evento_route.js';
import routeLoteAves from './routes/lote_aves_route.js';
import routeMedicion from './routes/medicion_route.js';
import routeMetricaSemanal from './routes/metrica_semanal_route.js';
import routeNivelEvento from './routes/nivel_evento_route.js';
import routeNotificacion from './routes/notificacion_route.js';
import routeSensor from './routes/sensor_route.js';
import routeSuscripcion from './routes/suscripcion_route.js';

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
app.use('/api_piosmart/v1', routeActuador);
app.use('/api_piosmart/v1', routeConfiguracion);
app.use('/api_piosmart/v1', routeCorral);
app.use('/api_piosmart/v1', routeDispositivoIot);
app.use('/api_piosmart/v1', routeEvento);
app.use('/api_piosmart/v1', routeLoteAves);
app.use('/api_piosmart/v1', routeMedicion);
app.use('/api_piosmart/v1', routeMetricaSemanal);
app.use('/api_piosmart/v1', routeNivelEvento);
app.use('/api_piosmart/v1', routeNotificacion);
app.use('/api_piosmart/v1', routeSensor);
app.use('/api_piosmart/v1', routeSuscripcion);

console.log('Rutas de usuario configuradas en /api_piosmart/v1');
// Puerto de escucha
const PORT = process.env.PORT;
app.listen(PORT, () => {

    console.log(`PIO SMART EJECUTANDOSE 🐤: http://localhost:${PORT}`);
    console.log("--------------------------------");
});
