# :star: 1 - ¿Cómo JavaScript ejecuta tu código ?

---

## El entorno léxico, contexto global y contexto de la función

Al momento de renderizar la web primero se crea un **contexto de ejecución global**, es decir, el **objeto windows**.

¿Qué es un contexto de ejecución?

Son contenedore que el motor de JavaScript utiliza para organizar el código en la aplicación.

También está el **contexto de ejecución la función** que está cuando se ejecuta/invoca una función y al finalizar su ejecución el motor de JavaScript elimina este contexto de ejecución de l afunción y vuelve al contexto global.

También está el **contexto léxico**, el orden en que voy poniendo las funciones en el código es importante y define como el motor de JS organiza los elementos en la memoria. Primero ejecuta las variables dentor del scope de la funcion y luego las que están fuera. Igual el ejemplo utiliza VA R y ahora se utiliza LET y CNST

En el documento .html dentro de los tags ```<script>``` se ejecuta el código JavaScript.

Ejemplo en código que está en el archivo contexto.js:

```JavaScript
console.log(this);  // contexto global

function incrementar(val) {  // contexto de funcion
    return val +1;
}

//ejemplo de contexto lexico
var a = 1;

function primerFuncion() {
    console.log(`El valor de a es: ${a}`);
}

function imprimirLetra() {
    var a = 2;
    primerFuncion();
}

imprimirLetra();
```

---

## Fases del contexto de ejecución

**Fase de creación** colocación en memoria de variables y funciones

**fase de ejecución** ejecución del código línea por línea

Creación del contexto global:

- crear un objeto global (*windows*)

- crear el objeto *this* y referenciarlo al objeto global (this== window es true porque referencian al mismo objeto)

- colocar en memoria todas las *funciones* y las variables declaradas con keyword *var*

Ejemplo en código:

```JavaScript
prueba();
temp = 5;

var temp;
function prueba() {
    return 5;
}
```

1ro en memoria:
```
var temp = undefined;
function prueba() {
    return 5;
}
```

En este caso ambos se llaman antes a ser declarados.

-> Aca hay **Hoisting**, por eso es recomendable utilizar **let** o **const**en vez de var.

Por eso:

```JavaScript
prueba();
temp = 5;

let temp= true;
function prueba() {
    return 5;
}
```

Asi solo la función prueba puede ser llamada antes de ser declarada, y al llamar a la variable temp va  adar error, porque está declarada debajo, no antes.



**Creación del contexto de la función**

1 - Crear el object *this* y referenciarla al object que invocó la función. Si este no existe, referenciarla al objecto global.


Ejemplo:

Por eso, en un **contexto global** hace referencia a **window**:

```JavaScript
function prueba() {
    console.log(this);
}

prueba(); // window
```

Pero en el **contexto de la función**:

```JavaScript
document.getElementById('boton').addEventListener('click', eventoBoton);

function eventoBoton() {
    console.log(this); // instancia boton
}
```

2 - Crear un object **argument** con todos los parámetros de la función.

Por ejemplo:

```JavaScript
function prueba(a, b) {
    console.log(arguments);
}
prueba(1,2); // [1,2]
```

3  - El proceso de *hoisting* es el mismo al del contexto global. Coloca en memoria todas las funciones y las varaibles declaradas con el keyword var.

**Fase de ejecución :**

- El motor de JavaScript ejecuta el código línea por línea

- Cuando una función finaliza su ejecución, el contexto y todas sus variables son eliminadas de la memoria, entonces el contexto global permanece en memoria a lo largo de la ejecución del programa.

---

## Alcance y cadena de alcance

**Scope global**

**Scope local** que existe dentro de las funciones que declaramos.

```JavaScript
var variableGlobal = "Hola Global";

function saludoLocal() {
    var variableLocal = "Hola Local";
    console.log(variableLocal);
}

console.log(variableGlobal);  // Hola GLobal
saludoLocal();  // Hola Local
console.log(variableLocal);  // variableLocal is not defined, porque solo existe dentro de la funcion, no es parte dle contexto global
```

Otro ejemplo en código :

```JavaScript
var b = 1;
function primeraFuncion() {
    var c = 2;
    function segundaFuncion() {
        var d = 3;
        var b = 20;
        function terceraFuncion() {
            console.log(`Funcion #3 ==>`);
            console.log(`b =  ${b}`);
            console.log(`c =  ${c}`);
            console.log(`d =  ${d}`);
        }
        terceraFuncion();
    }
    segundaFuncion();
}
primeraFuncion();
```

Por consola veo:
```
Funcion #3 ==>
b =  20
c =  2
d =  3
```

La terceraFuncion() tiene acceso a todas las variables, porque al ejecutarse el motor de JS ve que no existe dentro de terceraFuncion() y sube un nivel a segundaFuncion(), al no encontrarla sube otro nivel a primeraFuncion() y si tampoco está ahi, va al scope global.

Los scope solo se crean con funciones. Pero.. ¿qué pasa con otros bloques de código?

Ejemplo en código:

```JavaSCript
for (var index = 0; index < 10; index++) { }
console.log(index);
if (true) {
    var temp = "hola";
}
console.log(temp);

```

En consola veo:

```
10
hola
```

index retorna 10 y temp puede ser accedida con el contexto global sin problema, esto sucede porque los loops no crean nuevos scopes, se declaran dentro del contexto lexico que ya existen, o sea como el if no crea un nuevo scope va a ser de scope global.

Es una de las particularidades de JS con el resto d elos lenguajes

---

## Pila de ejecución

Pensa como una pila de libros o platos, que se va acomodando uno arriba de otro.

En programación siguen el principio **FILO** First In - Last Out, el primero en entrar es el último en salir.

El motor de JavaScript tiene una pila para poder controlar la ejecución de la aplicación, en donde las funciones se van colocando unas encima de las otras, sobre el contexto global

```
funcion3
funcion2
funcion1
contexto global
```

Al ejecutarse la función se van eliminando, hasta volver a tener la pila vacía.

Un ejemplo en cçodigo:

```JavaScript
function prueba3() {
    return "Hola JavaScript"
}

function prueba4() {
    console.log(prueba3());
}

prueba4();
```

Así sería la pila de ejecución
```
                                      prueba3()
                   prueba4()          prueba4()         prueba4()
contextoGlobal ->  contextoGlobal ->  contextoGlobal -> contextoGlobal -> contextoGlobal
```

Otro ejemplo en código:

```JavaScript
function crearNuevoContexto(iteraciones) {
    if (iteraciones == 0) {  // cuando la iteracion=0 se termina
        return;
    }
    crearNuevoContexto(--iteraciones);  // disminuye en 1 por cada iteracion
}
crearNuevoContexto(3);
```

En la pila:

```
crarNuevoContexto(1)
crarNuevoContexto(2)     crarNuevoContexto(2)     
crarNuevoContexto(3)     crarNuevoContexto(3)     crarNuevoContexto(3)  
contextoGLobal        -> contextoGLobal        -> contextoGLobal        ->  contextoGLobal
```

---

## Bucle de eventos

Además de la **pila de ejecución** en JavaScript están las **colas de mensajes** las cuales siguen el principio **FIFO** First In - First Out, el primero en entrar es el primero en salir.


En ejemplo de código:

```JavaScript
document.getElementById('mi-boton').addEventListener('click', clickHandler);

function clickHandler() {
    console.log('boton presionado');
}
console.log('primer log');
console.log('segundo log');
```

En el momento en que se haga el click en el boton esa funcion entrará a la pila de ejecución

Otro ejemplo en código:

```JavaScript
console.log('primer log');

setTimeout(function() {
    console.log('segundo log');
}, 0);
console.log('tercer log';)
```

Primero de llama a *primer log*, se ejecuta y se va.

Tenemos el setTimeout, termina y el *segundo log* se ubica en la cola.

Mientras se llama al *tercer log*, cuando termina se va.

La pila de ejecución queda vacía.

Se llama al *segundo log* de la cola de mensaje, se ejecuta y se elimina.

Esto es el **bucle de eventos**, aca el motor de JavaScript va viendo constantemente la cola de mensajes para ver que funciones están pendientes de ejecutar, en el momento en que la pila de ejecución está vacía, coloca la primer función de la cola de mensajes, la ejecuta y la elimina . **callback**

**Operaciones asíncronas** (no bloqueantes) son las que se colocan en la cola de mensaje, como:

- setTimeont()

- setInterval()

- Promeses

- Eventos de interacción de usuario como click o scroll

- funciones asíncronas con Async y Await


---

## Funciones closure

```JavaSCript
var e = 1;
function cuartaFuncion() {
    var f = 2;
    console.log(`e =  ${e}`);
    console.log(`f =  ${f}`);
}
cuartaFuncion();
```

En consola veo:
```
e = 1
f = 2
```

Si necesito acceder al valor de f luego de que la primer funcion termina, entonces:

```JavaScript
var g= 1;
function quintaFuncion() {
    var h = 2;
    return function() {
        console.log(`g =  ${g}`);
        console.log(`h =  ${h}`);
    }
}
var temp2 = quintaFuncion();
temp2();
```

Aca voy a tener una función anónima y al invocar **temp2()** es que voy a estar ejecutando la función.

La función anonima tiene acceso a la variable, por más que la primer función termino de ejecutarse, proque al hacer el return el lexico se guarda en la función anónima.

Otro ejemplo:

```JavaSCript
function crearSaludo(saludo, nombre) {
    let saludoTemp = saludo;
    return function(nombre) {
       console.log(`${saludoTemp} ${nombre}`); 
    }
}
let saludoGuardado = crearSaludo('hola');
saludoGuardado('Carlos');
```

-> los valores se encierran dentro del contexto lexico de las funciones

---