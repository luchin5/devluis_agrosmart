ALTER TABLE iot.configuracin
ADD CONSTRAINT fk_configuracion_usuario
FOREIGN KEY (usuario_id)
REFERENCES usuario.usuario(id)
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE iot.config_conexion
ADD CONSTRAINT fk_config_conexion_usuario
FOREIGN KEY (usuario_id)
REFERENCES usuario.usuario(id)
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE iot.config_conexion
ADD CONSTRAINT fk_config_conexion_dispositivo_iot
FOREIGN KEY (dispositivo_iot_id)
REFERENCES iot.dispositivo_iot(id)
ON DELETE CASCADE
ON UPDATE CASCADE;
