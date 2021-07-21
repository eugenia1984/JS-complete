/******************** EJERICICO 1 *****************/
// Crear un programa que pida al usuario un número y le devuelva un mensaje indicando si el número es positivo, negativo o si es 0.

//guardo en la variable number el numero ingresado por el usario
const number = Number(prompt("Ingresa un numero para indicar si es positivo o negativo : "));


if (!number) {
  alert("No ingresó un número válido. Debe ingresar un número");
} else {
  if (number === 0) { //si number es positivo
    alert(`El número ${number} es cero.`);
  } else if( number > 0){ //si number es positivo 
    alert(`El número ${number} es positivo.`);
  } else { //si number es negativo
    alert(`El número ${number} es negativo.`);
  }
}

/************************* EJERCICIO 2 *************************/
//Crear un programa que pida un número al usuario y le devuelva un mensaje diciendo si el número es primo o no.
// Los numeros primos tiene 4 divisores, 2 positivos y 2 negativos y son mayores que 1 (1 no es primo, hay que partir del 2).
//Los numeros que se puedan dividir solo por 1 y por si mismo

const isPrime = (number) => {
  const parseNumber = +number;

  //Si no es un numero o no es 0 (falsy)
  if(!parseNumber && parseNumber !== 0) {
    alert("El valor ingresado no es un número.");
    return;
  }

  //excluyo al 1
  if(parseNumber < 2) return false;

  //Si el numero es 2 o mayr itero dle 2 hasta el numero y calculo el modulo si es distinto de 0 es divisible por 1, si mismo y otro más => no es primo
  for (let i = 2 ; i < parseNumber; i++) {
    
    if (parseNumber % i === 0 ) return false;   
  }
  return true;
}

//pido la usuario que ingrese un numero
const chosenNumber = prompt("Ingresa un número, para indicarte si es primo o no : ");
//invoco a la función para ver si el numero es primo o no
const isNumberPrime = isPrime(chosenNumber);

if(isNumberPrime !== undefined) {
  if (isNumberPrime === true) alert("El número es primo!");
  else alert("El número no es primo!");
}