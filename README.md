# Bases de Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Desplegar

`ng build` o `npm run build` para generar los archivos para subir 

## Desplegar localmente(Solo para desarrollo)

Para desplegar la aplicación localmente utilizando una libreria de npm llamada http-server `npm install --global http-server ` mas información en (https://www.npmjs.com/package/http-server)

Abrir una terminal y apuntar a la carpeta de [dist/bases] en este caso bases, pero puede tener cualquier nombre, una vez dentro utilizar `http-server -o`

## Desplegar en internet de forma rápida

Ingresar en Netlify (https://app.netlify.com/teams/yerson2345/sites) y subir la carpeta [dist/bases] la de bases con los archivos que contiene y listo.

## Desplegar en GitHub (Manual) 

Ingresar a (github.com) en el repositorio de nuestro proyecto "Settings -> Pages -> Source: Deploy from a branch" (IMPORTANTE: EL REPOSITORIO DEBE SER PUBLICO)


Para crear la carpeta [docs]: ir al IDE y pasar la carpeta bases al root(carpeta raiz del proyecto) y renombrala con el nombre de [docs]

Branch: main -> /docs -> save

Ingresar en el apartado de "Actions" y debería de aparecer el proceso de despliegue en proceso

Va a dar un error por que nos va a redireccionar a una página donde no esta desplegado el proyecto
para solucionar:

Dirijirse a la carpeta [docs] -> index.html y cambiar "< base href="/"> por < base href="./">

Y listo, dirijirse en el apartado de "Actions" e ingresar a la aplicación, recargar y ya debería de funcionar

## Desplegar en GitHub (Automatizar - package.json)

Lo primero es instalar una librerias que nos van a permitir manipular carpetas y archivos desde cualquier sistema operativo:
1. `npm install del-cli --save-dev`
2. `npm i copyfiles --save-dev`
3. En el package.json crear el script: "build:href": "ng build --base-href ./",

Después modificar el package.json para que ejectute los comandos como nosotros queremos:
`  "scripts": {
    "ng": "ng",
    "start": "ng serve -o",
    "build": "ng build",
    "build:href": "ng build --base-href ./",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "delete:docs": "del docs",
    "copy:dist":"copyfiles dist/bases/* ./docs -f",
    "build:github":"npm run delete:docs && npm run build:href && npm run copy:dist "
  }
`
El "build:github" es el script que permite toda la automatización del proceso
