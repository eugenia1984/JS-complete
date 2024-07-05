// Tipo de datos PRIMITIVOS:
// información que no es un objeto y es inmutable

// BOOLEAN: true o false
// NULL: no hay un valor en absoluto
// UNDEFINED: una variable declarada pero que aun no se le asigno un valor
// NUMBER: integers, floats, etc
// STRING: cadena de caracteres
// SYMBOL: valor único que no puede ser igual a ningún otro valor
console.warn('**** Primitivos ****');

let fullName = "Anna Martin"
console.log('fullName: ', fullName)
// Reasignamos el valor a la misma variable
fullName= 'Ana Martin'
console.log('fullName: ', fullName)
console.info('typeof fullName', typeof fullName) // string
fullName = 10
console.info('typeof fullName', typeof fullName) // number -> JS es DEBILMENTE TIPADO
let esMenor = true
console.info('typeof esMenor', typeof esMenor) // boolean
let age = 20 
console.info('typeof age', typeof age) // number
let price = 3.47 // number 
console.info('typeof price', typeof price) // number
let superPower
console.info('typeof superPower:', typeof superPower) // undefined, porque no tiene asignado un valor
let soyNull = null
console.info('typeof null: ', typeof null) // object
let symbol1 = Symbol() 
console.info('typeof symbol1: ', typeof symbol1) // symbol
let symbol2 = Symbol()
console.log('symbol1 === symbol2: ', symbol1 === symbol2) // false