const fer = {
  nombre: 'Fernando',
  edad: 30,
  imprimir() {
    console.log(`Nombre : ${this.nombre} - edad: ${edad}`)
  }
}

const pedro = {
  nombre: 'Pedro',
  edad: 32
}

const melissa = {
  nombre: 'Melissa',
  edad: 35,
  imprimir() {
    console.log(`Nombre : ${this.nombre} - edad: ${edad}`)
  }
}

fer.imprimir();
pedro.imprimir();

// Era la alternativa, para crear objetos
// Pero no puedo establecer propiedades privadas
function Persona(nombre, edad = 1) {
  this.nombre = nombre;
  this.edad = edad;

  this.imprimir = function() {
    console.log(`Nombre : ${this.nombre} - edad: ${edad}`)
  }
}

// Instancio con new
const maria = new Persona('Maria', 18);
const mariana = new Persona('Mariana', 28);
console.log(maria);
maria.imprimir();
console.log(mariana);
mariana.imprimir();