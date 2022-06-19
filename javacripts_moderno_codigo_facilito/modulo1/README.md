## :star: Modulo 1

### Declaracion y expresion de funcion

*Una funcion puede ser creada con uan DECLARACION DE FUNCION o una EXPRESION DE FUNCION*

---

- Function estatements (**Declaracion de funcion**), debemos utilizar el nombre de la funcion

```JavaScript
// Declaracion
function saludar() {
  console.log('Hola')
}
```

---

- Function expression (**Expresion de funcion**), el nombre es opcional, es más es irrelevante, ya que siempre se asocia a una variable o constante.

```JavaScript
// Expresion
let f = function suma(num1, num2) {
  return num1 + num2;
}
```

-Pueden o no tener nombre

-Las que son sin nombre se las conoce como ANONIMAS

-Puede usar la sintaxos de flecha (arrow function)

Como alternativa podemos utilizar **ARROW FUNCTIONS**:


```JavaScript
// Expresion
let suma = (num1, num2) => num1 + num2;
```
Si solo tengo una linea de codigo puedo no poner las {} luego de =>


---

JavaScript mueve la declaracion de las variables y las funciones al tope del alcance -> **HOISTING**, por lo que podemos utilizar la función incluso antes que aparezca en el codigo (antes de declararla). Por eso es muy buen consejo ser ordenados y siempre primero tener los import, luego la declaracion de las variables y las funciones.

->> HOISTING solo sucede con DECLARACION DE FUNCIONES, si utilizamos FUNCIONES EXPRESADAS NO TENEMOS ESTE INCONVENIENTE.



---


### El alcance y el contexto

El scope des una coleccion de variables, funciones y objeos, que están a tu alcance en algún punto de tu código.

- **scope global** es todo aquello que no ha sido declarado dentro de un bloque o una funcion.

- **scoope local** hace referencia a todos los elementos disponibles solo para una función. Cada vez que llamas una nueva función, se crea un alcance local para esta función.

¿ Cuál es la diferencia entre ambas?

-Las GLOBALES se usan en el cuerpo principal y en funciones

-Las LOCALES solo en la funcion declarada


->> Ejemplo en codigo:

```JavaScript
let nombre = 'Ëugenia'; // alcance global

function saludar () {
  let edad = 37; // alcance local
  console.log(nombre, edad);
}

console.log(nombre);
console.log(edad); // tengo error porque existe solo dentro de la funcion

saludar();
```

¿Cuál es el problema de abusar del alcance global ?

Queda todo disponible, y si algo falla afecta a todo el conjunto, no puedo detectarlo. 

Debo tener funciones separadas y cada funcion debe hacer una sola cosa.

-> Cada funcion debe operar solo con la información del alcance local y todo aquello que necesite del exterior debe comunicarse por **argumentos**, y todo lo que secesita comunicar hacia el exterior debe ser vía el **retorno**


#### Resumen:

- Tenemos dos tipos de alcance: LOCAL y GLOBAL

- El GLOBAL recuerda que está disponible en todas las partes del código, pero no es recomendable abusar de su uso.

- El LOCAL es el que se crea para cada función cuando está se ejecuta.

- De ser posible, se recomienda que prefieras colocar tus elementos en el scope local de una funcion y no en el global.


->> alcance de **bloque**
ç
Utilizando VAR tengo SCOOPE GLOBAL, tiene alcance de funcion, estan disponibles en todo el programa:

```JavaSCript
function Presentacion(nombre, admin) {
  if(admin) {
    var rol= "Administrador"
  } else {
    rol = "Usuario"
  }

  console.log(`Soy el ${nombre} y mi rol es ${rol}`)
}

Presentacion("Eugenia", true); //invoco a la funcion
```
-> Codigo en **modulo1_1.js**


Utilizando LET o CONST tengo alcance LOCAL (de **BLOQUE**), solo existen en el bloque donde fueron declarados, adentro de las {} de la funcion:

```JavaSCript
function Presentacion(nombre, admin) {
  if(admin) {
    let rol= "Administrador"
  } else {
    rol = "Usuario"
  }

  console.log(`Soy el ${nombre} y mi rol es ${rol}`)
}

Presentacion("Eugenia", true); //rol is not defined
```

Solo existe dentro del ciclo o funcion donde está declarada.


- ¿ Qué pasa con el hoisting de variables ? HOISTING es el concepto por el que la declaración de funciones y la declaración de varibles, se mueven al inicio del alcance, pero no la asignación, si la imprimo antes todavía no tiene lugar (por eso el undefined).

Cuando no se inicializa una variable da error, por ejemplo:

```JavaScript
console.log(x);

let x = 20;
```

Por esto SIEMPRe PRMERO DECLARAR LA VARAIBLE Y LUEGO UTILIZARLA.

#### Resumen

- VAR siempre se aloja en el scope local dentro de una función, o en el global fuera de una función.

- LET, CONST puede alojarse en el scope, local, de bloque y global, según sea declarada en una función, en un bloque, o fuera de ambos.

- El valor para una variable con VAR, que no ha sido asignada, es UNDEFINED.

- El valor para una variable con LET, que no ha sido asignada, es UNITIALIZED (no incializada, por eso da error)

- Las variables tambien son alojadas al tope del scope, sin embargo, si intentas usar una variable no inicializada, recibirás un error.

#### ¿ Qué es el contexto ?

El contexto es el valor que tiene la palabra THIS y usualmente hace referencia al objeto sobre el que se está ejecutando el codigo.

**this == contexto**

this hace referencia al objeto que ejecuta el codigo...

... si una funcion no le pertenece a ningun objeto el valor de this es el objeto global, si es en el navegador es el WINDOW.

... en cambio si esta dentro de un objeto, el contexto es el OBJETO:

```JavaScript
function contexto() {
  console.log(this); // no podemos estar seguros de que valor tendra this
}

let objeto = {
  func: contexto
};

objeto.func(); // al ejecutar la  funcion, aca veo el valor de this
```


->> Las arrow functions no asignan un valor de this, lo heredan del contexto en que se ejecutan. Si usas **this** dentro de las **arrow functions** este se toma del exterior.

-> El valor this en las arrow funciont en **modulo1_3.js**

```JavaScript
let objeto = {
  numeros: [1, 2, 3],
  imprimir: function() {
    console.log(this); // el OBJETO
    this.numeros.forEach( function() {
      console.log(this); // el objeto WINDOW
    })
  }
}

objeto.imprimir(); // el objeto
```

Si necesitamos que el contexto se tome del exterior debemos utilizar arrow functions, para no cambiarnos el contexto al ejecutar un CALLBACK.


```JavaScript
let objeto = {
  numeros: [1, 2, 3],
  imprimir: function() {
    console.log(this); // el OBJETO
    this.numeros.forEach( () => {
      console.log(this); // el objeto
    })
  }
}

objeto.imprimir(); // el objeto
```

### En resumen:

- Las funciones flecha no cabmian el valor de this, lo heredan o lo toman de afuera

- Esto abre la puerta a usar las arrow fucntions cuando no queremos que el contexto en el cuerpo de la función cambie.

---

### Pase por valor y pase por referencia

En JavaScript un **argumento** puede ser enviado por **valor** o por **referencia**.

Decimos que un valor ha sido enviado como **referencia** cuando el parámetro apunta a la misma dirección que el argumento original.

Un **parametro** se define en la definición de la función, es un valor que recibe.

El **argumento** es lo que la función envía en la ejecución (al invocarla).


```JavaScript
function imprimir(nombre) { // nombre es parametro
  console.log(nombre);
}

imprimir('Eugenia'); // Eugenia es el argumento
```

-> Los OBJETOS y los ARREGLOS son enviados por referencia. Todo lo demas es enviado por VALOR.

```JavaScript
function imprimir(nombre) { // nombre es parametro
  nombre = 'Ana';
  console.log(nombre);
}

let n = 'Eugenia';

imprimir(n);  // le envio Eugenia pero dentro de la funcion lo cambio a Ana, asi que iprime ANA
```

Al pasar el valor por referncia, afecto al valor de la variable fuera de la funcion:
```JavaScript
function imprimir(arreglo) { // nombre es parametro
  arreglo[0] = 100;
  console.log(nombre);
}

let numeros = [0]; // un array que solo tiene el elemento 0

console.log(numeros); // 0
imprimir(numeros);  // 100
console.log(100); // 100
```

Esto mismo aplica para los OBJETOS

```JavaScript
function modificador(obj) {
  obj.nombre = 'Ana';
}

let objeto = {};

modificador(objeto);

console.log(objetos);
```

- ¿ Por qué es importante ? Durante un trabajo con React aprenderás del concepto de **efectos secundarios** y los valores pasados por referencia son una puerta a que una función produzca efectos secundarios (la ejecucion de la funcion puede afectar al exterior).


---

### Promesas

JavaScript es un lenguaje de programación **asíncrono** que se ejecuta sobre un **solo hilo**, las operaciones en el codigo se ejecutan una después de la otra. 

El problema es que si una tarea demora mucho (como una peticion asincrona o consulta ala base de datos) se bloquea el hilo y otras operaciones no se pueden ejecutar.

Para solucionarlo JavaScript tiene el **event loop** por lo que la tarea que demorará va a al **cola de mensajes** y nos avisa cuando termino, el event loop esta todo el tiempo viendo si hay alguna tarea en la cola de mensajes que se finalizo, si es así lo pasa al stack.

->> Para poder trabajar con el event loop JavaScript introduce el concepto de **promesas**, que nos permiten definir código a ejecutarse cuando una tarea fue finalizada.

Inicialmente era con **callbacks** pero luego vinieron las **promesas**

¿Què es una promesa ? Es un tipo de objeto retornado por una OPERACIÓN ASÍNCRONA, utilizando este objeto podemos obtener el valor final de la operación asíncrona, o sus errores.

Una promesa es UN OBJETO QUE VA A PRODUCIR UN VALOR EN EL FUTURO.

Una promesa puede encontrarse en alguno de los siguientes estados...

... **fullfiled** (completada): la promesa se completó con éxito

**rejected** (rechazada): la promesa no se completó con éxito.

**pending** (pendiente): el estado de la promesa cuando la operación no ha terminado, aquí decimos que la promesa no se ha cumplido.

**settled** (finalizada): la promesa terminó ya sea con éxito o con algún error.

Hay ejemplos en codigo en: **modulo1_promesas.js**

Utilizo **fetch** que es una operación asincrona en JavaScript.

```JavaScript
let p = fetch('https://api.github.com/users/codigofacilito');

console.log(typeof p); // [object Promise]
```

-> devuelve el object Promise, pero no el resultado en sí.

-> Para poder acceder a esa información tenemos 3 métodos, que se ejecutan cuando la operacion termina ...

... **then** ejecuta la funcion que se pasa por parametro cuando la ejecución fue exitosa (no hay error al tiempo de ejecucion).

```JavaScript
let p = fetch('https://api.github.com/users/codigofacilito');

p.then(function(resultado) {
  console.log('Ya termine')
  console.log(resultado)
})
```

-> codigo en **modulo1_promesas2.js**


... **catch** que captura el error

```JavaScript
let p = fetch('https://codigofacilito.com/articulos');

p.then(function(resultado) {
  console.log('Ya termine');
  console.log(resultado);
});

p.catch(function(err) {
  console.log('Peticion asincrona fallada');
  console.log(err); // para saber que error tengo
})
```

-> se puede ver el codigo en **modulo1_promesas3.js**

... **finally** que se ejecuta siempre, independientemente de si hay error o no.

```JavaScript
let p = fetch('https://codigofacilito.com/articulos');

p.then(function(resultado) {
  console.log('Ya termine');
  console.log(resultado);
});

p.catch(function(err) {
  console.log('Peticion asincrona fallada');
  console.log(err); // para saber que error tengo
});

p.finally(function(d) {
  console.log('Termine');
});
```


-> se puede ver el codigo en **modulo1_promesas3.js**


->>> Sobre el resultado de una operacion asíncrona necesitamos ejecutar otra.

Una forma de hacerlo, pero tenemos una funcion dentro de otra funcion:

```JavaScript
let p = fetch('https://api.github.com/users/codigofacilito');

p.then(function(resultado) {
  console.log('Ya termine');
  resultado.json().then(function(json) {  // .json() -> para convertir la informacion en formato json, es asincrona y retorna promesa
    console.log(json);
  }) 
});
```

-> se puede ver el codigo en **modulo1_promesas4.js**

Otra forma es retornar la promesa, encadenando 2 promesas. Al estar encadenadas se ejecuta una y luego la otra:

```JavaScript
let p = fetch('https://api.github.com/users/codigofacilito');

p.then(function(resultado) {
  console.log('Ya termine');
  return resultado.json()
}).then(function(json) {
  console-log(json);
})
```

-> se puede ver el codigo en **modulo1_promesas5.js**
---