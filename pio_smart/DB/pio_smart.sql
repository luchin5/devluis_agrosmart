DROP DATABASE IF EXISTS piotec_agrosmart;
CREATE DATABASE piotec_agrosmart;

CREATE SCHEMA usuario;
CREATE SCHEMA granja;
CREATE SCHEMA iot;
CREATE SCHEMA alertas;
CREATE SCHEMA metricas;
-- x--
CREATE TABLE usuario.usuario(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
	apellido VARCHAR(200) NOT NULL,
	suscripcion_id INT,
    correo VARCHAR(100) UNIQUE NOT NULL,
	uuid VARCHAR(300),
    telefono VARCHAR(20),
	usuario VARCHAR(200) NOT NULL,
	contrasena VARCHAR(300) NOT NULL,
	direccion VARCHAR(500),
	foto VARCHAR(500)
	
);

CREATE TABLE usuario.suscripcion(
    id_suscripcion SERIAL PRIMARY KEY,
    tipo_plan VARCHAR(50),
    fecha_inicio DATE,
    fecha_fin DATE,
    id_usuario INT
);

CREATE TABLE granja.corral(
    id_corral SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    capacidad INT,
    id_usuario INT
);

CREATE TABLE granja.lote_aves(
    id_lote SERIAL PRIMARY KEY,
    cantidad_aves INT,
    fecha_ingreso DATE,
    id_corral INT
);
--x--
CREATE TABLE iot.dispositivo_iot(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    estado VARCHAR(30),
	ip_local VARCHAR(300),
	contrasena VARCHAR(300)
);

CREATE TABLE iot.sensor(
    id_sensor SERIAL PRIMARY KEY,
    tipo_sensor VARCHAR(50),
    unidad_medida VARCHAR(20),
    id_dispositivo INT
);

CREATE TABLE iot.actuador(
    id_actuador SERIAL PRIMARY KEY,
    tipo_actuador VARCHAR(50),
    estado VARCHAR(30),
    id_dispositivo INT
);
--x--
CREATE TABLE iot.config_conexion(
    id SERIAL PRIMARY KEY,
	usuario_id INT,
    nombre_red VARCHAR(100),
	contrasena_red VARCHAR (200),
	modo VARCHAR(100),
    dispositivo_iot_id INT
);
--x--
CREATE TABLE iot.configuracin(
    id SERIAL PRIMARY KEY,
	usuario_id INT,
    valor VARCHAR(100),
	tempMinima FLOAT,
	tempMaxima FLOAT,
	nivelAgua FLOAT,
	humedad FLOAT,
    dispositivo_iot_id INT
);

CREATE TABLE iot.medicion(
    id_medicion SERIAL PRIMARY KEY,
    valor NUMERIC(10,2),
    fecha_hora TIMESTAMP,
    id_sensor INT
);

CREATE TABLE metricas.metrica_semanal(
    id_metrica SERIAL PRIMARY KEY,
    promedio NUMERIC(10,2),
    semana VARCHAR(20),
    id_medicion INT
);

CREATE TABLE alertas.nivel_evento(
    id_nivel SERIAL PRIMARY KEY,
    nombre_nivel VARCHAR(50),
    descripcion VARCHAR(200)
);

CREATE TABLE alertas.evento(
    id_evento SERIAL PRIMARY KEY,
    descripcion VARCHAR(200),
    fecha_hora TIMESTAMP,
    id_dispositivo INT,
    id_nivel INT
);

CREATE TABLE alertas.notificacion(
    id_notificacion SERIAL PRIMARY KEY,
    mensaje VARCHAR(250),
    fecha_envio TIMESTAMP,
    id_evento INT
);


