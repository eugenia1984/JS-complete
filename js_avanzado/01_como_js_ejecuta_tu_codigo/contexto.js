console.log(this);  // contexto global

function incrementar(val) {  // contexto de funcion
    return val +1;
}

/***** ejemplo de contexto lexico ****/
var a = 1;

function primerFuncion() {
    console.log(`El valor de a es: ${a}`);
}

function imprimirLetra() {
    var a = 2;
    primerFuncion();
}

imprimirLetra();

/**** Contexto global, object window ****/
function prueba() {
    console.log(this);
}

prueba(); // window

/**** Objeto argument con los parametros de la funcion ****/
function prueba2(a, b) {
    console.log(arguments);
}
prueba2(1,2); // [1,2]

/**** scope de la funcion y variables ****/
var variableGlobal = "Hola Global";

function saludoLocal() {
    var variableLocal = "Hola Local";
    console.log(variableLocal);
}

console.log(variableGlobal);
saludoLocal();
console.log(variableLocal);

/*** Alcance y cadena de alcance ***/
//ejemplo 1
var b = 1;
function primeraFuncion() {
    var c = 2;
    function segundaFuncion() {
        var d = 3;
        var b = 20;
        function terceraFuncion() {
            console.log(`Funcion #3 ==>`);
            console.log(`b =  ${b}`);
            console.log(`c =  ${c}`);
            console.log(`d =  ${d}`);
        }
        terceraFuncion();
    }
    segundaFuncion();
}
primeraFuncion();
// ejemplo 2
for (var index = 0; index < 10; index++) { }
console.log(index);
if (true) {
    var temp = "hola";
}
console.log(temp);

/*** Pila de ejecución ***/
// ejemplo 1
function prueba3() {
    return "Hola JavaScript"
}

function prueba4() {
    console.log(prueba3());
}

prueba4();

//ejemplo2
function crearNuevoContexto(iteraciones) {
    if (iteraciones == 0) {
        return;
    }
    crearNuevoContexto(--iteraciones);
}
crearNuevoContexto(3);

/** Funciones closure **/
var e = 1;
function cuartaFuncion() {
    var f = 2;
    console.log(`e =  ${e}`);
    console.log(`f =  ${f}`);
}
cuartaFuncion();
var g= 1;
function quintaFuncion() {
    var h = 2;
    return function() {
        console.log(`g =  ${g}`);
        console.log(`h =  ${h}`);
    }
}
var temp2 = quintaFuncion();
temp2();
//ejemplo2
function crearSaludo(saludo, nombre) {
    let saludoTemp = saludo;
    return function(nombre) {
       console.log(`${saludoTemp} ${nombre}`); 
    }
}
let saludoGuardado = crearSaludo('hola');
saludoGuardado('Carlos');