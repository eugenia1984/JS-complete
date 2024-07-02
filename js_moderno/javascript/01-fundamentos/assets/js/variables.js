alert("Hola desde variables.js!");

// VARIABLE:
// Es un contenedor de información que apunta a un lugar en memoria.
// Dicha información puede cambiar en el futuro.

let a = 10; // inicializo la variable con LET, y le asigno el valor de 10

// es mala práctica, NO usar var
// var se coloca en el objeto global window
// Hay hoisting, se puede tener una variable antes de su declaracion
// o inicializacion, y no da error
var b = 10;

const c = 10; // es una CONSTANTE, no cambia de valor
b = 20;
console.log(`a: ${a}`);
console.log("b: ", b);
console.log("c: ", c);

// Tipo de dato de una variable
let fruta = "manzana"; // string

// Los nombres de las variables van en camelCase
