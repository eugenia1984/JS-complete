/* * Curso de LinkedIn Learning : JavaScript trucos * */ 
/************ Buenas prácticas *************/
// 1 - Utilizar nombre significativos, usa formato camelCase
let esActivo = true; //si, porque es booleano
// 2 - Evitar variables globales, siempre mejor utilizar let y const, o trabajar con objetos y modulos
/*
No hacer:
var miVariableGlobal = 123;
*/ 
const miModulo = {
    miVariable : 123,
}
// Utilizar IIFE Funcion de invocación inmediata, que crean un contexto de ejecución, y todo lo que declaro dentro solo existe dentro de su scoope, y queda protegido del object Window
(function () {
    console.log("Se ejecuta dentro de su propio contexto");
})();
// 3 - Evita Strings o números mágicos -parametros que utilizas para definir estados en la aplicacion-, mejor guardarlo en constante
function cambiarEstado(nuevoEstado) {
    this.estado = nuevoEstado;
}
/*
NO:
cambiarEstado();
cambiarEstado("activo")
*/
const ESTADO_ACTIVO = "activo";
cambiarEstado(ESTADO_ACTIVO);
// 4 - Optimiza loops, en ver de utilizar el clásico for para recorrer un array, utilizar .forEach
const valores = ["valor1", "valor2", "valor3"];
/*
NO:
for (let i = 0; i < valores.length; i++) {
    console.log(valores[i]);
}
*/
valores.forEach( val => console.log(val));  
// 5 - Los nombres de clases se escriben en mayúscula, en UpperCamelCase
class MiClase{};
// 6 - Utiliza notaciones cortas
/*
NO:
let obj = new Object;
obj.valor = 123;
*/
let obj = {valor: 123};
/*
Hay guias de código, las más importantes: Airbnb, Google, standard de JavaScript
*/
/*
- Utilizar ESLint para estilizar tu código JavaScript
- 1ro: Tener npm instalado
- 2do : Instalar EsLint : 
> npm install -g eslint
- 3ro: Inicializar npm en mi aplicación :
> npm init
- 4to: Inicializar ESLint en la aplicacion:
> eslint --init
Y hago la configuración que deseo, la última es la más estricta, y voy contestando las demás preguntas, me pregunta si instalo las librerias
- 5to: Abro VSC, voy al panel de Extensions, busco ESLint y lo instalo.
*/
/*
Buenas prácticas de seguridad en JavaScript:
- 1: Nunca utilizar la función .eval(), la misma toma un JS en forma de String y lo ejecuta
- 2: Sanitizar parámetros, con la libreria:
DOMPurify.sanitize()
*/
/************ Herramientas disponibles para los desarrolladores de JavaScript *************/
/*
Las que traen los navegadores web por defecto:
- En Chrome, las "herramientas para desarrolladores", con sus tag: Elements (veo el HTMl de la web), Console (la consola del navegador), Source (todos los archivos Js que están cargados en al página), Network ( todos los request de la pagina y los archivos cargados a traves de los mismos), Performance (pruebas de rendimiento de la aplicación), Memory ( pruebo cuánta memoria consume mi aplicación), Aplication ( veo todas las partes de la aplicación).
- En Firefox, está "Desarrollador web"
*/
/*
Inspeccionando elementos de la página:
- En la tag Elements, puedo ver el HTML, el CSS, los EventLilstener, los Listener asociados al evento
*/
/*
Consola del navegador:
- utilizando console.log()
*/
// se puede enviar un Object, para expandirlo y ver las propiedades
console.log("un mensaje de error con un objeto", {calos1: 123, valor2: 456, valor3: 789});
// puedo cambiar el formato del mensaje por CSS definiendo un string con los parametros
let colores = "background: purple; color: white; display: block;";
console.log('%c La petición falló', colores, new Error("un mensaje de error"));
// .assert() -> dada una condicion, si es falsa muestra un mensaje
console.assert(true === false);
// .count() -> cuenta cuantas veces es llamado el método
for (let i = 0; i < 10; i++) {
    console.count("contando");
}
// .countReset() -> reinicio el contador
console.countReset("contando");
console.count("contando");
// .error() -> muestra los errores con letras rojas y fondo rojo
console.error("un error se ha producido");
// .group() -> para agrupar mensajes
console.log("%c Nivel 1", "font-weight: bold; color: green");
console.group();
console.log("Nivel 2");
console.group();
console.log("Nivel 3");
// .warn -> es un warning, se ve con fondo amarillo y el tringulo con el ! dentro
console.warn("Contenido en Nivel 3");
// .groupEnd() -> indica donde termina el grupo
console.groupEnd();
console.log("Nivel 2");
console.groupEnd();
console.log("%c Nivel 1", "font-weight: bold; color: green");
// .table() -> para mostrarlo en formato de tabla tabla, se puede pasar como parametro un Array o un Object
let gente = [["Natalia", "Corea"], ["Katherine", "Monge"]];
/*
Un vistazo al panel de recursos:
- veo todos los archivos cargados en la página web
- overrides, para probar un código en vivo y que al refrescar la pagina no se me pierda. Debo seleccionar la carpeta, dar permiso a Chrome, y todos los cambios realizados se guardaran en el Override
- Content script, cuando instalamos extensiones de Chrome, a veces inyectan codigo dentro de la pagina web y pueden causar problemas
*/
/*
Controlando y depurando la ejecución de tu código JS
- Se puede debuguear y ejecutar línea paso por paso, hay que crear un "breakpoint" haciendo click en la linea de codigo, luego se corre el codigo y va a detenerse en el breakpoint marcado. Puedo ver el status de cada una de las variables en ese momento.
- se pueden agregar vistas ("Watch")
- puedo ver el "Scope" donde se ejecuta el codigo y ver el scope global.
- con los controles a la derecha arriba, puedo saltar la ejecucion (step over next function), con |> corro el codigo, con la flecha hacia abajo me corro linea por linea, con la flecha hacia arriba nos saca de la ejecucion donde me encuentro
*/
/*
Creando snippets de código en el panel de Recursos:
- +New snippet, y en la ventana puedo crear codigo JS y lo guardo. con el |> lo ejecuto, asi hago una prueba en el navegador directo. Tambien puedo guardar el codigo que utilizo bastante
*/
/*
Evaluando el desempeño del código JS:
- Performance en las herramientas de desarrollador de Chrome, prueba toda la pñagina en sí. 
- Desde el boton de "configuracion" puedo variar en Network como funciona con una conexion lenta a internet, lo mismo con el CPU.
- Para medir un desempeño hay que crear un caso de estudio, lo creo con el boton redondo. Y tengo un reporte de la aplicación.
*/
// Puedo tener este codigo para probar lo que tarda en ejecutarse una funcion, para ver lo que tarda más y poder optimizarla
function prueba() {
    let variable = 1;
    for (let i = 0; i < 100000; i++) {
        variable = Marth.random() + 10 * variable;
    }
}
console.time();
prueba();
console.timeEnd();
/*
Eliminando código innecesario en tu código JS:
- con la "herramientas para desarrollador" de Chrome esta "Coverage" (si no esta, desde los tres puntos, mas herramientas, coverage), graba una sesion en el navegador y luego indica qué código no es utilizado (queda marcado en rojo). también se puede hacer analisis de los archivos de JS y CSS, y se ve que se utiliza, sirve para cuando se llama a librerias, se puede bajar un reporte del mismo.
*/
/*
Pruebas unitarias rápidas con la consola:
- asi no se necesita usar un framework, solo con la funcion assert.
*/
// una forma de comprobar el correcto funcionamiento de una unidad e codigo
function generalValorRandom() {
    let obj = {
        valor0: [1, 2, 3],
        valor1: "un string",
        valor2 : 56,
        valor3: true
    }

    let keys = Object.keys(obj);
    let aleatorio = Math.round(Math.random()+4);
    return obj[keys[aleatorio]];
}
// cuando en base a una condicion esperamos cierto parametro y olvidamos definir un parametro por default
function prueba(param) {
    if(param) {
        return "resultado"
    }
}
for (let index = 0; index < 5; index++) {
    let unValor = generalValorRandom();
    console.assert(typeof unValor === "object", "unValor debe ser tipo Object");
}
console.assert(prueba(), "resultado de prueba() no debe ser nulo");
/************ Extendiendo JavaScript *************/
/*
Cómo manejar la compatibilidad de JavaScript entre navegadores:
- con la propiedad navigator.userAgent, que devuevlve un String con la información del sistema operativo, la versión de Chrome y demás, parsear ese String es complicado, por eso se recomienda utilizar la librería:
https://github.com/bestiejs/platform.js, que parsea el String y divide los valores en propiedades
- https://caniuse.com, para saber si el navegador lo soporta, mas que nada para las versiones viejas
*/
//User Agent
console.log(navigator.userAgent);
// Con Platform
console.log(platform.name);
console.log(platform.version);
console.log(platform.layout);
console.log(platform.os);  // para el sistema operativo
console.log(platform.description);
// Para saber si el navegador soporta con CanIUse
if(navigator && navigator.geolocation) {  // valido que existe y que esta implementado
    // detecta la posicion del usuario
} else {
    // hacer alguna otra cosa si no lo soporta
}
// hay que tener en cuenta las versiones de los navegadores para llamar a las APIS
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozgetUserMedia || navigator.msGetUserMEdia;
window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
if(navigator.getUserMedia) {
    // solicitar la camara
}
/*
Agregando funcionalidad no soportada a traves de polyfills:
- implementaciones que reemplazan funcionalidades que no están disponibles en el navegador.
- debe estar identico al que soporta el navegador
- puede ser complicado implementar un polyfill, por eso ver este enlace
http://github.com/Modernizr/wiki/HTML5-Cross-browser-Polyfills donde hay una lista de Pilyfills ya desarrollados y testeados
*/
// ejemplo que simula el localStorage para los navegadores que no lo soportan
if(typeof window.localStorage == 'undefined' || typeof window.sessionStorage == 'undefined') ( function () { // valida si el localStorage esta en el window
    // define el tipo de storage (local o session)
    var Storage = function (type) {

        function setData(data) {
            // guarda la informacion en el storage
        }
        function clearData() {
            // limpia la informacion en el storage
        }
        return {  // si no esta el localStorage lo crea
            length: 0,
            clear: function () {
                clearData();
            },
            getItem: function (key) {
                return data[key] === undefined ? null : data[key];
            },
            key: function (i) {
                var ctr = 0;
                for (var k in data) {
                    if(ctr == i) return k;
                    else ctr++;
                }
                return null;
            },
            removeItem: function (key) {
                delete data[key];
                this.length--;
                setData(data);
            },
            setItem: function (key, value) {
                data[key] = value + '';
                this.length++;
                setData(data);
            }
        };
    };
    // guarda el local y session storage en el objeto window
    if(typeof window.localStorage == 'undefined') window.localStorage = new Storage('local');
    if(typeof window.sessionStorage == 'undefined') window.sessionStorage = new Storage ('session');
})
/*
Conociendo la librería de utilidades LodashJS:
- en lodash.com se descarga por CDN, el archivo zipeado o por npm
- para llamar a los elementos: _.
*/
// ejemplo para utilizar lodash
let arr1 = [1, 2, 3, 4, 5, 5];
let arr2 = [1, 1, 2, 3, 4, 4, 5, 5, 6];

console.log(_.interaction(arr1, arr2));

function aleatorio() {
    return Math.round(Math.random() *100);
}

console.log(_.time(5, aleatorio));  // va a ejecutar la funcion aleatorio 5 veces

console.log(_.sortedUniq(arr2));  // elimina los duplicados

const obj1 = { nombre: 'Naty', edad: 35};

const obj2 = {
    nombre: 'Naty',
    edad: 35
};

obj1 == obj2;

console.log(_.isEqual(obj1, obj2));  // compara dos objetos, una propiedad por otra

console.log(_.isEmpty({}));  // para ver si esta vacio el Object

let clon = _.clonDeep(obj1);   // toma un objeto y lo clona, sirve para hacer copias

console.log("original:", obj1);

console.log("clon:", obj2);
/*
Manipulando datos utilizando LodashJS:
- es muy util para trabajar con Arrays
*/
let data = [{
    "id": 1,
    "nombre": "Janette",
    "apellido": "Prendes",
    "correo_electronico": "jprendes@census.com",
    "genero": "Femenino",
    "ip_address": "26.58.193.2",
    "ciudad": "Zoetermeer",
    "edad": 28
},{
    "id": 2,
    "nombre": "Giovanni",
    "apellido": "Frediani",
    "correo_electronico": "gfrediani@senate.gov",
    "genero": "Masculino",
    "ip_address": "229.179.4.212",
    "ciudad": "Zoetermeer",
    "edad": 35
}, {
    "id": 3,
    "nombre": "Noel",
    "apellido": "Bea",
    "correo_electronico": "nbea2@imageshack.com",
    "genero": "Femenino",
    "ip_address": "180.60.162.255",
    "ciudad": "Madrid",
    "edad": 21
}, {
    "id": 4,
    "nombre": "William",
    "apellido": "Prendes",
    "correo_electronico": "jprendes@census.com",
    "genero": "Femenino",
    "ip_address": "26.58.193.2",
    "ciudad": "Zoetermeer",
    "edad": 32
}];

console.log(_.groupBy(data, 'genero'));  // para agruparlos por le genero

console.log(_.filter(data,
    { 'genero': "Femenino", 'ciudad': "Zoetermeer" }));

let resultado = _.reduce(data, function (res, usuario) {
    if(usuario.edad >= 25 && usuario.edad <= 35) {
        (res[usuario.edad] || res[usuario.edad] == []).push({nombre: usuario.nombre, apellido: usuario.apellido});
    }
    return res;
}, {});

console.log(resultado);

console.log(_.orderBy(data, 'edad'));  // ordeno la informacion por edad

let keyData = _.keyBy(data, "id");  // defino un key en la estructura de datos que utilizo para acceder a la informacion, en vez de usar el index

console.log(keyData[3]);
/************ Documentando tu código utilizando JSDoc *************/
/*
Introducción a JSDoc:
- documentar el codigo es esencial, maás en un grupo grande de desarrolladores
- JSDoc es un markup languaje con etiquetas, tiene un compilador para generar un archivo en base a tus etiquetas documentadas
- web: jsdoc.com
*/
/*Etiquetas comunes de JSDoc*/

// ejemplo de comentario con la descripcion de un modulo
/**
 * la descripcion del modulo
 * @module Constantes
 * @author Maria Eugenia Constantes
 * @copyright Creative Commons
 * @version 1.0.0
 */
 
//ejemplo de variable
/**
 * la descripcion de la variable
 * @type {number}
 */

//ejemplo de constante
/**
 * @const {number} - el numero de pasos del proceso
*/
const numeroPasos = 5;

// ejemplo de objeto
/**
 * Caracteristicas de un objeto 3D
 * @typeof {Object} Propiedades
 * @property {boolean} largo - el largo del objeto
 * @property {boolean} ancho - el ancho del objeto
 * @property {boolean} profundidad - la profundidad del objeto
 * @property {string} color - el color del objeto
 */
const Prpopiedades = {
    largo: 5,
    ancho: 4,
    profunidad: 3,
    color: "rojo"
}
 
// un listener a un evento
/**
 * @typeof {object} MouseEvent
 * @typeof {object} HTMLElement
 */

/**
 * Reporte el click a un boton
 * @param {MouseEvent} e - el evento click del boton
 * @listens MouseEvent
 */
function clickHandler(e) {
    //
}
document.getElementById.addEventListener("click", clickHandler);

module.exports = {};

/*Documentando funciones en JavaSCript con JSDoc*/
// funcion
/**
 * descripcion
 * @param {number} num 
 * @returns {void}
 */
function prueba2(num) {
    return num = 2;
}

/**
 * Genera un número aleatorio entre 0 y el numero pasado como parametro
 * @param {number} max - el numero maximo que debe calcularse como aleatorio
 * @returns {number}
 */
function randomNum(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

/** 
 * Genera un div donde aplica una clase 'ball' con colores aleatorios
 * @returns {HTMLDivElement}
*/
function generarCirculo() {
    let ball = document.createElement("div");
    ball.className = "ball";
    ball.style.backgroundColor = "rgb("+ randomNum(255) + "," + randomNum(255) + "," + randomNum(255) + "]";
    ball.style.top = randomNum(350)+"px";
    ball.style.left = randomNum(1550)+ "px";
    ball.addEventListener("animationed", function (event) {
        document.body.removeChild(event.target);
    });
    document.body.appendChild(ball);
    return ball;
}

/**
 * Retorna la suma de A y B
 * @param {number} a
 * @param {number} b
 * @return {Promise} El objeto promesa que representa la suma de a y b
 */ 
function suma(a,b) {
    return new Promise( (resolve, reject) => {
        resolve(a+b);
    });
}

/* Documentando clases con JSDoc*/
// documentar una clase
/**
 * @class Figura1
 * Crea una nueva figura
 * @param {string} tipo - el tipo de figura
 * @param {number} color - el color de la figura
 */
const Figura1 = function (tipo, color) {
    this.tipo = tipo;
    this.color = color;
}

// la descripcion de la clase
class Persona {
    // el constructor de la clase
    /**
     * descripcion del constructor
     * @param {string} _nombre [descripcion] 
     * @param {string} _apellido [descripcion] 
     */
    constructor (nombre, apellido) {
        //miembros de la clase que son privados
        /** @private */
        this._nombre = nombre;
        /** @private */
        this._apellido = apellido;
    }

    /**
     * Dice el nombre de la persona
     */
    static decirNombre() {
        console.log(`Mi nombre es ${this.nombre} ${this.apellido}`);
    }

    // @readonly indica que es solo para LEER datos
    /**
     * Devuelve el nombre de la persona
     * @readonly
     */
    get nombre() {
        return this.nombre;
    }

    /**
     * Indica la direccion de Persona
     * @param {string} dir - la direccion en forma de string 
     */
    static indicarDireccion(dir) {
        this.direcicon = dir;
    }
}

/*
¿Cómo exportar documentación con JSDoc?
- tener instalado npm
- inicializar npm: 
>npm init
- ya hay un archivo package.json
- instalar JSDoc:
> npm install -D jsdoc
- crear un archivo de configuracion, llamado jsdoc.json y agregar los parametros:
{
    "source": {
        "include": ["src"],
        "includePattern": ".js$",
        "excludePattern": "[node_modules/|docs]"
    },
    "opts": {
        "recursive": true,
        "destination": "./docs/"
    }
}
- en el package.json cambiar:
"scripts": {
    "doc": "json -c jsdoc.json"
}
- ahora lo ejecuto en terminal
> npm run doc
*/

/************ Trabajando valores de tiempo con MomentJS *************/
/*
Creando objetos fecha con MomentJS:
- momentjs.com
- ayuda a trabajar con valores de tiempo y fecha
*/
// creando objetos con fecha con MomentJS
// dondole formato con .format()
let fechaActual = moment(); // sin parametros toma la fecha actual
console.log(fechaActual.format("DD-MM-YY HH:mm"));

let fechaDesdeString = moment("2020-02-20 19:30:30", "YYYY-MM-DD HH:mm:ss");
console.log(fechaActual.format("MMMM Do"));
console.log(fechaDesdeString.fromNow());

let fechaDesdeDate = moment(new Date());  // con un objeto fecha
console.log(fechaDesdeDate.format('[El dia de la semana es] dddd y el mes es ]Do'));

let fechaDesdeOtroMoment = moment(fechaActual);  // clonarlo
console.log(fechaDesdeOtroMoment.format('[El dia de la semana es] dddd y el mes es ]Do'));

let fechaDesdeObjeto = moment({year :2010, month :3, day :5, hour : 10, minute : 20, second: 30});    // crear a partir de un objeto
console.log(fechaDesdeObjeto.format("YYYY-MM-DD HH:mm:ss"));

let fechaDesdeArreglo = moment([2020, 6, 10]);
console.log(fechaDesdeArreglo.format("DD-MM-YYYY HH:mm:ss"));

/***** Realizando cálculos de tiempo con MomentJS *****/
// .isBefore -> para saber si una fecha es mayor a otra
console.log(`Es ${fechaDesdeObjeto.format("YYYY")} antes que ${fechaActual.format("YYYY")} ? ${fechaDesdeObjeto.isBefore(fechaActual)}`);

console.log(`Es ${fechaDesdeObjeto.format("YYYY")} después que ${fechaActual.format("YYYY")} ? ${fechaDesdeObjeto.isAfter(fechaActual)}`);

// .isBetween() -> veo si una fecha se encuentra entre dos fechas, los parametros son: fecha inicial, fecha final,la unidad en la que quiero comparar (opcional) , la manera en que quiero que se compare(opcional)
console.log(moment('2020-02-10')
.isBetween('2020-02-10', fechaDesdeArreglo, 'day', '[]'));

// .subtract() -> remueve/elimina tiempo de un objeto moment, se pasa como parametros: el numero de unidades y el tipo
console.log(fechaDesdeObjeto
    .subtract(3, 'hours').format("HH:mm:ss"));

// .add() -> agrega tiempo, se pasa como parametros: el numero de unidades y el tipo 
console.log(fechaDesdeObjeto.add(3, "days").format("DD-MM-YYYY"));

// .day() -> para saber el dia de la semana
console.log(moment().day());


// .diff() -> devuelve la diferencia entre dos objetos moment
console.log(moment().add(3, "days").diff(moment(), "hours"));

/**** Convirtiendo fechas entre zonas horarias con MomentJS ******/
// momentjs.com/timezone
// usa UTC por defecto

let fechaHora1 = moment.tz("May 12th 2020 8PM", "MMM Do YYYY hA", "America/CostaRica");
let fechaHora2 = moment.tz("May 12th 2020 8PM", "MMM Do YYYY hA", "America/LosAngeles");

// transformar un moment de una zona a otra
var a = moment().tz("Asia/Taipei");
var b = moment("2020-06-27 11:55").tz("America/Toronto");

console.log(a.format("DD-MM-YY HH:mm:ss"));
console.log(b.format("DD-MM-YY HH:mm:ss"));

console.log(a.utc().format("DD-MM-YY HH:mm:ss"));
console.log(b.utc().format("DD-MM-YY HH:mm:ss"));

/*** Trabajando con valores locales utilizando MomentJS Local ***/
// moment-with-locales.js

/*
Para cambiar el lenguaje:
moment.locale('es')

*/
console.log(fechaActual.format("DD-MM-YY HH:mm"));
console.log(fechaDesdeString.fromNow());

console.log(fechaDesdeObjeto.format("dddd"));
console.log(fechaDesdeObjeto.format("L"));
console.log(fechaDesdeObjeto.format("LLLL"));


