# CRUD

## Temas:

-Operaciones CRUD: Create, Read, Update, Delete

-Sin frameworks o librerías externas

-Modals

-Mappers

-Clases

-Utilizar conversiones

-Código limpio

-Comprender las funcionalidades básicas de un Restful API de un backend

-Montar un backend de pruebas

-Generar y utilizar un store central para nuestro estado de la aplicación

-Documentación de funciones

---

## Tecnologías:

- HTML5

- CSS3

- JavaScript

- JSON Server

- Vite

---

## Comandos:

`npm create vite@latest`-> para inicializar el proyecto, elejimos: nombre, Vanilla y JavaScript. Luego ingresamos a la carpeta del proyecto creada.

`npm install` -> para instalar dependencias

`npm run dev` -> para correr el proyecto y verlo en: [http://localhost:5173/](http://localhost:5173/)

`npm run server`-> para levantar el servidor con json-server y puedo usar los siguientes endpoints:

- [http://localhost:3002/users](http://localhost:3002/users) get users list

->Siempre tener el servidor corriendo, sino no se pueden ver los usuarios

---

## Estrcutura del proyecto

```
> src
  > users
    > mappers
    > models
    > presentation
    > store
    > use-cases
```

- **mappers**: tomamos la información que luce de una manera y la transformamos, se va a usar ya que el BackEnd usa snake_case y en el FrontEnd camelCase, entonces las key de los objetos se pasan a camelCase.

- **models**: representación de como trabajar en la aplicación. Hace la aplicación más robusta y tolerante a cambios.

- **presentation**: las interfaces de usuario.

- **store**: donde está la información centralizada.

- **use-cases**: funciones específicas como traer datos, elimar, etc.