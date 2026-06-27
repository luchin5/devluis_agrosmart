-- USUARIOS
INSERT INTO usuario.usuario (
    nombre,
    apellido,
    suscripcion_id,
    correo,
    uuid,
    telefono,
    usuario,
    contrasena,
    direccion,
    foto
)
VALUES
(
    'cliente_1',
    'bot_1',
    1,
    'lu@gmail.com',
    'firebase_uid',
    '1234',
    'luchin',
    '1234',
    'granja av via evitamiento',
    'fotito.jpg'
),
(
    'cliente_2',
    'bot_2',
    2,
    'davi@gmail.com',
    'firebase_uid',
    '355',
    'david',
    '321',
    'granja sandia peru',
    'fotodavid.jpg'
);

-- CONFIGURACION
INSERT INTO iot.configuracin (
    usuario_id,
    valor,
    tempminima,
    tempmaxima,
    nivelagua,
    humedad,
    dispositivo_iot_id
)
VALUES
(
    1,
    true,
    30.0,
    35.0,
    20.0,
    60.0,
    1
),
(
    2,
    true,
    29.0,
    34.0,
    25.0,
    65.0,
    2
);