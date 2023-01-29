/*
Consigna:
Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, sin usar metodos propios dle lenguaje, solo estructuras de control
*/

// funcion con parametro texto
const invertir = (texto) => {
  // crear una variable para guardar la cadena invertid
  let invertido = "";
  // bucle que recorre el string y guarde las caracteser en la variable
  for (let letra of texto) {
    invertido = letra + invertido;
  }
  return invertido;
};

const invertir2 = (texto) => {
  return texto.split("").reverse().join("");
};

console.log("Hola -> ", invertir("Hola"));
