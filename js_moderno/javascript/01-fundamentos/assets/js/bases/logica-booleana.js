console.warn('**** Lógica booleana ****');

const regresaTrue = () => {
  console.log("Regresa true");
  return true;
};

const regresaFalse = () => {
  console.log("Regresa false");
  return false;
};

/**** NOT (!) ***/
console.warn("**** Not o la negación ****");
console.log(!true); // false
console.log(!false); // true
console.log(!regresaFalse); // true

/***** AND (&&) ****/
// Solo es true si TODOS con true
console.warn("***** AND *****");
console.log(true && false); // false
console.log(true && true); // true

// solo se ejecuta regresaFalse() y se corta porque ya no puede ser true
console.log(regresaFalse() && regresaTrue());

/**** OR (||) ****/
// Con que al menos uno sea true, ya es true
// Si el primero es true, da true y cota ahi, no ejecuta lo segundo
console.log(true || false); // true
console.log(true || true);

console.warn("***** ASIGNACIONES *****");
const soyUndefined = undefined;
const soyNull2 = null;
const soyFalso = false;

const a11 = true && "Hola mundo" && 150; // asigna el ultimo true, es decir 150
const a2 = false && "Hola"; // false
const a3 = "Hola" && "mundo"; // 'mundo'
const a4 = "Hola" && "mundo" && false && true; // false
const a5 = soyFalso || "Ya no soy falso"; // "Ya no soy falso"
const a6 = soyFalso || soyUndefined || soyNull2 || "Ya no soy un falso de nuevo" || true; // "Ya no soy un falso de nuevo"
const a7 = soyFalso || soyUndefined || soyNull2 || true || "Ya no soy un falso de nuevo"; // true