CREATE DATABASE inyecciones;


CREATE TABLE usuarias (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    fecha_inyeccion DATE NOT NULL,
    duracion_meses INTEGER NOT NULL
);
