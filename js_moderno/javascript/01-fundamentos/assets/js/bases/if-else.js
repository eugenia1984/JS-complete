console.warn('**** IF - ELSE ****')
let numero = 5;

// IF ( Si )
if (numero >= 10) {
  console.log("Numero es mayor o igual a 10");
}

// IF - ELSE ( Si - SiNo )
if (numero >= 10) {
  console.log("Numero es mayor o igual a 10");
} else {
  console.log("Número es menor a 10");
}

const hoy = new Date();
let dia = hoy.getDay();
console.log("Dia: ", dia);

if (dia === 0) {
  console.log("Es Domingo");
} else {
  console.log("No es Domingo");
}

dia = 3;

// para obtener el dia, con un objeto, sin usar switch o if-else
const diasLetras = {
  0: "domingo",
  1: "lunes",
  2: "martes",
  3: "miercoles",
  4: "jueves",
  5: "viernes",
  6: "sabado",
};

console.log(diasLetras[dia] || "El día no es válido");

// tambien podria ejecutar una funcion dentro

const diasLetras2 = {
  0: () => "domingo - 0",
  1: () => "lunes - 1",
  2: () => "martes - 2",
  3: () => "miercoles - 3",
  4: () => "jueves - 4",
  5: () => "viernes - 5",
  6: () => "sabado - 6",
};

console.log(diasLetras2[dia]() || "El día no es válido");

// Con un array
const diasLetras3 = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
];

console.log(diasLetras3[dia])