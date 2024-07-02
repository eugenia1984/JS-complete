/******************************************
 **** Propiedades y metodos de arrays *****
 *****************************************/
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono']

// lenght() el largo del array, la cantidad de elementos del array
console.info('Largo: ', juegos.length) // 4
let ultimoElemento = juegos[juegos.length - 1]

// forEach() recorre cada elemento del array, y ejecuta una instruccion (callback fn)
juegos.forEach((el, indice, arr) => {
  console.log({el, indice, arr})
})

// push(), añade el elemento al array al final y devuelvo el nuevo legth del array
juegos.push('F-Zero')

// unshift, añade el elemento al inicio del array y deveulve el nuevo lenght del array 
juegos.unshift('Fire Emblem')

// pop, borra el ultimo elemento del array y lo regresa
let juegoBorradoAlFinal = juegos.pop()