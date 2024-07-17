# 05 - Advanced

## Variables de entorno

Son **Variables** que dependiendo del **entorno** (donde se está ejecutando la aplicación) pueden tener diferentes valores.

Podemos tener variables de entorno **locales** y **globales**. También su puede crear otras para **producción** y **desarrollo**.

Hay un paquete de npm llamado **dotenv**.

Las variables de entorno, por estandar se guardan en un archivo: `.env`. Pero al trabajar con Vite ya tiene su modo de leer las variables. Y hay que agregarlo en el `.gitignore`porque no vamos a subir al repositorio nuestras variables de entorno, se crea un archivo `.env.template`que indica cuales son nuestras variables.

Con `process.env`se suele tener as variables, pero no en Vite, con Vite es : `import.meta.env` que es un objeto:

```JavaScript
{
  BASE_URL: ""
  DEV: true,
  MODE: "development",
  PROD: false,
  SSR: false
}
```

- SSR: Server Side Rendering

Para ver nuestras variables del archivo `.env`debemos anteponer `VITE_` y ahora si se ven las variables del archivo `.env`.

---

## CALLBACKS

Los **callbacks** son funciones que reciben como argumento otra función y se invoca a esa función.

---