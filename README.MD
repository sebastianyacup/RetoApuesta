# Proyecto: Gestor de Ventas
 
 Este proyecto es un gestor de ventas que consta de un frontend desarrollado con Angular 13.0.1 y un backend desarrollado en Java 11 utilizando PostgreSQL como base de datos relacional.

## Requisitos
- Angular 13.0.1
- Java 11
- PostgreSQL


## Configuración y Ejecución del Proyecto 

### Configuración de la Base de Datos

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```
- Una vez instalado PostgreSQL, puedes iniciar el servicio con el siguiente comando:
```bash
sudo service postgresql start
```
- Luego, accede a la consola de PostgreSQL con el siguiente comando:
```bash
sudo -u postgres psql
```
- Dentro de la consola de PostgreSQL, crea una nueva base de datos con el siguiente comando:
```bash
CREATE DATABASE postgres;
```
- A continuación, crea una tabla llamada registro_ventas con los siguientes campos:
```bash
CREATE TABLE registro_ventas (
    ID SERIAL PRIMARY KEY,
    OPERADOR VARCHAR(255),
    VENDEDOR VARCHAR(255),
    VALOR NUMERIC,
    FECHA TIMESTAMP
);
```
- Finalmente, sal de la consola de PostgreSQL ejecutando:

```bash
\q
```

## Ejecucion del Backend (Java)

- Para ejecutar el backend, primero debes compilarlo. Navega hasta la carpeta del proyecto backend y ejecuta el siguiente comando:
```bash
./gradlew build
```
- Una vez compilado, puedes ejecutar el backend con el siguiente comando:
```bash
java -jar build/libs/RetoApuestas.jar
```
## Ejecucion del Fronted (Angular)

- Para ejecutar el frontend, primero asegúrate de tener instaladas las dependencias. Navega hasta la carpeta del proyecto frontend y ejecuta el siguiente comando:
```bash
npm install
```
- Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo con el siguiente comando:
```bash
ng serve -o
```
-Esto abrirá automáticamente el navegador y cargar la aplicación.

