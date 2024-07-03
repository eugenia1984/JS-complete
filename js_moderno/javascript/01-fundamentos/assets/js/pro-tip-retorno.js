/********************************
 ****** PRO TIP - RETORNO *******
 *******************************/
function crearPersona(nombre, apellido) {
  return {
    nombre: nombre,
    apellido: apellido,
  };
}

const persona = crearPersona("Maria Eugenia", "Costa");

function crearPersona2(nombre, apellido) {
  return {
    nombre,
    apellido,
  };
}

function crearPersona3(nombre, apellido) {
  return { nombre, apellido };
}

// Con los () le digo a JS que quiero retornar un objeto, no el cuerpo de la función
const crearPersona4 = (nombre, apellido) => ({ nombre, apellido });

function imprimeArgumentos() {
  console.log(arguments);
}

imprimeArgumentos(10, true, false, "Hola");
// No lo podria pasar asi nomas a arrow function, debo usar el rest.
// luego dle parametro rest no puede venir ningun otro argumento
const imprimeArgumentos2 = (...args) => {
  return args;
};

const argumentos = imprimeArgumentos2(10, true, false, "Hola");

// De este modo asigno a una constante cada valor
const [edad, esCasado, estaVivo, saludo] = imprimeArgumentos2(
  10,
  true,
  false,
  "Hola"
);

// desestructuro solo el argumento apellido y ademas lo renombro
const { apellido: nuevoApellido } = crearPersona("Maria", "Costa");

const tony = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  estaVivo: true,
  edad: 40,
  trajes: ["Mark I", "Mark V"],
};

// Desestructuración de argumentos
// Y ademas si no me viene definda edad ya le asigno un valor de 15
const imprimePropiedades = ({ nombre, codeName, estaVivo, edad = 15, trajes }) => {
  console.log({nombre});
  console.log({codeName});
  console.log({estaVivo});
  console.log({edad});
  console.log({trajes});
};

imprimePropiedades(tony);
