console.warn('**** Por valor / Por referencia ****');
// Todos los PRIMITIVOS se pasan por VALOR
let a1 = 10;
let b1 = a;
a1 = 30;
console.log(`a: ${a1}, b: ${b1}`);

// Los no primitivos, se pasan por REFERENCIA
let juan = { nombre: "Juan" };
let ana = juan; // Al asignar apuntamos la mismo lugar en memoria
ana.nombre = "Ana";
console.log(`juan: ${juan.nombre}, ana: ${ana.nombre}`); // ambos son Ana

const cambiarNombre = (persona) => {
  persona.nombre = "Tony";
  return persona;
};

let peter = { nombre: "Peter" };
let tony2 = cambiarNombre(peter);
console.log({ peter, tony2 });

// SPRED OPERATOR, separa los elementos, rompe la referencia en JS
let ana2 = { ...juan };
console.log(ana2);

const cambiarNombres = ({ ...persona }) => {
  persona.nombre = "Tony";
  return persona;
};

// Arrays
const frutas = ["Manzana", "Pera", "Piña"];
const otrasFrutas = frutas;
otrasFrutas.push("Mango"); // Asi el Mango se va a agregar a frutas y a otrasFrutas


// Rompo la relacion con spread [...array]
const otrasFrutas2 = [...frutas]; // rompo la relacion
otrasFrutas2.push("Frutilla"); // no modifico frutas

// Rompo la relacion con slice()
const otrasFrutas3 = frutas.slice() // rompo la relacion
otrasFrutas3.push('Kiwi') // No modifico frutas

// Con el spread es más rápido que con el slice