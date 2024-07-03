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