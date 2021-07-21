//TIPO DE DATOS

//Number
console.log(typeof 3);
console.log(3.5);
console.log(typeof Infinity);
console.log(typeof NaN);

//String
console.info('Hola Mundo');
console.info(typeof "3");

//Boolean
console.info(true);
console.info(typeof false);

//Null Undefined
console.log(undefined);
console.log(null);
//Bug de JS nos dice que null es un objeto, pero en realdiad es NULL
console.log(typeof null);

let miVariable;
console.log(miVariable); //me da undefined porque no le asigne un valor
miVariable= null;
console.log(miVariable);//null
//aca veo un ejemplo de tipado dinamico, ya que pasa de undefined a null, JS asigna solo los tipo de valores de mi variable

//Expresion
let variable = 3;
console.log(variable);
console.log(2 + 3);
function saludar() {
  return "Hola";
}
console.log(saludar());

//Declaración
let variables;
if(variables === true) {
  console.log("verdadera");
} else {
  console.log("falso");
}
/************************************************************/
//Metodos del navegador

/*
alert('Hello World!');

let nombre= prompt("Ingrsa tu nombre : ");
console.log(nombre);

confirm("Esta seguro ?");
*/

/************************************************************/
//Manipulacion de tipos

//isNaN
let checkIsNumber = isNaN("123");
console.log(checkIsNumber); //False porque no es un numero 

//Conversion de String a Number
//parseInt()
let numberFromString = parseInt("123");
console.log(numberFromString );
//Number()
let numberFromStringNumber = Number("456");
console.log(numberFromStringNumber);
//+
let numberFromStringMas = +"789";
console.log(numberFromStringMas);
//toString()
let numeroTree = 3;
console.log(numeroTree.toString());

//Mayuscula y minuscula
//toUpperCase
let saludando = "Hola";
console.log(saludando.toLowerCase());
//toLowerCase
console.log(saludando.toLowerCase());

//concatenacion
let name= "Eugenia";
console.log('Hola' + ' ' + name);

//conversión a boolean
let string ="2";
let number = 0;
console.log(Boolean(string)); //true
console.log(Boolean(number)); //false
console.log(!!string); //true
console.log(!!number); //false

//conversión implícita
//con + concatena todo, si tengo number y string, el number lo convierte a string y concatena
console.log( number + string); //20
console.log( string + number); //02

let number2 = 6;
let string2 = '2';
console.log(number2 - string2); //'4'
console.log(string2 - number2);  //'-4'

console.log(number2 * string2);  //'12'
console.log(string2 * number2);  //'12'

console.log(number2 / string2);  //'3'
console.log(string2 / number2);  //'0.33'

console.log(number2 % string2);  //'0'
console.log(string2 % number2);  //'2'

/************************************************************/

//OPERADORES ARITMETICOS

//unarios : - + typeof
console.log(typeof "hola mundo"); //string
console.log(+"123");  //convierte a Number
console.log(-"123");   //-123
console.log(+"tres"); //NaN

//binarios: + - / * %
console.log(5 + 8);
console.log(10 - 2);
console.log( 6 / 3);
console.log( 1 * 20);
console.log(6 % 3);

//OPERADORES LOGICOS

//Binarios >, >=, <, <= , == , ==== , != , !==

//mayor y menor
console.log(2 > 3);  //false
console.log(2 < 3 );  //true
console.log( 1 >= 1); //true
console.log( 2 <= 2);  //true

// == solo compara el valor, sin importar el tipo
// === es operador de comparación estricta: compara el valor y el tipo
console.log(2 == '2');  //true
console.log(2 === '2');  //false

// !== siempre usar el de comparación estricta
console.log( 3 !== '3');   //true
console.log( 3 != '3');  //false porqeu convierte 3 a numero, entonces ve dos numeros que son iguales

// AND && es True si todos son true
console.log("************* AND ************");
console.log( 2 === 2 && 2 > 0);  // true && true -> true
console.log( 2 === '2' && 2 > 0 ); // false && true -> false
console.log( 2 === 2 && 2 < 0 );  // true && false -> false
console.log( 2 === '2' && 2 < 0 );  // false & false -> false

// OR || con que al menos uno sea true ya es true, para ser false todos deben ser false
console.log("************** OR *************** ");
console.log( 2 === 2 || 2 > 0);  // true || true -> true
console.log( 2 === '2' || 2 > 0 ); // false || true -> true
console.log( 2 === 2 || 2 < 0 );  // true || false -> true
console.log( 2 === '2' || 2 < 0 );  // false ||false -> false

// NOT ! cambia el valor si es false pasa a true o vice versa
console.log(!true);  //false

//OPERADOR TERNARIO
let edadActual = 18;
console.log( edadActual >= 18 ? "Podes manejar" : "No tenes edad para manejar");

//precedencia de operadores
console.log( ( 30 + 20 ) / 2);  //para sacar el promedio entre 30 y 20, como + divide terminos, debo encerrarlos entre ()

//Template literals
console.log("*************** template literals ***************");
const firstNames = "Ana";
const job = "Developer";
const favouriteNumber = "5";
console.log(`Hola mi nombre es ${firstNames}, soy ${job} y mi número favorito es ${favouriteNumber}`);

/******************** Ejercicios ************************/

//EJERCICIO 1
//Pedir al usuario que ingrese su nombre. Guardar ese nombre en una variable y utilizarla para saludar al usuario (por ejemplo: Hola Alexis).
const firstName = prompt("Ingresa tu nombre : ");
if ( firstName.length == 0 ) {
  alert("No ingreso un nombre");
} else {
  alert(`Hola ${firstName}`);
}

//EJERCICIO 2
//Pedirle a un usuario que ingrese dos números y devolverle la suma de dichos números.
const firstNumber = Number(prompt("Ingresa un número : "));
const secondNumber = Number(prompt("Ingresa otro número : "));
alert(`La suma de ${firstNumber} y ${secondNumber} es: ${firstNumber + secondNumber}`);  

//EJERCICIO 3
//Pedirle a un usuario que ingrese dos números y devolverle el doble de la suma de dichos números.
alert(`El doble de la suma de ${firstNumber} y ${secondNumber} es:  ${ (firstNumber + secondNumber) * 2 }`);

//EJERCICIO 4
//Pedirle al usuario que ingrese el ancho y alto de una habitación y calcula la superficie.
const width = Number(prompt("Ingresa el ancho de la habitación: "));
const height = Number(prompt("Ingresa el alto de la habitación: "));
alert(`La superficie de la habitación es de: ${width * height}`);  

//EJERCICIO 5
//Pedirle al usaurio su nombre y devolverle el apellido todo en minúscula.
const lastName = prompt("Ingrese su apellido : ");
alert(`Su apellido en minúsula es: ${lastName.toLowerCase()}`);

//EJERCICIO 6
//Pedirle al usuario que ingrese su apellido y devolverle el apellido todo en mayúscula.
alert(`Su apellido en minúsula es: ${lastName.toUpperCase()}`);

//EJERCICIO 7
//Pedirle al usaurio el nombre, el apellido y la edad. Mostrar el siguiente mensaje:</p>
//Nombre : aca_el_nombre
//Apellido: aca_el_apellido
//Edad: aca_la_edad
const age= Number(prompt("Ingrese la edad: "));
alert(`
Nombre: ${firstName}
Apellido: ${lastName}
Edad: ${age}`);