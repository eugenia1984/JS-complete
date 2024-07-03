const carros = ["Ford", "Mazda", "Honda", "Toyota"];
let i = 0;

while (i < carros.length) {
  if( i === 2 ) {
    break;
  }

  console.log(carros[i]);
  i++; // i = i + 1
}
// Solo se ven los primeros 2

// undefined, null se considera FALSE
// En un momento debe ser false, sino es un loop infinito
// Si la ondicion nunca es true, nunca se ejecuta


// Se ejecuta la menos una vez siempre
let j = 0;
do {
  console.log(carros[j]);
  j++;
} while(carros[j])