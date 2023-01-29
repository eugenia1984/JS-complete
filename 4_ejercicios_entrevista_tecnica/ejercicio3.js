/*
Consigna:
Dada una palabra buscarla en una frase, y devolver cuantas veces aparece en ella.
- La frase y la palabra deben ser parametros de una funcion
Ejemplo
isMatching("hola soy una palabra en una frase, PALABRA", "palabra") // devuelve 2
isMatching("Soy la frase", "Victor") 
*/

// funcion con 2 params: frase y busqueda
const isMatching = (frase, busqueda) => {
  // Pasar el string a minuscula y limpiarlo
  let textoLimpio = frase.toLowerCase().replace(/[¿!.,-;]/gi, "");

  // comprobar si la busqueda esta incluida en la frase
  let resultado = 0;
  if (textoLimpio.includes(busqueda)) {
    // crear un array de palabras de la frase
    let palabras = textoLimpio.split(" ");
    // mapear esas palabras y hacer un contador de cada una
    let mapa = {};

    for (let palabra of palabras) {
      if (mapa[palabra]) {
        mapa[palabra]++;
      } else {
        mapa[palabra] = 1;
      }
    }

    console.log("palabras: ", palabras);
    console.log("mapa: ", mapa);
  } else {
    resultado = 0;
  }

  // devolver el contador de la busqueda
  return resultado;
};

console.log(
  "Numero de coincidencias en la frase: Hola, que tal, soy Eugenia, con la palabra : Eugenia",
  isMatching("Hola, que tal, soy Eugenia", "Eugenia")
);
