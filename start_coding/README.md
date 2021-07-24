# JavaScript

## Curso de Start Coding : JavaScript

Es un **lenguaje de programación** de **alto nivel**, **multiparadigmático**, **funcional**, de **tipado dinámico** y **prototípico**. <br>

*lenguaje de programación* : lenguaje formal que nos permite dar instrucciones a la computadoa para que se haga algo. <br>

*alto nivel*: similar al lenguaje atural. Deben ser interpretados por otras aplicaciones que los traduce a un lenguaje de bajo nivel (0 y 1).<br>
El motor V8 está en Crhome que lo utiliza para interpretar JS y traducirlo a un lenguaje de bajo nivel. <br>

*multiparadigmático*: existen distintos paradigmas o estilos a seguir el momento de programar. <br>
Es un lenguaje flexible, tenemos diversos enfoques. <br>

*tipado dinámico* : JS determina automáticamente el tipo de dato asignado a una variable, no es necesario declararlo expresamente. También se puede ambiar el tipo de dato asignado al reasignar una variable. <br>

*prototipado*: para crear estructuras de datos se basa en la creación de prototipos. <br>

*OOP vs Funcional*: para algunos JS es n lenguaje orientado a objetos ya que te permite definir clases e instanciar elementos a partir de dichas clases.<br>
La realidad es que JS utiliza funciones constructoras para definir objetos y sus características. <br>

*Imperativo vs Declarativo*: <br>
**imperativo** : se enfoca solo en establecer un conjunto de pasos necesarios para cumplir la tarea, haciendo hincapié en el "como".<br>
**declarativo**: prioriza el "que" debe pasar por sobre el "como".<br>

## Estructura de una aplicación web

*HTML* es la estructura, *CSS* es la presentación, los estilos, y *JAVASCRIPT* es el comportamiento e interacción. <br>

## Usos de JavaScript

   * Web Applications: JS plano (Vanilla JS) y JS Frameworks (Angular, React, VUE)
   * Server: Nodejs
   * Mobile: React Native, Ionic
   * Desktop APP: electron 

## ¿ Qué es ECMA?

Es la organización europea para la estandarización de los sistemas de información y comunicación. <br>
Lleva a cabo la publicación de la especificación de JavaScript, conocida como ECMAScript. <br>
De este modo se tiene un standard para que sea compatible en todos los navegadores webs.<br>
En el 2015 sale **ES6**, la mayor actualización de todos los tiempos, con mejoras de sintaxis, nuevos objetos y métodos para manejar datos y realizar tareas específicas. <br>
A partir de ES6 todos los años publica actaulizaciones. <br>

## ¿ Cómo incorporar JS en el Front End ?

A través de un archivo *HTML*, hay dos modos:

 * head: a través de un tag de script, lo que me va a interrumpir que mi pagina se renderice bien, primero se ejecuta JS y luego renderiza, no es lo más recomendable: <br>
```
<head>
 <script>
 //aca va el codigo JS
 </script>
</head>
```
Hay un nuevo modo, si en el head agregamos el atributo **defer**, de este modo si no bloqueo que se renderice.<br>

 * body: al final del body, con la etiqueta *script*.

Lo mejor es tener el código **JS** separado en otro archivo, y esté si lo linkeamos al HTML con la etiqueta **script**, siempre al final del body o en el head con *defer* para no bloquear al renderización de la web. <br>
```
<script src="mi_archivo.js"> </script>
```

## IDE: Visual Studio Code

Otras alternativas pueden ser: **Atom** y **Brackets** . <br>

Extensiones: Prettier (ctrl+S para formatear), ESLint (ve que tengamos buenas practicas, sino nos da warnings), Bracket Pair Colorizer(ayuda en los bloques anidados), TODO Highlight. <br>


---

# Modulo 1: Valores

Son los **datos** que nos sirven de base.<br>
Son **valores literales** cuando está en el mismo codigo o puede venir de una base de datos o puden ser ingresados por el usuario. <br>

Hay dos tipos:

   * **PRIMITIVOS**: Number (enteros, decimales, infinity, NaN), Strings (secuencia de caracteres), Booleans (true / false), undefined (valor vacío, varaible no asignada), Null (valor vacio, no existe), Symbol (valor único que no puede modificarse), BigInt (numeros grandes).
   
   * **OBJETOS**

## Manipulación de tipos

**Valores literales**: directo en el código, no dependen del input de usuario o de datos de terceros. <br>

**Conversión de String a Number**: <br>
   * parseInt()
   * Number()
   * +

**is NaN** <br>

**Conversión a String** : <br>
   * toString()

**Mayúscula y minúscula** <br>
   * toUpperCase()
   * toLowerCase()

**Concatenacion** con + , para unir dos o más String, tener en cuenta que si tengo un String y un Number se concetena como dos String.<br>

**conversion a boolean**: <br>
   * boolean
   * !!

**conversión implícita**: en algunos casos JavaScript convierte implícitamente el tipo de datos al momento de evaluar la expresión.<br>
Si tenemos un signo **+** y valores de tipo Number y String, JavaScript convertirá a **String**.<br>
En los otros casos, convertirá a Number.<br>


## Truthy & Falsy

**Truthy** se convierte a true <br>
¿Cuáles son ? string, Number !== 0 , [] -array vacío-, {} -objeto vacío- <br>

**Falsy** se convierte a false. <br>
¿Cuáles son ? 0, null, undefined, NaN, "", '', false <br>

Me van a servir para validar, por ejemplo si ingreso un nombre: <br>

Voy a validar que no sea null (es decir que no hizo click en cancelar) y voy a validar que el largo del string sea al menos 1 o más  ( es decir que no está vacío y no completó nada). <br>

```
const firstName = prompt("Ingresa tu nombre : ");

if( !firstName !== null && firstName.lenght > 0) {
   console.log(firstName);
}
```

Como ambas validaciones en definitiva son falsy (false) entonces puedo hacer un chequeo if/else general entre todos los truthy y los falsy.<br>

Y hago +firstName para que si me ingresa un 0, no me lo toma como un String, sino que me lo convierte al numero 0 que es un falsy. Esta validación sería para corroborar si se ingresa un NUMERO.<br>

```
const firstName = prompt("Ingresa tu nombre : ");

if( +firstName) {
   console.log(`Esto es truthy, ${firstName}`);
} else {
   console.log(`Esto es falsy, ${+firstName}`);
}
```

## Operadores

### Aritméticos

Nos sirven para realizar operaciones matemáticas. <br>

*Unarios*: con un solo valor, el operador puede realizar la operación, por ejemplo: - , + , typeof<br>
*Binario*: debe tener la menos dso valores para poder realizar la operación, por ejejmplo: + , - , / , * , % <br>

### Lógicos

Dan un resultado booleano. <br>
*Binarios*: && (AND) , || (OR) , ! (NOT), == (solo compara el valor, no el tipo de dato), === (estricto igual, compara el valor y el tipo de dato), != (distinto) , !== (distinto con comparación estricto valor y tipo de dato) , > (mayor) , < (menor) , >= (mayor o igual) , <= (menor o igual)<br>
*Ternarios*: ? , reemplazamos el if / else con uan expresión.<br>

### Precedencia de operadores

## Variables

Una *caja* donde guardamos un *valor* (un dato). <br>

¿ Cómo se declara ? <br>

*palabra_reservada* *nombre_de_la_variable* = *valor*; <br>

*palabra reservada* : **var** (alcance global, tiene el proble del hoisting cuando está dentro de una función, no se usa más) , **let** (alcance local al bloque donde es creada, permite reasignar el valor de la variable) , **const** (constante, debe ser declarada y tener el valor asignad todo en el mismo momento, no puedo luego reasignarle valor). <br> 
Lo ideal es usar const salvo que necesitemos reasignarle valor entonces usamos let. <br>

### Declaración de variables : nombres

-Comienzan con: letra, $ ó _ <br>
-No pueden comenzar por números <br>
-No puede tener signos de puntuación ni espacios, solo puedo usar $ y _ <br>
-No puedo usar las palabras reservadas<br>
-Se nombran con camelCase <br>
-Lo ideal es poder ya nombrar las variables en inglés <br>
-Poner nombres representativos del valor que van a guardar <br>

## Template literals

-Se utilizan las *back ticks* / *comillas francesas* / *comillas invertidas*. <br>
-Y todo lo que es variable va entre { y con el $ delante: ${ aca_mi_variable} <br>
-Respeta los espacios y los saltos de línea<br>

---

# Modulo 2 : Control de flujos

## if/ else

Dada una condición, si es true se executa una condición, sino se ejecuta otra condición. <br>

```
if( condicion ) {
   //bloque a ejecutar si condicion es true
} else {
   //bloque a ejecutar si condicion es false
}
```
## switch

Va a ir evaluando un caso y sus posibles valores.<br>

condicion 1 -> true -> accion 1 <br>
condicion 2 -> true -> accion 2 <br>
...<br>
default --------------> accion default<br>

Si mi caso no cumple con ningún valor va a ir al default. <br>

En cda case voy a tener un break, para que al encontrar el caso que coincide con el valor finalice el switch y corta la ejecución del código (asi ahorro memoria y no sigo con los demás casos). <br>

Si voy a comparar String normalizarla con .toUpperCase() o con .toLowerCase(). <br>

```
switch(caso_a_evaluar) {
   case valor:
      //accion
      break;
   case valor:
      //accion
      break;
   default:
      //accion
      break;      
}
```
---

# Métodos de loop (con iteraciones)

## for

```
for ( let i = 0; condicion , incremento/decremento){
   //bloque de codigo a ejecutar
}
```

*condicion* para que en un momento la condición pase de true a false  corte; de lo contrario tengo un loop infinito. <br>

*incremento / decremento* va a hacer que mi contador / index (i) varíe en cada iteración, lo que me va a permitir en algún momento que no cumpla la condición, si no se modificaría, siempre cumpliría la condición y de nuevo tendría un loop infinito. <br>
i++ es lo mismo que i = i + 1<br>
i-- es lo mismo que i = i -1 <br>

## while y do/ while

**while** <br>
CONDICION-> si es TRUE -> ACTUALIZACION -> vuelve a evaluar nuevamnete la CONDICION (y asi itera hasta que en un momento la condicion es FALSE y llega al FIN). <br>

```
while ( condicion) {
   //accion por true
   //actualizacion
}
```

Tengo una condición, que si es true se ejecuta, se actualiza la condición y comienza un nuevo ciclo evaluandola. <br>
Cuando la condición pasa a false termina. <br>
A diferencia del for el contador se actualiza dentro del bloque de ejecución (no está en la condición) y siempre debe estar, porque si no actualizo no cambia, la condición no pasa a false y es un loop infinito. <br>
Siempre primero va a evaluar la condición y luego ejecutar el código, si la condición desde un principio es False, nunca se llega a ejecutar. <br>

**Do / While** <br>

ACCION -> ACTUALIZACION -> CONDICION -> si es TRUE sigue el loop / si es FALSE llega al FIN.<br>

La diferencia con el **do / while** es que siempre primero se ejecuta y luego se evalúa la condición, entonces por más que la condición sea false siempre se va a ejecutar al menos la primera vez. <br>

```
do {
   //accion por true
   //actualizacion
} while ( condicion)
```

Si se cuantas iteraciones voy a tener uso *for* sino uso *while* o *so / while*. <br>

---

# Modulo 3 : Funciones

Nos ayuda a reutilizar bloques de código.

¿ Cómo declaro la función ? <br>

```
function nombreFuncion(parametro1, parametro2) {
   console.log(parametro1 + parametro2);
}
```

¿ Cómo la ejecuto ? <br>

Debo *invicarla* ( *llamarla* ). <br>

```
nombreFuncion(argumento1, argumento2);
```

### Estructura de la función:

**function** (palabra reservada) + **nombre** (opcional) + **parámetros**  + **llaves** (las instrucciones que definen la función, encerradas por llaves). <br>

EL *nombre* suele ser un verbo, una acción que me da una idea de lo que hace la función. <br>

Los *parametros* van entre ( ) separados por comas, son nuestras varaibles dentro de la función, son los elementos que la función espera para utilizarlos dentro del bloque de código.<br>
Al momento de declarar la función se llama *parametro * y cuando se lo pasamos a la función en el momento de invocarla se llama *argumento*. <br>

Por ejemplo: <br>

```
function sayHello(name){
   console.log(`Hola ${name}`);
}

sayHello('Ana');
```

## Función declarada

```
function sayHello(name){
  return console.log(`Hola ${name}`); 
}
```

## Función expresada

Se la asignamos a una variable (constante), la función que no tiene nombre (es función anónima). Cuando la invoco voy a tener: sayHello().<br>

```
const sayHello = function (name) {
   return console.log(`Hola ${name}`); 
}
```

## Arrow Function

Cambia al palabra reservada *function* por *=>*.<br>
Y también es anónima, no tiene nombre, y es asignada a una variable. <br>

```
const sayHello = (name) => {
   return console.log(`Hola ${name}`); 
}
```

**Arrow function (return implícito)** <br>

Cuando el return tiene una sola línea en su bloque de código, no sos necesarias las { }<br>

```
const sayHello = (name) => console.log(`Hola ${name}`);
```

## return

Es lo que la función me va a devolver ( retornar) . <br>
Para JS las funciones siempre retornan algo, si no tengo *return* esa función va a ser *indefined* . <br>


```
function sumar(num1, num2) {
   return num1 + num2;
}

console.log( sumar( 2, 3 ) + 5 );   
// imprime 10, porque la funcion sumar me retorno 5 ( 2 + 3 )
```

El *return* también nos indica donde finaliza la función, ya que todo lo que siga a continuación del return no se va a ejecutar, funciona como un break, devuelve y corta, sale de la función para seguir con el próximo bloque de código. <br> 

También puedo asignar el resultado de la función a una varaible: <br>

```
//creo la funcion
function sum(num1, num2) {
   return num1 + num2;
}

//la invoco y asigno a una constante
const result = sum(2, 3);

console.log( result + 5 );   // 10
console.log( result + 20 );   // 25
```

También lo podía hacer con la función anónima guardandola en variable: <br>

```
//creo la funcion
const result = function sum(num1, num2) {
   return num1 + num2;
};

//debo invocarla
console.log( result(2,3) + 5 );   // 10
console.log( result(2,3) + 20 );   // 25
```

Lo mismo si uso arrow function, que al tener una sola línea de código a ejecutar  voy a poder obviar las { } y el return: <br>

```
//creo la funcion
const result = (num1, num2) =>  num1 + num2;

//debo invocarla
console.log( result(2,2) + 5 );   // 9
console.log( result(2,2) + 20 );   // 24
```

## Scoope

*scoope* es el alcance que tienen las variables. <br>
Existe el *scoope global* y el *scope local* el que existe dentro de una función o dentro de un loop (es más local, porque suele estar dentro del scoope de la función). <br>

Las variables también están afectadas por el scoope. <br>
Si la variable es creada en un *scoope local* solo va a existir en ese scoope, no va a tener alcance global. <br>

*let* y *const* de alcance local vs. *var* de alcance global.<br>
*var* al tener alcance global, si justo tengo dos varaibles con el miso nombre y con va voy a pisarlas. <br>

Ejemplo con código: <br>

```
let isValid = false;

function validatePermission(role) {
   let validRole = "admin";
   let isValid = true;

   if ( role === validRole ) {
      let isValid = true;
      console.log("Dentro del if", isValid);
   } else {
      let isValid = false;
      console.log("Dentro del else" , isValid);
   }

   console.log("dentro de la funcion", isValid);
}

validatePermision("any");

console.log("A nivel global", isValid);
```


## Hoisting

Una funcionalidad de JavaScript que 'levanta' (hiza) determinadas funciones y variables, como si estuviera al principio del código. <br>

Cuando comienza a ejecutar el código hay ciertas cosas que las coloca por arriba. <br>

Ejemplo con código, donde tengo tres constantes y tres funciones: <br>

```
console.log(year);  
//undefined porque JS hace un barrido de las variables , como ve que hay una var year  la 'levanta' como undefined

console.log(color);  
// nos da un error de que no se puede llamar a una variable no inicializada

console.log(firstName);  
//da el mismo error que con la variable let

var year = 2021;
let color = "red";
const firstName = "Eugenia";


function sayHello() {
   return "Hola mundo";
}

const sayGoodBye = function () {
   return "Bye bye";
};

const sum = ( num1, num2 ) => num1 + num2;
```
Siempre que tenga *var* por más que más adelante la declare, JavaScript me hace hoisting, me la eleva arriba de todo y la toma como undefined. <br>
Cuando comience a ir ejecutando todo el código y llegue a la parte donde tengo a mi variable var year con valor 2021 le asigna el valor 2021. <br>

Si mando a consola sayGoodBye y cambio *const* por *var* voy a volver a tener undefiened (me hace hoisting). <br>

Si a la variable **sum** la guardamos en vez de en *const* en *var* tambien tengo hoisting y va a ser undefined.<br>


lo mejor es usar *const* salvo que sea una variable que cambie en ese caso usar *let*. <br>


---

# Modulo 4 : Estructura de datos


# Arrays

## ¿ Qué es?

Es una colección ordenada de datos o de valores. <br>
Cada valor tiene una posición específica, es similar a los lockers donde uno guarda las mochilas antes de entrar a un supermercado, que uno deja al mochila en el locker, y le dan un número, para cuando uno luego la pasa a buscar va a ese lugar especifico con su número de locker. <br>

Puede almacenar distintos tipos de datos: numbers, String, otro array.

## ¿  Cómo se declara ?

```
const miArray = [];

//con el método constructor, instanciando
const otroArray = new Array(); 
```

Dentro del array voy a ir teniendo elementos, y cada uno tieen su índice, se comienza con 0. Por esto es una lista ordenada, porque cada elemento tiene su índice. <br>

Por ejemplo:

```
const fruit=["banana", "apple", "orange"];
```

## ¿ Cómo accedo a sus elementos ?

Si quiero ver el primer elemento:<br>
```
fruit[0];   // banana
```

Si quiero ver el segundo elemento:<br>
```
fruit[1];  // apple
```

## ¿ Cómo modifico uno de sus alementos ? 

```
fruit[1]="coco";
fruit=["banana", "coco", "orange"];
```

## ¿ Cómo se la longitud ?

```
console.log(fruit.length);  //3
```

## ¿ Cómo accedo al último elemento de mi array ?

Como los índices empiezan en 0, siempre mis índices van a ser el número anterior inmediato a el núemro que representa mi cantidad de elementos.<br>
Si tengo dos elementos voy a tener indice: 0 , 1. <br>
Entonces lo que voy a buscar como índice de mi último elemento es la longitud de mi array menos 1. <br>

```
console.log(fruit[fruit.length -1]);  //orange
```

## ¿ Cómo accedo a un elemento de mi array sin saber en qué índice está?

```
const elemento = "banana";
```

JavaScript tiene el método **indexOf()**. <br>

```
const index = fruit.indexOf(elemento);  //0
```

En el caso de que el elemento que esté buscando **no** esté en mi array voy a tener **undefined**, porque el método **indexOf()** me está devolviendo un **-1** que va a ser *undefined* porque no voy a tener el índice -1 de mi array. <br>

Puedo combinar el indexOf para encontrar un elemento y puedo reemplazarlo  con **=**. <br>

```
fruit[fruit.indexOf("orange")] = "kiwi";
```

## ¿ Cómo agrego elementos en mi array ?

### Para agregar un elemento al final del array

**.push()** <br>
```
//[ "banana", "coco", "kiwi"]
fruit.push("apple");
//[ "banana", "coco", "kiwi", "apple"]
```

*.push()* me va a devolver la nueva longitud del array una vez que el elemento ya es agregado. <br>
```
//fruit = [ "banana", "coco", "kiwi"];
const newLength = fruit.push("apple");  //4
```

Este método me modifica el array original. <br>

### Para agregar un elemento al principio de mi array

**unshift()**<br>
```
//fruit = [ "banana", "coco", "kiwi"];
fruit.unshift("pear");
//fruit = ["pear", "banana", "coco", "kiwi"];
const newLength = fruit.unshift("strawberry"); //5
```

*.unshift()* me va a agregar el elemento al principio del array y me va a dar la longitud ya con ese elemento agregado. <br>

Este método me modifica el array original. <br>

## ¿ Cómo elimino elementos de mi array ?

### Para eliminar el último elemento de mi array

**.pop()** <br>
```
//gruit = [ "banana", "coco", "kiwi", "apple"];
fruit.pop();
//[ "banana", "coco", "kiwi"]
```

Un dato interesante es que *.pop()* me devuelve el valor que elimino, por ejemplo: <br>

```
const removedElement = fruit.pop();
console.log(removedElement);  // apple
```

Es útil si necesitamos remover un elemento y guardarlo en una variable. <br>

Este método me modifica el array original. <br>

### Para eliminar el primer elemento de mi array

**shift()** <br>
```
// fruit = [ "banana", "coco", "kiwi"];
const removedElement = fruit.shift();  //banana
//fruit = ["coco", "kiwi"];
```
Me queda el primer elemento removido alamcenado en la variable *removedElement*. <br>

Este método me modifica el array original. <br>


###  .splice()

Para remover uan serie de elementos de mi array. <br>
*splice( start:number , deleteCount: number)*. <br>
El primer número me indica desde qué posición (índice) voy a comenzar a eliminar. <br>
El segundo número me idica cuántos elementos voy a eliminar en total. <br>

```
// fruit = [ "banana", "coco", "kiwi", "pear", "strawberry"];
console.log(fruit.splice(1,2));   //["coco", "kiwi"]
console.log(fruit);   //  [ "banana",  "pear", "strawberry"];
```
En este caso, console.log(fruit.splice(1,2)), me va a devolver un array con los elementos que elimine. <br>

Este método me modifica el array original. <br>

### .slice()

Lo que hacer es **recortar** un array.<br>
*.slice(num1, num2)* donde num1 es el índice desde donde comienzo a cortar, y num2 es ídice hasta el que voy a cortar (este último índice no lo incluyo, no lo corto) <br>

```
// fruit = [ "banana", "coco", "kiwi", "pear", "strawberry"];
const newArray = fruit.slice(1,2);
console.log(newArray);  [ "banana", "kiwi", "pear", "strawberry"]
console.log(fruit);  // [ "banana", "coco", "kiwi", "pear", "strawberry"]
```

En este caso el array original No se modifica. <br>
Lo que hace slice es qeu recorta el array, lo extrae y lo guarda en una nueva variable, pero el array original no lo modifica. <br>


## ¿ Cómo puedo iterar un array?

Puedo iterar sobre un array con un **for**: <br>

```
const miArray = [
   "Alexis", 
   "Juan", 
   "Pedro", 
   "Marcela", 
   "Ana"
];


for(let i=0; i < miArray.length; i++) {
  console.log(miArray[i]);
}

/*
Se va a imprimir por consola:
Alexis
Juan
Pedro
marcela
Ana
*/
```

Puedo iterar sobre un array con un **forEach**. <br>
Mi forEach va a recibir una arrow function que se va a lalamr en cada iteración. Va a recibir como parametro cada item de mi array y como segundo parámetro va a recibir el índice (el lugar que ocupa mi elemento en el array)<br>
El segundo parámetro, index, es opcional, se puede poner o no. <br>

```
const miArray = [
   "Alexis", 
   "Juan", 
   "Pedro", 
   "Marcela", 
   "Ana"
];


miArray.forEach( (item, index) => {
   console.log(index);
   console.log(item);
});

/*
Se va a imprimir por consola:
0
Alexis
1
Juan
2
Pedro
3
4
Marcela
5
Ana
*/
```


### map

El método *map*, nos da la posibilidad de iterar, de ejecutar uan función por cada elemento del array y nos devuelve un array nuevo, que teien en cada posición lo que está en el return de la función.<br<>>

1-Creo un nuevo array. <br>
2- Aggarro el array (miArray) que tengo de los nombres y con un forEach itero por cada uno de los elementos.<br>
3- Croe un String en el cual voy concatenando la palbra nombre con cada nosmbre de mi array.<br>
4- Ese nuevo String le hago un .push() en el Array newString.<br>
5- Al finalizar el forEach newString ya los tiene sumados.<br>

```
const newArray =  [];

miArray.forEach( (name) => {
   const newString = `Nombre: ${name}`;
   newArray.push(newString);
});

console.log(newArray);
```

Si ahora aplico mi método **map** , que al igual que forEach itera por ada uno de los elemeton, pero a diferencia del forEach map retorna un nuevo array ya modificado.<br>
Hago lo msimo de recién pero con **map**.```


```
const newArrayWithMap = miArray.map( (name) =>  return `Nombre: $ {name}`;);

console.log(newArrayWithMap)
```

Cuando se hace la iteración cada elemento va a tener lo que retorna la función. <br>
Si la función no retorna nada, cada elemento va a ser *undefined*. <br>

### filter


Nos permite **filtrar** .<br>
Nos devuelve un nuevo array.<br>


Por ejemplo tengo este array (namesArray) y quiero filtrar. <br>
*filter* va a recibir un arrow function que va a tener una cierta condición, si a condición es true va al nuevo array, si la condición no se cumple el elemento queda fuera del array. Al final me retorna un array con el resultado (con todos los elementos que me dieron true).<br>
Si no encuentra el elemento me devuelve un *array vacío*. <br>

```
const namesArray = [
   "Alexis", 
   "Juan", 
   "Pedro", 
   "Marcela", 
   "Ana",
   "Alexis",
   "Ana",
];

const filterArray = namesArray.filter( (name) => name ==== "Alexis" );

const filterArray2 = namesArray.filter( (name) => name ==== "Maria" );

console.log(filterArray);  // (2) ["Alexis", "Alexis"]
console.log(filterArray2);  //  [] poque no tengo Maria como elemento en mi array
```

### find

Va a llamar a una función por cada elemento. Dicha función va a ver si el elemento es igual a la condición que le indique. Y me devuelve el primer valor qeu cumple la condición, si tengo más de un valor que cumple la condición me devuelve solo el primero; encuentra el primero y corta.<br>

En cambio con filter me va a devolver todos los que encentra, si tengo más de uno me muestra todos. <br>

Y si a find le pasamos un elemento que no está, devuelve *undefined*. <br>

```
const existingElement = nameArray.find( (name) => name === "Alexis");

const existingElement2 = nameArray.find( (name) => name === "Maria");

console.log(existingElement);  //Alexis
console.log(existingElement2);  //undefined
```

Es un buen ejemplo para encontrar un nombre en una lista: <br>

```
const existingElement = nameArray.find( (name) => name.toLowerCase() === "Alexis");

console.log(existingElement);  //Alexis

if (existingElement) {
  console.log("El nombre está en la lista");
} else {
  console.log("El nombre no está en la lista");
}
```

Si el nombre no está en la lista, devuelve *undefined* que es un valor *falsy* entonces entra en el else. <br>

---

# Modulo 5 : Asincronía

---

# Modulo 6 : API

---

# Modulo 7 : DOM

---

# Modulo 8 : Extras

---
