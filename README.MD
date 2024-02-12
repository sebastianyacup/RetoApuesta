# Proyecto: Gestor de Ventas
 
 Este proyecto es un gestor de ventas que consta de un frontend desarrollado con Angular 13.0.1 y un backend desarrollado en Java 11 utilizando PostgreSQL como base de datos relacional.

## Requisitos
- Angular 13.2.7
- Java 11
- PostgreSQL
- npm 9.5.0
- Node: 18.15.0
_____________
### 💡 **NOTA**

En este proyecto, se incluye un vídeo titulado **'Tutorial del reto'**, el cual muestra en detalle el funcionamiento completo, así como también proporciona una guía paso a paso para su utilización. 

Para ver el vídeo, puedes hacer clic [aquí](https://drive.google.com/file/d/1NbAHJP7mBVrGHqCgAgLL5FXZF8R0HpTs/view?usp=sharing) o simplemente sigue este enlace:
[Ver vídeo](https://drive.google.com/file/d/1NbAHJP7mBVrGHqCgAgLL5FXZF8R0HpTs/view?usp=sharing)

__________
## Configuración y Ejecución del Proyecto 

#### 1. Configuración de la Base de Datos en Ubuntu

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
### Ejecución del Proyecto

Antes de ejecutar el backend, asegúrate de que la base de datos esté encendida. Si la base de datos no está activa, el backend no podrá conectarse correctamente.

Verifica que la dirección IP configurada en el archivo `application.properties` coincida con la dirección IP de tu base de datos. La configuración predeterminada puede que necesite ajustes para adaptarse a tu entorno.

Una vez que la base de datos esté encendida y hayas validado esto, puedes proceder a ejecutar el backend. Recuerda revisar el archivo `application.properties` que se muestra a continuación:

```bash

spring.jpa.show-sql=true
spring.datasource.url=jdbc:postgresql://localhost:5432/postgres
spring.datasource.username=postgres
spring.datasource.password=1234
spring.datasource.driver-class-name=org.postgresql.Driver
```

## Ejecucion del Backend (Java)

- Antes de ejecutar el backend, asegúrate de que la conexión con la base de datos sea exitosa. Luego, procede a compilar el backend. Para ello, navega hasta la carpeta del proyecto backend y ejecuta el siguiente comando
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

____________________________

### 💡 **NOTA DEPENDENCIAS ANGULAR**

En este proyecto se utilizaron las siguientes versiones de Angular, Node y npm. Por favor, configure las mismas dependencias, ya que de lo contrario podrían surgir fallos.
```bash
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 13.2.6
Node: 18.15.0 
Package Manager: npm 9.5.0
OS: win32 x64

Angular: 13.2.7
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1302.6
@angular-devkit/build-angular   13.2.6
@angular-devkit/core            13.2.6
@angular-devkit/schematics      13.2.6
@angular/cli                    13.2.6
@schematics/angular             13.2.6
rxjs                            7.5.7
typescript                      4.5.5
```

_________________
