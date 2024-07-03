/******************************
 *********   Arrays  **********
 *****************************/

// un conjunto de datos, pueden ser del mismo tipo de dato o no
const arr = new Array(10) // un array que tendra 10 elementos
const arr2 = []

const videoGames = ['Mario 3', 'Megaman']
console.log({videoGames})
// El primer indice es el 0
console.log('El primer video juego: ',videoGames[0])

let arrayOfThings = [
  true,
  123,
  'Maria',
  1+2,
  function() {},
  () => {},
  {a: 1},
  ['X', 'Megaman', 'Zero', 'Dr. Light']
]
console.log({arrayOfThings})
console.log(arrayOfThings[7][3])