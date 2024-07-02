// Alert -> es bloqueante
alert('Hola mundo')

// Prompt
let nombre = prompt('¿Cuál es tu nombre?')
// Si hace click en Cancelar va a tener calor de : "null"
console.info('nombre: ', nombre)

// Confirm
const seleccion = confirm('¿Está seguro de borrar esto?')
console.info('seleccion: ', seleccion)
// Si hace click en Cancel, va a tener valor booolean: false
// Si hace click en Accept, va a tener valor boolean: true