// Defino la funcion, por buena practica arriba defino la funcion y debajo la invoco
console.warn('**** Funciones ****');

function saludar() {
  console.log('Hola mundo')
}

// var saludar = 123 
// de este modo dejaria de ser una función y pasa a ser una variable

// La invoco (ejecuto)
saludar()

/******** Función anónima *********/
const saludar2 = function(nombre) {
  console.log(`Hola ${nombre}`)
}
// Al asignarlo a una constante, no hay forma de cambiarla
// Esta además recibe parametro nombre, si al invocarla no le paso un string 
// como argumento queda "Hola undefined"
saludar2('Eugenia')

/****** Arrow function / Labda function *******/
const saludarFlecha = nombre => console.log(`Hola ${nombre}`)
// como se mando un solo argumento se omiten los ()
// como es un return explicito saco los {} y el return

/***** Retorno de la función *****/
// Hasta el momento todos son console.log, asi que el return es void, 
function sumar(a, b) {
  return a + b
}
// Pasada a funcion flecha
const sumar2 = (a,b) => a+b
console.log(sumar(1,2)) // 3
console.log(sumar2(1,2)) // 3

const getAleatorio = () => Math.random()
console.log('getAleatorio() ',getAleatorio())