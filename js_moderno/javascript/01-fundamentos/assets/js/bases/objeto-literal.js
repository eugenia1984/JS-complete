console.warn('**** Objeto literal ****');

let personaje = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  estaVivo: true,
  edad: 40,
  coordenadas: {
    lat: 34.034,
    long: -118.70
  },
  trajes: ['Mark I', 'Mark V'],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malibu, California'
  },
  "ultima-pelicula": 'Infinity War'
}

console.log('personaje: ', {personaje})
console.log('nombre del personaje: ', personaje.nombre)
console.log('esaVivo: ', personaje['estaVivo'])
console.log('Coordenada - Latitud: ', personaje.coordenadas.lat)
console.log('Cantidad de trajes: ', personaje.trajes.length)
console.log('Última película: ', personaje["ultima-pelicula"]) // aca no se puede usar dot notation

delete personaje.edad // con delete le borro la propiedad

const entriesPares = Object.entries(personaje) // para tener en array cada par propiedad - valor
console.log('entriesPares: ', entriesPares) 

personaje.casado = true // asi agrego una propiedad - valor

// asi no se puede modificar los datos, pero si se va a poder modificar por ejemplo el valor de latitud y longitud, porque son objetos dentro
// sino tengo que hacer el freeze tambien a xoordenadas y ubicacion
Object.freeze(personaje)


const propiedades = Object.getOwnPropertyNames(personaje)
console.log('propiedades de personaje: ', propiedades)

const valores = Object.values(personaje)
console.log('valores de personaje: ', valores)