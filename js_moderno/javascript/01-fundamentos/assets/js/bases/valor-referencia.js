// Todos los PRIMITIVOS se pasan por VALOR
let a = 10;
let b = a;
a = 30;
console.log(`a: ${a}, b: ${b}`);

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
let tony = cambiarNombre(peter);
console.log({ peter, tony });

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