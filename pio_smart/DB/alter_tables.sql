ALTER TABLE usuario.suscripcion
ADD CONSTRAINT fk_suscripcion_usuario
FOREIGN KEY (id_usuario)
REFERENCES usuario.usuario(id_usuario);


ALTER TABLE granja.corral
ADD CONSTRAINT fk_corral_usuario
FOREIGN KEY (id_usuario)
REFERENCES usuario.usuario(id_usuario);

ALTER TABLE granja.lote_aves
ADD CONSTRAINT fk_lote_corral
FOREIGN KEY (id_corral)
REFERENCES granja.corral(id_corral);
--x--
ALTER TABLE iot.dispositivo_iot
ADD CONSTRAINT fk_dispositivo_usuario
FOREIGN KEY (id_usuario)
REFERENCES usuario.usuario(id_usuario);

ALTER TABLE iot.sensor
ADD CONSTRAINT fk_sensor_dispositivo
FOREIGN KEY (id_dispositivo)
REFERENCES iot.dispositivo_iot(id_dispositivo);

ALTER TABLE iot.actuador
ADD CONSTRAINT fk_actuador_dispositivo
FOREIGN KEY (id_dispositivo)
REFERENCES iot.dispositivo_iot(id_dispositivo);
--x--
ALTER TABLE iot.configuracion
ADD CONSTRAINT fk_configuracion_dispositivo
FOREIGN KEY (id_dispositivo)
REFERENCES iot.dispositivo_iot(id_dispositivo);

ALTER TABLE iot.medicion
ADD CONSTRAINT fk_medicion_sensor
FOREIGN KEY (id_sensor)
REFERENCES iot.sensor(id_sensor);

ALTER TABLE metricas.metrica_semanal
ADD CONSTRAINT fk_metrica_medicion
FOREIGN KEY (id_medicion)
REFERENCES iot.medicion(id_medicion);

ALTER TABLE alertas.evento
ADD CONSTRAINT fk_evento_dispositivo
FOREIGN KEY (id_dispositivo)
REFERENCES iot.dispositivo_iot(id_dispositivo);

ALTER TABLE alertas.evento
ADD CONSTRAINT fk_evento_nivel
FOREIGN KEY (id_nivel)
REFERENCES alertas.nivel_evento(id_nivel);

ALTER TABLE alertas.notificacion
ADD CONSTRAINT fk_notificacion_evento
FOREIGN KEY (id_evento)
REFERENCES alertas.evento(id_evento);


