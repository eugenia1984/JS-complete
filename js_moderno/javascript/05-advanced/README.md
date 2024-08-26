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

Transforma la función para regresar la promesa que resuelva lo que se especifica en el return.

Las funciones asincronas (y las que trabajan con Promise) no siguen el hilo principal, OJO JavaScript no es multi tread, sino que la manda a la pila de promesas (tarea por hacer) y sigue con el codigo sincrono y cuando las promesas esten resueltas ahi las usa porque vuelve al stack del trabajo pendiente.

-> Se ejecuta a destiempo del hilo principal.


-> Si tengo un **error** con el id, no voy a tener un hero, entonces yo lanzo el error con el ***throw** y lo agarro en el **Catch()**:

```JavaScript
import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncComponent = (element) => {
  const id1 = "5d86371f9f80b591f499df32";
  console.log("Inicio del componente");

  findHero(id1)
    .then((name) => (element.innerHTML = name))
    .catch((error) => (element.innerHTML = error));

  console.log("Fin del componente");
};

/**
 *
 * @param {String} id
 * @returns {Promise<String>}
 */
const findHero = async (id) => {
  const hero = heroes.find((hero) => hero.id === id);

  if (!hero) throw `Hero with id ${id} not found`;

  return hero?.name;
};
```

---

## ASYNC - AWAIT

**Await**, esperate que el resultado de la función con **Async** termine y despues te ejecutas (promesa).

Los errores los manejo encerrando a la función con await en un **try-catch**.


Con el `Promise.all()` se pueden optimizar promesas no secuenciales:

```JavaScript
/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwaitSequenceComponent = async (element) => {

  console.time('Start');

  // De este modo demora 4 seg. 
  // const value1 = await slowPromise();
  // const value2 = await mediumPromise();
  // const value3 = await fastPromise();

  // Con el Promise all demora solo 2 seg.
  // Desestructuro la respuesta para tener los valores
  const [value1, value2, value3] = await Promise.all([
    slowPromise(),
    mediumPromise(),
    fastPromise()
  ])

  element.innerHTML = `
    value1: ${value1} <br/>
    value2: ${value2} <br/>
    value3: ${value3} <br/>
  `;

  console.timeEnd('Start');
};

const slowPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Slow promise");
    }, 2000);
  });

const mediumPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Medium promise");
    }, 1500);
  });

const fastPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fast promise");
    }, 1000);
  });

```

---

## FOR AWAIT


```JavaScript
import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {
  const id = '5d86371f97c29d020f1e1f6d';
  
  const herosIds = heroes.map(hero => hero.id);

  const heroPromises = getHeroesAsync(herosIds);

  for await(const hero of heroPromises) {
      element.innerHTML += `${hero.name} <br/>`
  }
}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}
```

---

## Funciones generadoras

- No se puede usar mediante arrow functions

- `function*`

- Genera una secuencia de valores, los cuales podemso utilizarlos para difernetes casos.

---