/*
const miArray = ["Mochila de Alexis", "Cartera de Maria", "Bolsa de Juan"];
console.log(miArray);
*/
/*
Por consola veo:
Array(3)
0: "Mochila de Alexis"
1: "Cartera de Maria"
2: "Bolsa de Juan"
length: 3
[[Prototype]]: Array(0)
at: ƒ at()
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
length: 0
map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: ƒ splice()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
unshift: ƒ unshift()
values: ƒ values()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
[[Prototype]]: Object
*/
/*
//Si quiero acceder al primer elemento:
console.log(miArray[0]); //Mochila de Alexis
//para saber la longitud
console.log(miArray.length);  //3
//para modificar uno de los elementos
miArray[0]= "Bolso de Alexis";
console.log(miArray);
//acceder al último elemento
console.log(miArray[miArray.length-1]);
//como accedo a un elemento sin saber el indice -> indexOf()
console.log(myArray.indexOf("Bolso de Alexis"));
*/

/*********** EJERCICIO  *************/
//1-creo mi array de invitados
const invitados = [
  "Lucas",
  "Matias",
  "Jose",
  "Pedro",
  "Martina",
  "Marcelo",
  "Esteban",
  "Marcela",
  "Martin",
];

//2-informo el numero de invitados calculando .length de mi array
console.log(`La cantidad de invitados es de: ${invitados.length}`);
//3- para imprimir el nombre del último
console.log(`El último invitado es: ${invitados[invitados.length-1]}`);
//4-agregar a Pedro al final
invitados.push("Pedro");
//Hago un console.log para ver que se agregó pedro la final
console.log(invitados);
//5-Marcela no puede asistir, nueva lista que confirma los invitados que existen
//Tengo que sacar a marcela, utilizo un filter
const invitadosConfirmados = invitados.filter( (name) => name !== "Marcela");
console.log(invitadosConfirmados);
//Por cada invitado debo generar un número de orden, utilizo el método .map()
const invitadosConNumero = invitadosConfirmados.map( (firstName, index) => ` ${firstName}. Orden: ${index+1}`);
console.log(invitadosConNumero);
//Para calcular el total de platos, tengo que ir sumando la cantidad que comió cada uno, usando un reduce.
const totalPlatos = invitadosConfirmados.reduce( (acumulador, valorActual) => {
  if( valorActual === "Lucas" ) {
    return acumulador + 3;
  } else if( valorActual === "Esteban" || valorActual === "Jose" ) {
    return acumulador +1;
  } else {
    return acumulador + 4;
  }
}, 0);
//mando por console.log el total de los platos
console.log(`El total de los platos es de : ${totalPlatos}`);
//Para acomodar a los invitados por orden alfabético utilizo el método .sort()
const listaOrdenada = invitadosConfirmados.sort();
// muestro la lista con console.log
console.log(listaOrdenada);

