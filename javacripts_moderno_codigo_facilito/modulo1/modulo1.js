let nombre = 'Ëugenia'; // alcance global

function saludar () {
  let edad = 37; // alcance local
  console.log(nombre, edad);
}

console.log(nombre);
console.log(edad); // tengo error porque existe solo dentro de la funcion


saludar();