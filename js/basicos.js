console.log("****************TIPO DE DATOS PRIMITIVOS ***************");
/************* Variables: var VS let  *****************/

//El ambito de bloque no existia en JavaScript, y si una función se declara con VAR dentro de una estructura de control, la variable tiene un alcance global, es decir que existe fuera de esa estructura de control, es el HOISTING

//Con ES6 ya hay ambito de bloque, siempre que la variable se declare con la palabra reserva LET. Por eso ahora ya no se recomienda usar VR y se considera mala práctica

var hola = "Hola Mundo";
let hello = "Hello World";
console.log(hola);
console.log(hello);
console.log(window);
console.log(window.hola);
console.log(window.hello); 


console.log ("**************** var *****************");
var musica = "Rock";
console.log("Variable Música antes del Bloque : ", musica);
{
  var musica = "Pop";
  console.log("Variable Música dentro del Bloque : ", musica);
}
console.log("Variable Música después del Bloque : ", musica);
console.log("**************** let *****************");
let musica2 = "Rock";
console.log("Variable Música antes del Bloque : ", musica2);
{
  let musica2 = "Pop";
  console.log("Variable Música dentro del Bloque : ", musica2);
}
console.log("Variable Música después del Bloque : ", musica2); 



/*************** Constantes (const) *****************/

//Las constantes deben declararse y ya asignarle el valor, todo al mismo tiempo. En cambio con let puedo primero declarar al variable y luego asignarle el valor
//Al ser un valor constante no se le puede redeclarar al valor (no le puedo volver a asignar un nuevo valor) durante el flujo del programa, en los valores primitimos (strings, numbers, booleans). Esto no aplica para los objetos, arrays, funciones, clases, que son valores compuestos entonces le puedo agregar o quitar elementos. 

console.log("*************** Constantes ***************");
const PI = 3.1416;
console.log(`Ejemplo de variable constante PI : ${PI}`);

const objeto = {
  nombre: "Maria Eugenia",
  edad: 36
}

const colores = ["blanco", "negro", "azul"];

console.log('Ejemplo de objeto y arreglo declarado como constante :');
console.log(objeto);
console.log(colores);

objeto.correo = "costamariaeugenia1@gmail.com";
colores.push("anaranjado");

console.log('Los mismos objetos y arreglos, modificados, con nuevos elementos agregados:');
console.log(objeto);
console.log(colores); 

/**************** Cadenas de Texto (Strings) *****************/

//Cadenas de Texto 
let nombre = "Maria Eugenia";
let apellido = 'Costa';
//Declaracion con el constructor, para poder ver el objeto String
let saludo = new String("Hola Mundo");
let lorem = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, et dolorum. Adipisci sequi, voluptates accusamus earum magnam non pariatur odit consequuntur dicta modi. Quam soluta aliquid nam ea quod dolore.";

console.log("******************* String ******************");
console.log(`Ejemplos de Strings: ${nombre} , ${apellido}, ${saludo}`);
console.log(`El largo de la varible nombre es : ${nombre.length} , el de la variable de apellido es :  ${apellido.length} y el de la variable saludo es: ${saludo.length}. Se ve usando la propiedad .length, hay que recordar que los espacios en blanco también se cuentan`);
console.log(`La variable nombre en mayuscula usando el método .toUpperCase() es : ${nombre.toUpperCase()}`);
console.log(`La variable apellido en minuscula usando el método .toLowerCase es: ${apellido.toLowerCase()}`);
console.log(`Muestro el texto : " ${lorem} "`);
console.log(`Utilizo el método .includes() para ver si el texto incluye amet = ${lorem.includes("amet")} .`);
console.log(`Ejemplo con método .trim() : ${lorem.trim()}`);
//metodo .split() que me pasa a array mi string, acorde a que le indico entre () para tomar como separador
console.log(`Ejemplo con método .split utilizando los espacios en blanco, se convierte el string en un array : ${lorem.split(" ")}`);
console.log(` Ejemplo del método .split utilizando las comas : ${lorem.split(",")}`);;


/***********   Template Strings  ***********/
console.log("************** Template Strings *************");
let nombre1 = "Eugenia";
let apellido1 = "Costa";

//Concatenación: unir en este caso una cadena de texto con una variable
let saludo1 = "Ejemplo de concantenacion = Hola mi nombre es " + nombre1 + " " + apellido1 + ".";
console.log(saludo1);

//Interpolación de variables, poner en una cadena de texto el valor de una variable.
//Template String, utilizamos back tick (acento francés / grave / invertido)
let saludo2 = `Ejemplo de template strings = Hola mi nombre es ${nombre1} ${apellido1}.`;
console.log(saludo2);

//Ejemplo de utilizacion de template string con html y listas
let ul = "<ul>< li > Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul > ";
console.log(ul);

let ul2 = `
  <ul>
    <li>Primavera</li>
    <li>Verano</li>
    <li>Otoño</li>
    <li>Invierno</li>
</ul>
`;
console.log(ul2);

let ul3 = "<ul>";
ul3 += "<li> Primavera</li>";
ul3 += "<li>Verano</li>";
ul3 += "<li>Otoño</li>";
ul3 += "<li>Invierno</li>";
ul3 += "</ul>";
console.log(ul3);



/***********    Números (Numbers)   ***********/
//Solo hay numbers, no hay enteros, flotantes, doubles, etc, etc
let a = 2;
//Ejemplo de número con su constructor
let b = new Number(1);
let c = 7.19;
let d = "5.6";
console.log("***************** Numbers ****************");
console.log(a, b);
console.log(`Ejemplo de método .toFixed() para formatear los decimales, de ${c} a = ${c.toFixed(1)}`);
console.log(`Otro ejemplo del método .toFixed() con 5 decimales = ${c.toFixed(5)}`);
//ParseInt es muy importante en los formularios para pasar lo que se ingresa por el INPUT que ingresa como STRING a NUMBER
console.log(`Ejemplo del método .parseInt() que devuelve solo la parte entera de ${c} = ${parseInt(c)}`);
console.log(`Ejemplo del método .parseFloat() = ${parseFloat(c)}`);
console.log(`Utilizo typeof para saber los tipos de datos de c "${typeof c}" y de d "${typeof d}"`);
console.log(`Ejemplo de suma de dos numeros : a = 2 + b = 1 => ${a + b}`);
//ParseInt y ParseFloat cuelga directo del constructor Number, son métodos directos del constructor Number
console.log(`Ejemplo de casting, con parseInt() paso a number el String de la variable d y me queda = > ${c + parseInt(d)}`);
console.log(`Ejemplo de casting pasando la variable d que es String a número flotante con .parseFloat() , pero al no tener tantos tipos de números como otros lenguajes me da con varios decimales = > ${c + parseFloat(d)}`);
console.log(`Sumando un número y un string pasado a numero con .parseInt() veo que solo suma la parte entera = > ${c + Number.parseInt(d)}`);
console.log(`Sumando un número con un string pasado con .parseFloat() si me suma tanto la parte entera como la decimal => ${c + Number.parseFloat(d)}`); 



/***********    Booleans ***********/

console.log("************* Booleans **************");
let verdadero = true;
let falso = false;
//Ejemplo de valores booleanos a partir de su constructor
let v = Boolean(true);
let f = Boolean(false);

console.log(verdadero, falso, v, f);
//Falsy: condicional if, null, undefined, 0, NaN, String vacia, nodo no existente
//Truthy: condicional if, objeto vacio,  array , número, cadena de texto, fecha, número negativo, número decimal (positivo y negativo), infinito (positivo y negativo) 
console.log(typeof verdadero, typeof falso);
console.log(`El 0 es falsy = > ${Boolean(0)}`);
console.log(`Un número negativo es truthy, porque está inicializado= > ${Boolean(-7)}`);
console.log(`Una cadena de texto vacía tiende a falso (falsy) => ${Boolean("")}`);
console.log(`Cualquier cadena de texto con algún caracter, inclusive un espacio en banco tiende a verdadero (truthy) => ${Boolean(" ")}`); 



/***********   undefined, null & NaN  ***********/

//undefined indica que no se ha inicializado una variable y que el valor está ausente
console.log("************* undefined ***********");
let indefinida;
console.log(`Ejemplo de variable indefinida, está solo declarada, sin valor asignado => ${indefinida}`); 

//null es un valor especial que indica la ausencia de un valor
console.log("************** null ***************");
let nulo = null;
console.log(`Ejemplo de variable creada con valor null asignado => ${null}`); 

//NaN - Not a Number
console.log("***************** NaN ************");
let noEsUnNumero = "hola" * 3.7;
console.log(`Ejemplo de NaN con operación aritmética entre string y number => ${noEsUnNumero}`); 




/***********   Funciones  ***********/

/*
Una función es un bloque de código, autocontenido, que se puede definir una vez y ejecutar en cualquier momento. Se declara una sola vez y se utiliza cuantas veces sea necesaria. Opcionalmente, una función puede aceptar parámetros y devolver un valor.

Las funciones en JavaScript son objetos, un tipo especial de objetos:
Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y pueden pasarse como argumentos y usarse como un valor de retorno.
*/

//Declaración de función
console.log("************ TIPO DE DATOS COMPLEJOS ************** ")
console.log("**************** Funcion ************");
//Ejemplo de FUNCION DECLARADA, con la palabra reservaa function, su nombre en camelCase, paréntesis y las {} con el bloque de código a ejecutar adentro.

//En este ejemplo ni recibe parametros, ni devuelve valores
function estoEsUnaFuncion() {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
  } 
//Invocación de función, cuando se manda a llamar a la función con el nombre de la función y los ()
console.log("Ejemplo de funcion invocada : ");
estoEsUnaFuncion();

//Ejemplo de una función que devuelve valor, se utiliza la palabra reservada RETURN, una vez que se lee return se ignoran todas las líneas de código que le siguen
function unaFuncionQueDevuelveValor() {
  console.log("Uno");
  return 19;
  console.log("Dos");
  console.log("Tres");
  return "La función ha retornado una Cadena de texto";
} 
console.log("Ejemplo de función que devuelve valor : ");
let valorDeFuncion = unaFuncionQueDevuelveValor();
console.log(valorDeFuncion);

//Ejemplo de función que recibe parámetros
console.log("Ejemplo de función que recibe parámetros : ");
function saludar(nombre = "Desconocido", edad = 0) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}
saludar("kEnAi", 7);
saludar();

//Funciones declaradas VS funciones expresadas
console.log("Funciones declaradas vs funciones expresadas : ");
//Funcion declarada, tiene hoisting
funcionDeclarada();
function funcionDeclarada() {
  console.log("Esto es un función declarada, puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada");
} 
funcionDeclarada();

//funcionExpresada();
//función anónima
 const funcionExpresada = function () {
  console.log("Esto es una función expresada, es decir, una función que se le ha asignado como valor a una variable, si invocamos esta función antes de su definición JS nos dirá 'Cannot access 'funcionExpresada' before initialization'")
} 
funcionExpresada();



/***********     Arreglos (Arrays)  ***********/
console.log("*************** Arrays **************");
const x = [];
const y = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];
console.log("Ejemplo de array vacío =>");
console.log(x);
console.log("Otro array de ejemplo =>");
console.log(y);
console.log(`Largo de mi array => ${y.length}`);
console.log(`Para imprimir mi tercer elemento => ${y[2]}`);
console.log(`Para imprimir mi primer elemento => ${y[0]}`);
console.log(`Para imprimir a mi cuarto elemento => ${y[3]}`);
console.log(y[3][2]);
console.log(y[3][3][0]);

//Forma de instanciar un nuevo array, pero ya no se utiliza tanto
//const e = new Array();
//console.log(e);
//const i = new Array(1, 2, 3, true, false);
//console.log(i);


//Array.of() para llenar elementos
const g = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(`Con Array.of() => ${g}`);
//.fill() para llenar elementos, todas con el mismo valor
const h = Array(50).fill(false);
console.log(`Lleno un array con el método .fill() => ${h}`);

const colors = ["Rojo", "Verde", "Azul"];
console.log(colors);
//push
colors.push("Negro");
console.log(`Agrego un elemento con el método .push() => ${colors}`);
//pop
colors.pop();
console.log(`Quito el último elemento con el método .pop() => ${colors}`);
//foreach() para poder recorrer los elementos de un array
colors.forEach(function (el, index) {
  console.log(`<li id="${index}">${el}</li>`);
}); 



/***********      Objetos    ***********/
console.log("***************** Objetos *******************");
let aA = new String("Hola");
console.log(aA)

const bB = {}
console.log(bB);

const cC = new Object();
console.log(cC);
 
/* Un OBJETO es una colección de CLAVE - VALOR; dentro de un objeto a las variables se le van a llamar atributos/propiedades y a las funciones se les llama métodos */ 

const euge = {
  nombre: "Euge",
  apellido: "Costa",
  edad: 36,
  pasatiempos: ["Caminar", "Pintar", "Cocinar"],
  soltera: true,
  contacto: {
    email: "costamariaeugenia1@gmail.com",
    instagram: "maria.eugenia.19",
  },
  saludar: function () {
    console.log(`Hola :)`)
  },
  decirMiNombre: function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes seguir como ${this.contacto.instagram} en Instagram.`)
  }
}

console.log(`Imprimo mi objeto => `);
console.log(euge);
console.log('Accedo a un atributo / propiedad de mi objeto => ');
console.log(euge["nombre"]);
console.log(euge["apellido"]);
console.log(euge.nombre);
console.log(euge.apellido);
console.log(euge.edad);
console.log(euge.soltero);
console.log(euge.pasatiempos);
console.log(euge.pasatiempos[1]);
console.log(euge.contacto);
console.log(euge.contacto.instagram);
console.log("Accedo a los métodos de mi objeto =>");
euge.saludar();
euge.decirMiNombre();

console.log(`Imprimo las key de mi objeto => ${Object.keys(euge)}`);
console.log(`Imprimo los value de mi objeto =>  ${Object.values(euge)}`);
//hasOwnProperty
console.log(`Ejemplo utilizando .hasOwnProperty() => ${euge.hasOwnProperty("nombre")}`);



/***********    Tipos de Operadores   ***********/
console.log("****************** Operadores ***************");
// Operadores  Aritméticos:  + - * / % ()  

console.log(`${5 + (5 - 10) * 3}`);
let modulo = 5 % 2;
console.log(modulo);


// Operadores  Relacionales: >, <,   >=, <=, ==, ===, !=, !== 
console.log(" Operadores relacionales : ");
console.log(` 8 > 9 ===> ${8 > 9}`);
console.log(` 9 > 8 ===> ${9 > 8}`);
console.log(` 8 >= 9 ===> ${8 >= 9}`);
console.log(` 9 >= 8 ===> ${9 >= 8}`);
console.log(` 7 < 7 ===> ${7 < 7}`);
console.log(` 7 <= 7 ===> ${7 <= 7}`); 

/*
= 1 igual es asignación  de variable
== 2 iguales es comparacion de valores
=== 3 igulaes es comparación de tipo de dato y de valor
Siempre comparar con ===, que sea comparación estricta
*/
console.log("Comparación con : == ó === ");
console.log(` 7 == 7 ===> ${7 == 7}`);
console.log(` 7 === 7 ===> ${7 === 7}`);
console.log(`"7" == 7  ===> ${"7" == 7}`);
console.log(`"7" === 7  ===> ${"7" === 7}`);
console.log(`0 == false ===> ${0 == false}`);
console.log(`0 === false ===> ${0 === false}`);


// Incremento Decremento con : + , - , * y / 
console.log(" Incremento Decremento : ");
let i = 2;
console.log(i++);  //i = i + 2;
console.log(++i); 


//operador unario, cuando se incrementa o decrementa de 1 en 1
/* i++;
i--;
++i;
--i;
console.log(i); */

/* Operadores Lógicos :
! - Not : Niega, es decir lo que es verdadero lo vuelve falso y viceversa
|| - Or: Cuando tengo 2 o más condiciones, con que una se cumpla, es decir sea verdadera, el OR será verdadero.
&& - And: Cuando tengo 2 o más condiciones, todas tienen que cumplirse, es decir ser verdaderas, para que AND se valide 
*/

console.log("Operadores lógicos :");
console.log(` negación: !true ===> ${!true}`);
console.log(` (9 === 9) || ("9" === 9)  ===> ${(9 === 9) || ("9" === 9)}`);
console.log(` (9 === 9) && ("9" === 9) ===> ${(9 === 9) && ("9" === 9)}`);
console.log(` (9 === 9) && ("9" === "9") ===> ${(9 === 9) && ("9" === "9")}`); 


/***********     Condicionales   ***********/
console.log("********************* condicionales *************");
// if - else , si se cumple la condición ejecuto el bloque de código dentro del if, sino ejecuto el bloque de código dentro del else
console.log("if / else");
let age = 9;

if (age > 17) {
  console.log("Eres mayor de Edad");
} else {
  console.log("Eres menor de Edad");
}

// Otra forma de resolverlo con el igual:
/*
if (age >= 18) {
  console.log("Eres mayor de Edad");
} else {
  console.log("Eres menor de Edad");
}
*/

//Otra tercer forma de resolverlo:
/*
if (age < 18) {
  console.log("Eres menor de Edad");
} else {
  console.log("Eres mayor de Edad");
}
*/


// if - else if - else 
/*
  Déjame Dormir - 0hrs - 5hrs
  Buenos dias 6hrs - 11hrs
  Buenas tardes 12hrs - 18hrs
  Buenas noches 19hrs - 23hrs
*/
console.log("if - else if - else ");
let hora = 23;
if (hora >= 0 && hora <= 5) {
  console.log("Déjame dormir");
} else if (hora >= 6 && hora <= 11) {
  console.log("Buenos días");
} else if (hora >= 12 && hora <= 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}
/*
if (hora < 6) {
  console.log("Déjame dormir");
} else if (hora > 5 && hora < 12) {
  console.log("Buenos días");
} else if (hora > 11 && hora < 19) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
} 
*/

// Operador Ternario (condición) ? verdadero : falsa */
console.log("operador ternario : ");

  let eresMayor = (age >= 18)
    ? "Eres mayor de Edad"
    : "Eres menor de Edad";
  console.log(eresMayor); 

// switch - case, con break rompo el ciclo, sale de la estructura witch y no sigue evaluando lso demás casos, una vez que encontró el caso. Tiene un caso particular: default, va a ser para un valor por defecto, para cuando no se cumpla con ninguno de los cases 
/*
domingo - 0
lunes - 1
martes - 2
miércoles - 3
jueves - 4
viernes - 5
sábado - 6
*/
console.log("switch :");
let dia = 2;

switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("El día no existe");
    break;
}


/***********     Ciclos (Loops)     ***********/
console.log("********************* ciclos (loops) ************")

//WHILE
console.log("******* While : ");
let contador = 0;
while (contador < 10) {
  console.log("while " + contador);
  contador++;
}
//DO WHILE
/*
do {
  sentencias que ejecuta el do
} while (condicion);
*/
console.log("******** do / while : ");
do {
  console.log("do while " + contador);
  contador++;
} while (contador < 10); 

//FOR
/* 
for (inicialización de variable; condición; decremento o incremento) {
  sentencias que ejecuta el for
  sentencias que ejecuta el for
  sentencias que ejecuta el for
} 
*/
console.log("******* for: ");
for (let i = 0; i < 5; i++) {
  console.log("for " + i);
}
//for para recorrer arreglos
console.log("****** Un for para recorrer un array: ");
let numeros = [10, 20, 30, 40, 50];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
//Variante del for: for in
console.log("****** Un for in para recorrer las key - value de un objeto : ");
const jon = {
  nombre: "Jon",
  apellido: "MirCha",
  edad: 35
}

for (const propiedad in jon) {
  console.log(`Key: ${propiedad}, Value: ${jon[propiedad]}`);
}
//Variante for of
console.log("******* For of : para recorrer los elementos de un array");
for (const elemento of numeros) {
  console.log(elemento);
}
console.log("******* For of para recorrer un String:");
let cadena = "Hola Mundo";
for (const caracter of cadena) {
  console.log(caracter);
} 



/***********      Manejo de Errores   ***********/
//El bloque catch se ejecuta cuando tenga un error, en este ejemplo pongo la varaible noExiste que no está decalrada, lo que es mi error
//El bloque finallly siempre se ejecuta
console.log("**************** Manejo de Errores ***********");
 try {
  console.log("En el Try se agrega el código a evaluar");
  noExiste;
  console.log("Segundo mensaje en el try");
} catch (error) {
  console.log("Catch, captura cualquier error surgido o lanzado en el try");
  console.log(error);
} finally {
  console.log("El bloque finally se ejecutará siempre al final de unbloque try-catch");
}
/*
try {
  let numero = "y";
 //Antes de multiplicar el numero por si mismo veo que sea un numero
  if (isNaN(numero)) {
    throw new Error("El caractér introducido no es un Número");
  }

  console.log(numero * numero);
} catch (error) {
  console.log(`Se produjo el siguiente error: ${error}`);
} 
*/


/***********    Break & Continue     ***********/
console.log("************** Break & Continue **************");
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log("****** For con break: ");
for (let i = 0; i < numeros2.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(numeros2[i]);
}
console.log("****** For con continue : ");
for (let i = 0; i < numeros2.length; i++) {
  if (i === 5) {
    continue;
  }
  console.log(numeros2[i]);
} 


/*******************  Destructuración  *****************/
console.log("*********** Destructuracion ************ ");
const numeros3 = [1, 2, 3];

//Sin destructuración
/*
let uno = numeros3[0],
  dos = numeros3[1],
  tres = numeros3[2];

console.log(uno, dos, tres);
*/

//Con destructuración, guardo cada elemento del array numeros en las variables one, two, free
const [one, two, three] = numeros3;
console.log(`Destructuración de array: ${one}, ${two}, ${three}`);
//Destructurando un objeto, en este casolas variables deben tener el mismo nombre que la key(propiedad)
const persona = {
  nombre2: "Euge",
  apellido2: "Costa",
  edad2: 36
};

let { nombre2, edad2, apellido2 } = persona;
console.log(`Destructuración de objeto : ${nombre2},  ${apellido2}, ${edad2}`); 


/***********     Objetos literales    *************/
console.log("*********** objetos literales *********** ")

let nombrePerro = "kEnAi",
  edadPerro = 7;
/*
const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    console.log("guauu guauu!!!")
  }
}

console.log(perro);
perro.ladrar()
*/
const dog = {
  nombrePerro,
  edadPerro,
  razaPerro: "Callejero",
  ladrar() {
    console.log("guauu guauu guauu!!!")
  }
}

console.log(dog);
dog.ladrar(); 


/***********   Parámetros REST & Operador Spread ***********/
console.log("********* Parámetros REST & Operador Spread  **********");
//Los parámetros rest son argumentos de una funcion
console.log("******* Parámetro Rest :");
function sumar(a, b, ...c) {
  let resultado = a + b;

  c.forEach(function (n) {
    resultado += n
  });

  return resultado;
}

console.log(sumar(1, 2));
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 3, 4));
console.log(sumar(1, 2, 3, 4, 5));
console.log(sumar(1, 2, 3, 4, 5, 6));
console.log(sumar(1, 2, 3, 4, 5, 6, 7));

console.log("******Operador Spread :");
const arr1 = [1, 2, 3, 4, 5],
  arr2 = [6, 7, 8, 9, 0];

console.log(arr1, arr2);

const arr3 = [...arr1, ...arr2];
console.log(arr3); 


/***********    Arrow Functions ***********/
//Nueva forma de definir funciones anónimas expresadas, no puedo tener hoisting aca primero debo declararla y luego invocarla
console.log("********** Arrow Functions **********");
const saludar2 = () => console.log(`Hola`);
saludar2(); 
//Cuando recibe un parámetro no son necesarios los () y como tengo una sola linea de codigo no pongo las {}
const saludar3 = nombre => console.log(`Hola ${nombre}`);
saludar3("Irma");

/* 
const sumar = function (a, b) {
  return a + b;
}
*/

//Ejemplo con return explicito
const sumar2 = (a, b) => a + b;
console.log(sumar2(9, 9));

//Ejemplo con varias lineas de codigo, debe tener {}
const funcionDeVariasLineas = () => {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
}
funcionDeVariasLineas();

//Para iterar por los numeros del array con for each
const numeros4 = [1, 2, 3, 4, 5];
numeros4.forEach((el, index) => console.log(`${el} esta en la posición ${index}`));

//Las arrow function capturan el objeto this en el contexto en que se encuentran
function Perro() {
  console.log(this);
}
Perro(); 

const perro = {
  nombre: "kenai",
  ladrar() {
    console.log(this)
  }
}
perro.ladrar(); 

/***********   Prototipos y Herencia  ***********/
console.log("********* Prototipos y Herencia **********");
// JS es un lenguaje multiparadigma y uno de ellos es la Programacion Orientada a Objetos, pero en Js es particular ya que las clases son pasadas a PROTOTIPOS. 
//JS es un lenguaje orientado a objetos pero con prototipos, las clases son un 'azucar sintactico' porque lo que se hace es transformar al clase a una funcion prototipal.

/*
CLASES : modelo a seguir.
OBJETOS : es una instancia de una clase, es una copia de ese modelo y tiene:
  - ATRIBUTOS : es una característica o propiedad del objeto (son variables dentro de un objeto)
  - MÉTODOS : son las acciones que un objeto puede realizar (son funciones dentro de un objeto)

PROTOTIPO: es un mecanismo por el cual un objeto puede HEREDAR de un OBJETO PADRE ATRIBUTOS y METODOS. La herencia se da en la cdena de prototipos.
*/

/*
//Ejemplo de objetos sin la funcion constructora
const animal = {
  nombre: "Snoopy",
  sonar() {
    console.log("Hago sonidos por que estoy vivo");
  }
}

const animal2 = {
  nombre: "Lola Bunny",
  sonar() {
    console.log("Hago sonidos por que estoy vivo");
  }
}

console.log(animal);
console.log(animal2); 
*/

//Función constructora que genera un prototipo vacío
function Animal(nombre, genero) {
//Atributos
this.nombre = nombre;
this.genero = genero;
//Métodos
this.sonar = function () {
  console.log("Hago sonidos por que estoy vivo");
}
this.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
}
} 
//Instancio objetos con la función constructora, y paso atributos como parametros
/*
const snoopy = new Animal("Snoopy", "macho"),
  lolaBunny = new Animal("Lola Bunny", "hembra");
console.log(snoopy);
console.log(lolaBunny);
*/

//Función constructora donde asignamos los métodos al Prototipo, no a la función como tal. Porque como en un ejemplo de un video juego que tiene miles de jugadores, y cada uno está almacenado en una variable y ocupan lugar en memoria; por lo que voy a tener duplicados los métodos en cada jugador. Asi cada vez que genere una nueva instancia, no voy a estar duplicando los métodos.

//De este modo lo que hago es tener la función constructora solo con los atributos y los métodos los asigno al prototipo

function Animal2(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;
} 
//Y los métodos los ponemos al prototipo
Animal2.prototype.sonar = function () {
  console.log("Hago sonidos por que estoy vivo");
}

Animal2.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
} 

const snoopy = new Animal2("Snoopy", "macho"),
  lolaBunny = new Animal2("Lola Bunny", "hembra");
console.log(snoopy);
console.log(lolaBunny);
snoopy.sonar();
snoopy.saludar();

//Herencia Prototípica
//Tengo la función constructora Perro que va a heredar de Animal2 su nombre y genero y va a tener su propiedad tamanio particular de Perro (que no está en Animal2)
//.super() manda a llamar al método del Padre
function Perro(nombre, genero, tamanio) {
  this.super = Animal2;
  this.super(nombre, genero);
  this.tamanio = tamanio;
} 

//Perro está heredando de Animal y sería como volver a duplicar los métodos, entonces genero una nueva instancia de Animal2
Perro.prototype = new Animal2();
Perro.prototype.constructor = Perro; 

//Sobreescritura de métodos del Prototipo padre en el hijo
Perro.prototype.sonar = function () {
  console.log("Soy un perro y mi sonido es un ladrido");
}

Perro.prototype.ladrar = function () {
  console.log("Guauuu Guauuu !!!!");
} 

 const snoopy2 = new Perro("Snoopy", "Macho", "Mediano"),
  lolaBunny2 = new Animal2("Lola Bunny", "Hembra");

console.log(snoopy2);
console.log(lolaBunny2);

snoopy2.sonar();
snoopy2.saludar();
snoopy2.ladrar();

lolaBunny2.sonar();
lolaBunny2.saludar(); 


/***********     Clases - Métodos estáticos, getters y setters   ***********/
console.log("******* Clases - Métodos estáticos, getters y setters  *********");

//La clase No recibe parámetros, los reciben por medio de su constructor que es un método especial que se ejecuta en el momento de instanciar la clase

class Animalito {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  //Métodos
  sonar() {
    console.log("Hago sonidos por que estoy vivo");
  }
  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}

//extends porque hereda (se extiende) de la clase Animalito
class Perrito extends Animalito {
  constructor(nombre, genero, tamanio) {
//con el método super() se manda a llamar el constructor de la clase padre
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza = null;
  }
  sonar() {
    console.log("Soy un perro y mi sonido es un ladrido");
  }
  ladrar() {
    console.log("Guauuu Guauuu!!!");
  }
//JS no tiene la opción de tener métodos privados, como en otros lenguajes. Todas las clases son publicas, por eso no es necesario poner la palabra PUBLIC.
//Igualmente JS si tiene los MÉTODOS ESTÁTICOS, que se pueden ejecutar sin necesidad de instanciar la clase, acá está el ejemplo con : Static queEres()
  static queEres() {
    console.log("Los perros somos animales mamíferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre.");
  }
//Los SETTERS y GETTERS son métodos especiales que nos permiten establecer (set) y obtener (get) los valores de atributos de nuestra clase. Aunque son métodos se utilizan como atributos (propiedades) entonces no va con () al final.
  get getRaza() {
    return this.raza;
  }
  set setRaza(raza) {
    this.raza = raza;
  }
}
//Utilizo el método estático
Perrito.queEres();

const mimi = new Animalito("Mimi", "Hembra"),
  scooby = new Perrito("Scooby", "Macho", "Gigante");

console.log("****** mimi es una instancia de la clase Animalito :");
console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log("****** scooby es una instancia de la clase Perrito :");
console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();
console.log(scooby.getRaza);  //getter
scooby.setRaza = "Grán Danés";  //setter
console.log(scooby.getRaza);   //getter

//JS tampoco tiene clases abstractas

/***********    Objeto console   ***********/
console.log("************ objeto console ***************");
console.log(console);
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Esto es un mensaje informativo");
console.log("Un registro de lo que ha pasado en nuestra aplicación");

let nombre5 = "Micaela",
  apellido5 = "Perez",
  edad5 = 20;

console.log(nombre5, apellido5, edad5);
console.log(`Hola mi nombre es ${nombre5} ${apellido5} y tengo ${edad5} años.`);
// Utilizo comodines para luego poner las variables: 
//%s significa que recibe un string 
//%d que recibe un digito (numero)
console.log(`Hola mi nombre es %s %s y tengo %d años.`, nombre5, apellido5, edad5);
console.clear();
//window es el objeto global
console.log(window);  
//document object model (DOM) es la representacion del documento de HTML a traves de JS que se va a acceder por medio de los nodos. 
console.log(document);  
console.dir(window);
//lo veo como objeto con sus propiedades
console.dir(document);

//Grupos para la consola
console.group("Cursos de @jonmircha en YouTube");
console.log("Curso de JavaScript");
console.log("Curso de Node.js");
console.log("Curso de PWAs");
console.log("Curso de Flexbox");
console.log("Curso de Diseño y Programación Web");
console.groupEnd(); //para indicar que el grupo termina
//GroupCollapsed (como un acordeon)
console.groupCollapsed("Cursos de @jonmircha en YouTube");
console.log("Curso de JavaScript");
console.log("Curso de Node.js");
console.log("Curso de PWAs");
console.log("Curso de Flexbox");
console.log("Curso de Diseño y Programación Web");
console.groupEnd(); //para indicar que el grupo termina
console.log(console);
//para generar una tabla
//como es un objeto lo puedo ordenar en orden alfabetico son .sort()
console.table(Object.entries(console).sort());
//ejemplo de .table() con arrays 
const numeros5 = [1, 2, 3, 4, 5],
  vocales = ["a", "e", "i", "o", "u"];
console.table(numeros5);
console.table(vocales);

const perro2 = {
  nombre: "Boni",
  raza: "Boxer",
  color: "cafe"
}
console.table(perro2);
console.clear();
//console.time() lo mismo que escriba entre () es como una bandera y debo tener lo mismo entre () en mi .timeEnd()
console.time('Cuanto tiempo tarda mi código');
const arreglo = Array(10);
for (let i = 0; i < arreglo.length; i++) {
  arreglo[i] = i;
}
console.timeEnd('Cuanto tiempo tarda mi código');
console.log(arreglo);
//console.count()
for (let i = 0; i <= 10; i++) {
  console.count("código for");
  console.log(i);
}
//console.assert para comenzar a probar con pruebs unitarias
let m = 3,
  n = 2,
  pruebaXY = "Se espera que X siempre sea menor que Y";
//( condicion_a_evaluar {primer_variable, segunda_varaibel, mensaje_a_mostrar})
console.assert(m < n, { m, n, pruebaXY }); 



/***********   Objeto Date    ***********/
console.log("****************** object date ****************");
//Guardo en la variable fecha para poder trabajar viendo los metodos
let fecha = new Date();
console.log(`Date() ===> ${fecha}`);
//Numero del día del mes
console.log(`Con .getDate() veo el número del día del mes ===> ${fecha.getDate()}`);
//día de la semana D L M Mi J V S -> 0 1 2 3 4 5 6
console.log(`Con .getDay() veo el día de la semana ===>  ${fecha.getDay()}`);
//mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(`Con .getMonth() veo el mes ===>  ${fecha.getMonth()}`);
//no es recomendable usar getYear mejor usargetFullYear
console.log(`Con .getFullYear() veo el año ===> ${fecha.getFullYear()}`);
console.log(`Con .getHours veo la hora ===> ${fecha.getHours()}`);
console.log(`Con .getMinutes() veo los minutos ===> ${fecha.getMinutes()}`);
console.log(`Con .getSeconds() veo los segundos ===> ${fecha.getSeconds()}`);
console.log(`Con .getMilliseconds() veo los milisegundos ===>  ${fecha.getMilliseconds()}`);
console.log(`.toString() ===> ${fecha.toString()}`);
console.log(`.toDateString() ===> ${fecha.toDateString()}`);
console.log(`.toLocaleString() ===> ${fecha.toLocaleString()}`);
console.log(`.toLocaleDateString() para ver la fecha ===Z> ${fecha.toLocaleDateString()}`);
console.log(`.toLocaleTimeString() para ver la hora ===> ${fecha.toLocaleTimeString()}`);
console.log(`.getTimezoneOffset() para el uso horario donde nos encontramos ===> ${fecha.getTimezoneOffset()}`);
console.log(`.getUTCDate() ===> ${fecha.getUTCDate()}`);
console.log(`.getUTCHours() para ver los datos de GTM0 (los datos del Meridiano de Greenwich) ===> ${fecha.getUTCHours()}`);
//formato timeStamp para calcular edades, fechas
//Hay una libreria momentjs muy util si se trabaaj con fechas
console.log(`Cuántos segundos pasaron desde la fecha 1 de Enero de 1970 con Date.now() ===> ${Date.now()}`);
let cumpleEuge = new Date(1984, 8, 1);
console.log(`Mi fecha de cumpleaños ${cumpleEuge}`); 


/***********    Objeto Math   ***********/
console.log("************** object math ******************");
console.log(Math);
console.log(Math.PI);
console.log(`Método .abs) que da el valor absoloto, de -7.8 ===>  ${Math.abs(-7.8)}`);
console.log(`Método .ceil() para redondear al numero entero posterior inmediato, de 7.2 ===> ${Math.ceil(7.2)}`);
console.log(`Método .floor() para redonear al numero entero anterior inmediado, de 7.8 ===> ${Math.floor(7.8)}`);
console.log(`El método .round() para redondear al más cercano inmediato, de 7.49 ===>  ${Math.round(7.49)}`);
console.log(`Método .sqrt() para sacar la raiz caudrada, de 81 ===>  ${Math.sqrt(81)}`);

console.log(`Método .pow() para elevar potencias, de .pow(2,5) , 2 es la base y 5 es el exponente , 2 elevado a al quinta potencia===> ${Math.pow(2, 5)}`);
console.log(`Método .sign() que me indica si un número es positivo (1), negativo(-1) o cero(0), para -0.3 ===> ${Math.sign(-0.3)}`); 
console.log(`Método .random() da un valor aleatorio comprendido entre 0 y 1 (el 1 no lo incluye) ===> ${Math.random()}`);
console.log(`Número aleatorio entre 0 y 1000 ===> ${Math.round(Math.random() * 1000)}`); 


/***********     Operador de Cortocircuito      ***********/
console.log("****************** operador de cortocircuito ******************");
/*
Cortocircuito OR - cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se cargará por defecto

Cortocircuito AND - cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se cargará por defecto
*/
function saludar8(nombre) {
  nombre = nombre || "Desconocido";
  console.log(`Hola ${nombre}`);
}
saludar8("Mara");
saludar8();
/*
TRUTHY Y FALSY CON OR:

console.log("cadena" || "Valor de la derecha");
console.log(19 || "Valor de la derecha");
console.log(true || "Valor de la derecha");
console.log([] || "Valor de la derecha");
console.log({} || "Valor de la derecha");
console.log(false || "Valor de la derecha");
console.log(null || "Valor de la derecha");
console.log(undefined || "Valor de la derecha");
console.log("" || "Valor de la derecha");
console.log(-2 || "Valor de la derecha");
console.log(0 || "Valor de la derecha");

TRUTHY Y FALSY CON AND:

console.log(false && "Valor de la derecha");
console.log(null && "Valor de la derecha");
console.log(undefined && "Valor de la derecha");
console.log("" && "Valor de la derecha");
console.log(-2 && "Valor de la derecha");
console.log(0 && "Valor de la derecha");
console.log("cadena" && "Valor de la derecha");
console.log(19 && "Valor de la derecha");
console.log(true && "Valor de la derecha");
console.log([] && "Valor de la derecha");
console.log({} && "Valor de la derecha"); 
*/


/***********   30. alert, confirm y prompt      ***********/
console.log("************* alert, confirm y prompt **************");
console.log(window);
/*
let alerta = alert("Hola esto es una alerta"),
confirmacion = confirm("Hola esto es una confirmación"),
aviso = prompt("Hola esto es un aviso y le permite al usuario ingresar un valor");

console.log(alerta);
console.log(confirmacion);
console.log(aviso);
*/

/***********   Expresiones Regulares      ***********/
console.log("************** Expresiones Regulares *************");
/*
Expresiones Regulares
Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de caracteres.

https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
*/

let cadena2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga cupiditate dolores saepe, praesentium sit eaque recusandae id sapiente similique, laudantium voluptatum perferendis ea iure ad odio doloremque earum voluptate.";

let expReg = new RegExp("lorem", "ig");
console.log(expReg.test(cadena2));
console.log(expReg.exec(cadena2));

let expReg2 = /lorem{1,}/ig;
console.log(expReg2.test(cadena2));
console.log(expReg2.exec(cadena2)); 
// los [] indican un rango, si busco un número puedo poner [0-9]
//los {} inidican repetición, si pongo {1,3} es que puede estar repetido entre 1 haasta 3 veces, me da un rango


/***********    Funciones Anónimas Autoejecutables    ***********/
console.log("************  Funciones Anónimas Autoejecutables ***************");
   
//Función Anónima Autoejecutables, la version calrsica entre los primeros () la funcion y en los segundos () son los que la ejecutan
(function () {
  console.log("Mi primer IIFE");
})();
//Función Anónima Autoejecutable que recibe parámetros, me sirve para abreviar document con d, window con w y console.log con c
(function (d, w, c) {
  console.log("Mi segunda IIFE");
  console.log(d);
  console.log(w);
  c.log("Este es un console.log")
})(document, window, console);


//Formas de escribir las funciones Anónimas Autoejecutables
//Clásica
(function () {
  console.log('versión Clásica')
})();

//La Crockford (JavaScript The Good Parts)
((function () {
  console.log('versión Crockford')
})());

//Version Unaria de función anónima
+function () {
  console.log('versión Unaria')
}();

//Versión de Facebook de versión anónima
!function () {
  console.log('versión Facebook')
}(); 
  