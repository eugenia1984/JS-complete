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

- **callbacks hell** callbacks que a su vez llaman a otro y así sucesivamente. Ejemplo:

```JavaScript
import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
  const id1 = "5d86371f1efebc31def272e2";
  const id2 = '5d86371f2343e37870b91ef1';

  findHero(id1, (error,hero) => {
    if(error) {
      element.innerHTML = error;
      return;
    }

    findHero(id2, (error, hero2) => {
      if(error) {
        element.innerHTML = error;
        return;
      }

      element.innerHTML = `${hero1.name}  / ${hero2.name}`;
    });
  });
};

/**
 *
 * @param {String} id
 * @param {(error: String | null, hero: Object) => void} callback
 */
const findHero = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id);

  if(!hero) {
    callback(`Hero with id: ${id} not found`);
    return; // undefined
  }

  callback(null, hero);
};
```

---

## PROMISES

Es un pacto entre 2 partes en las que una se compromete a hacer un trabajo y la otra está esperando el cumplimiento de la promesa, la cual se puede cumplir o no (en este último caso hayq ue manejar esto también).

Va a tener un **Callback** con dos parametros: **resolve** (caso exitoso) y **reject** (caso que la promesa no se cumple).

Ejemplo:

```JavaScript
/**
 * 
 * @param {String} id 
 * @returns  {Promise<Object>}
 */
const findHero = (id) => {
  return new Promise(( resolve, reject) => {
    const hero = heroes.find(hero => hero.id === id );

    if(here) {
      resolve(hero);
      return;
    }

    reject(`Hero with id ${id} not found`)
  });
};
```


Y usamos el **tr*y - catch**:

```JavaScript
findHero(id1)
    .then(superHero => renderHero(superHero))
    .catch( error => renderError(error))
```

Como el mismo argumento es el que se envia se puede resumir asi:


```JavaScript
findHero(id1)
    .then(renderHero)
    .catch(renderError)
```

OJO que se puede crear el PromiseHell (en el ejemplo en realidad el promise hell es un callback):

```JavaScript
findHero(id1)
    .then((hero1) => {
      findHero(id2)
        .then((hero2) => {
          renderTwoHeroes(hero1, hero2);
        })
        .catch(renderError);
    })
    .catch(renderError);
```
    
Se puede evitar con el **PromiseAll**, siempre QUE LAS PROMESAS NO DEPENDAN ENTRE SI.

Pero antes un PRO TIP, encadenar los *then()** para tener un unico **Catch()**:

```JavaScript
findHero(id1)
    .then((hero) => {
      hero1 = hero;
      return findHero(id2);
    })
    .then((hero2) => {
      renderTwoHeroes(hero1, hero2);
    })
    .catch(renderError);
```

PROMISE ALL

El `Promise.all()` es un método estático que tiene el constructor de las `Promise`; sera un array de promesas. Se ejecutan todas de manera simultanea, por eso no deben depender una de otras para poder utilizarlo.

El `Promise.all()` me regresa como un array con todos los valores resultos, que los agarro en el `then()`.

Si una da promesa da error, va a ser atrapado en el catch. Con que una de error se ejecuta el catch para todas.
    
```JavaScript
 Promise.all([
    findHero(id1),
    findHero(id2),
  ])
  .then( ([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
  .catch(renderError);
```

En el array de resultados, como se que tengo hero1 y hero2, lo desestructuro.

- Ademas del `Promise.all()`, tenemos el `Promise.race()`que también recibe como argumento un array de promesas, pero que en el then() vamos a tener solo la primer promesa resuelta, es decir, la que se resuelve más rápido. Se ejecutan todas las promesas del array, pero se trabaja solo con la más rápida.

---

## ASYNC

Transforma la función para regresar la promesa que resulva lo que se especifica en el return

---