/* * Curso de LinkedIn Learning : JavaScript trucos * */ 
/************ Buenas prácticas *************/
// 1 - Utilizar nombre significativos, usa formato camelCase
let esAtcivo = true; //si, porque es booleano
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
    let aleatorio = Math.random(Math.random()+4);
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
// hay que tener en cuenta las versiones de los navegadores para lalmar a las APIS
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozgetUserMedia || navigator.msGetUserMEdia;
window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
if(navigator.getUserMedia) {
    // solicitar la camara
}
/*
Agregando funcionalidad no soportada a travez de polyfills:
- implementaciones que reemplazan funcionalidades que no están disponibles en el navegador.
*/
if(typeof window.localStorage == 'undefined' || typeof window.sessionStorage == 'undefined') ( function () {
    // define el tipo de storage (local o session)
    var Storage = function (type) {

        function setData(data) {
            // guarda la informacion en el storage
        }
        function clearData() {
            // limpia la informacion en el storage
        }
        return {
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
Conociendo la librerñia de utilidades LodashJS
*/
/*
Manipulando datos utilizando LodashJS
*/
/************ Documentando tu código utilizando JSDoc *************/
/*
Introducción a JSDoc:
*/
/*
Etiquetas comunes de JSDoc
*/
/*
Documentando funciones en JavaSCript con JSDoc
*/
/*
Cómo exportar documentación con JSDoc
*/
/************ Trabajando valores de tiempo con MomentJS *************/
/*
Creando objetos fecha con MomentJS
*/
/*
Realizando cálculos de tiempo con MomentJS
*/
/*
convirtiendo fechas entre zonas horarias con MomentJS
*/
/*
Trabajando con valores locales utilizando MomentJS Local
*/