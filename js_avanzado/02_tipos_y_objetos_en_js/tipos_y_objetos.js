/**** Tipos de datos primitivos *****/
// Boolean
const valorBooleano = true;
// Number
const valorNumerico = 10;
// String
const valorTexto = "Hola Mundo";
// indica que no tiene valor
const valorNulo = null;
// inidca que la variable es declarada pero aun no tiene un valor asignado
const valorNoDefinido = undefined;
// un valor que no es igual a ningún otro valor
const simbolo = Symbol();

/***** Objetos ***/
//Array
const elementos = new Array();
// el object Date
const fecha = new Date();
// un Object
const obj = {
    propiedad: 12,
    sumar() {
        return this.propiedad +1;
    }
}

console.log('Valor de la función sumar:', obj.sumar());

valorNumerico.temp = 'abc';  // da error, no se le pueden agregar propiedades a un primitivo

console.log('Valor de la propiedad temp:', valorNumerico.temp);

//Objetos son comparados por referencia
console.log('Pueden dos objetos ser exactamente iguales? ', {} === {});

//Objetos son comparados por valor
console.log('Pueden dos primitivas ser exactamente iguales? ', 10 === 10);

// se puede acceder a la propiedad .length() en una cadena de texto, porque en el fondo hay un objeto, por ejemplo: const valorTexto2 = new String('abc');
const cadena = 'Una cadena de texto';
console.log('El largo de la cadena es: ', cadena.length);

//lo mismo para con los boolean y los number
const valorBooleano2 = new Boolean(true);
const valorNumerico2 = new Number(10);
