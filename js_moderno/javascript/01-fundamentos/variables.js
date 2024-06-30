alert('Hola desde variables.js!')

// VARIABLE: 
// Es un contenedor de información que apunta a un lugar en memoria.
// Dicha información puede cambiar en el futuro.

let a = 10; // inicializo la variable con LET, y le asigno el valor de 10
var b = 10; // es mala práctica, NO usar var
const c = 10; // es una CONSTANTE, no cambia de valor
b = 20;
console.log(`a: ${a}`)
console.log('b: ', b)
console.log('c: ', c)