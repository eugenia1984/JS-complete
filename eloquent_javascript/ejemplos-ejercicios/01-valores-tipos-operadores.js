/************** Numbers ******************/ 
let numero = 2;
let numeroFlotante = 9.82; //el . es como la coma, para los decimales
let infinito = Infinity;
console.log('infinito: ', infinito)
let infinitoNegativo = -Infinity;
console.log('infinito negativo: ', infinitoNegativo)

/************ Operadores *********/
/*
+ suma
- resta
* multiplicación
/ división
% módulo/resto
*/ 
let suma = 1+2;
let resta = 2-1;
let multiplicacion = 2 * 2;
let division = 4/2;
let modulo = 5 % 2;

/************** Stings *************/
/*Con el \n se hace un salto de linea */
let cadenaDeTexto = "Esta es la primera línea\nY esta es la segunda"
console.log(cadenaDeTexto);
let cadenaDeTexto2 = "Un carácter de nueva línea se escribe como \"\\n\"."
console.log(cadenaDeTexto2)

/*** Concatenar ***/
let concatenar = "con" + "cat" + "e" + "nar";

/*** Template literals ***/
let templateLiterals = `la mitad de 100 es ${100 / 2}`

/********* Operadores unarios *******/
// typeof
console.log(typeof 4.5); // number
console.log(typeof "x"); // string

/* Los otros operadores mostrados hasta ahora en este capítulo 
operaron sobre dos valores, pero typeof toma solo uno. 
Los operadores que utilizan dos valores se llaman 
operadores binarios, mientras que aquellos que toman uno 
se llaman operadores unarios. El operador menos se puede 
usar tanto como un operador binario como un operador unario.*/

/***********  Booleanos: true / false  **********/
console.log(3 > 2) // true
console.log(3 < 2) // false
// Las cadenas se pueden comparar de la misma manera:
// en orden alfabético, pero  las letras mayúsculas son 
// siempre “menores” que las minúsculas
console.log("Aardvark" < "Zoroaster") // true

/*
>=   mayor o igual que
<=   menor o igual que
==   igual a
!=   no igual a
*/
console.log("Granate" != "Rubí")  // true
console.log("Perla" == "Amatista") //  false
console.log(NaN == NaN) // false
console.log(null == undefined) // true
console.log(null == 0) // false

/**********  Operadores lógicos ***********/
/*
&&  and / y
||  or / o
! not / no
*/
console.log(true && false) // false
console.log(true && true) // true
console.log(false || true) // true
console.log(false || false) // false
/****** Operador ternario: a ? b : c *****/
console.log(true ? 1 : 2) // 1
console.log(false ? 1 : 2) // 2

/***** Valores vacío: null y undefined ******/
console.log(8 * null) // 0
console.log("5" - 1) // 4
console.log("5" + 1) // 51
console.log("five" * 2) // NaN
console.log(false == 0) // true

/***** Cortocircuito de operadores lógicos *****/
console.log(null || "usuario") //  usuario
console.log("Agnes" || "usuario") // Agnes
console.log(0 || 100) // 100
console.log(0 ?? 100) // 0
console.log(null ?? 100) // 100