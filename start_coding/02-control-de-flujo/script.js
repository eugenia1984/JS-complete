/************* Control de flujo ************/
console.log("******* control de flujo *******");

//IF / ELSE
let age = 18;

if ( age >= 18) {
  console.log( age >= 18);
  console.log("Podes manejar");
} else {
  console.log( age >= 18);
  console.log("Sos menor de edad, no podes manejar");
}

//IF / ELSE IF /ELSE

//ejemplo 1
let number = 10;
if(number < 10) {
  console.log("El número es menor a 10.");
} else if (number > 10) {
  console.log("El número es mayor a 10.");
} else {
  console.log("El número es 10.");
}

//ejemplo 2
let string = "esto es un string";
console.log(+number);   //NaN
if(string < 10) {
  console.log("El número es menor a 10.");
} else if (string > 10) {
  console.log("El número es mayor a 10.");
} else if (string === 10){
  console.log("El número es 10.");
} else {
  console.log("El valor ingresado no es un numero");
}

//switch
const weather = 'soleado';

switch (weather) {
  case 'fresco':
    console.log("Lleva abrigo");
    break;
  case 'lluvioso':
    console.log("Lleva paraguas");
    break;
  case 'soleado':
    console.log("Cuidate del sol");
    break;  
  default:
    console.log("El tiempo está bueno, disfruta del día!");
    break;
}

//for
for (let i = 0; i <= 5; i++ ) {
  console.log( i); 
}

//while
let index = 0;
while (index <= 10) {
  console.log(`Index del while:  ${index}`);
  index++;
}

//do while
let indiceDoWhile = 10;
do {
  console.log( ` Contador del Do While : ${indiceDoWhile}`);
  indiceDoWhile--;
} while (indiceDoWhile >=0);

/************ EJERCICIOS ***************/
// EJERCICIO 1
/* 
Triangulo de #. 
Para este ejercicio, construir un programa que arme un triangulo formado con #, de la siguiente manera
#
##
###
####
#####
*/
/*
let triangle = "";
for (let i = 1; i <= 5; i++) {
  triangle += "#" 
  console.log(triangle);
}
*/

//EJERCICIO 2:
//Numeros pares e impares. 
//Hacer un programa que itere por los numeros del 0 al 10 y nos diga si es par o impar.
/*
for (let index = 0; index <= 10; index++) {
  if (index % 2 === 0) {
    console.log(`${index} es número par`);
  } else {
    console.log(`${index} es número impar`);
  }
}
*/

//EJERCICIO 3
/*
FizzBuzz. Generar un programa que itere del 1 al 15. Por cada iteración mostrar or consola lo siguiente: <
1- Si el numero es multiplo de 3, mostrar la palabra"Fizz"
2- Si el numero es multiplo de 5, mostrar la palabra "Buzz"
3- Si el numero es multiplo de 3 y 5, mostrar la palabra "FizzBuzz"
4- En los demás casos, mostrar el número
*/
/*
for (let numeroIterado = 1; numeroIterado < 16; numeroIterado++) {
  if (numeroIterado % 3 === 0 && numeroIterado % 5 === 0) {
    console.log("FizzBuzz");
  } else if (numeroIterado % 3 === 0 ) {
      console.log("Fizz")
  } else if (numeroIterado % 5 === 0 ) {
    console.log("Buzz");
  } else {
    console.log(numeroIterado);
  }
}
*/

/*
otra forma:

let text = "";

if ( i % 3 === 0) {
  text += "Fizz";
}

if ( i % 5 === 0) {
  text += "Buzz";
} else if ( i % 3 !== 0 && i % 5 !== 0) {
  text += i;
}
*/

/**************Coding Challenge 2 : registro ***************/


/*
const wishesToRegister = confirm("Bienvenido al sitio as click en OK para registrarte");

//si hace click en ok para registrarse
if (wishesToRegister) { 
  let registerUserName = prompt("Ingresa tu nombre de usuario: ");

//valido que tenga al menos 3 caracteres
  if(registerUserName.length >= 3) {  
    //normalizo pasando a minuscula
    registerUserName = registerUserName.toLocaleLowerCase();  

    const registerPassword = prompt("Ingresa tu password : ");
    if(registerPassword.length>= 6 ) {
      alert("El registro se completó exitosamente");
    }else {  //mensaje de error de password
      alert("El password debe tener por lo menos 6 caracteres.");
    }

  } else {  //mensaje de error de usuario
    alert("El nombre de usuario debe tener por lo menos 3 caracteres.");
  }

} else {  //si hace click en cancelar para no registrarse
  alert("Ok te esperamos cuando gustes");
}
*/



/**************Coding Challenge 2 : login ***************/

//Modificaciones en la parte de registro para seguir con el paso del login

/*
let isRegistered, registerUserName, registerPassword;  

const wishesToRegister = confirm("Bienvenido al sitio as click en OK para registrarte");

if (wishesToRegister) { 
  registerUserName = prompt("Ingresa tu nombre de usuario: ");

  if(registerUserName.length >= 3) {  

    registerUserName = registerUserName.toLocaleLowerCase();  

    registerPassword = prompt("Ingresa tu password : ");
    if(registerPassword.length>= 6 ) {
      alert("El registro se completó exitosamente");
      isRegistered = true;
    }else {  //mensaje de error de password
      alert("El password debe tener por lo menos 6 caracteres.");
    }

  } else {  //mensaje de error de usuario
    alert("El nombre de usuario debe tener por lo menos 3 caracteres.");
  }

} else {  //si hace click en cancelar para no registrarse
  alert("Ok te esperamos cuando gustes");
}
*/

//La parte del login
/*
if(isRegistered){
  const wishesToLogin= confirm("Bienvenido al sitio as click en OK para ingresar - INICIAR SESION -");

  if(wishesToLogin){
    const loginUserName = prompt("Ingresa tu usuario : ").toLowerCase();
    const loginPassword = prompt("Ingresa tu password : ");

    if(loginUserName === registerUserName && 
      loginPassword === registerPassword
      ){
        alert("Login exitoso !");
      } else {
        alert("Alguno de los datos ingresados es incorrecto.");
      }
  } else {
    alert("Vuelve cuando gustes");
  }

}
*/

/**************Coding Challenge 3 : extra ***************/

let isRegistered, registerUserName, registerPassword;  

const wishesToRegister = confirm("Bienvenido al sitio as click en OK para registrarte");

do {

  if (wishesToRegister) { 

    if(!registerUserName){
    registerUserName = prompt("Ingresa tu nombre de usuario: ");
    } 

    if(registerUserName.length >= 3) {  
      registerUserName = registerUserName.toLocaleLowerCase();  
  
      registerPassword = prompt("Ingresa tu password : ");

      if(registerPassword.length>= 6 ) {
        alert("El registro se completó exitosamente");
        isRegistered = true;
      }else {  
        alert("El password debe tener por lo menos 6 caracteres.");
        registerPassword = null;
      }
  
    } else {  
      alert("El nombre de usuario debe tener por lo menos 3 caracteres.");
    }
  
  } else {  
    alert("Ok te esperamos cuando gustes");
  }
  
} while (wishesToRegister && ( !registerPassword || !registerUserName) );




//La parte del login

let loginPassword, loginUserName;

if(isRegistered){
  let wishesToLogin= confirm("Bienvenido al sitio as click en OK para ingresar - INICIAR SESION -");

  do {

    if(wishesToLogin){
      loginUserName = prompt("Ingresa tu usuario : ");
      
      if(loginUserName !== null ) {
        loginUserName = loginUserName.toLowerCase();
        loginPassword = prompt("Ingresa tu password : ");

        if(loginPassword === null) {
          wishesToLogin = false;
        } else if (
          loginUserName === registerUserName && 
          loginPassword === registerPassword
          ) {
            alert("Login exitoso !");
          } else {
            alert("Alguno de los datos ingresados es incorrecto.");
            loginPassword = null;
            loginUserName = null;
          }
      } else {
        wishesToLogin = false;
      }
      
    } else {
      alert("Vuelve cuando gustes");
    }

  } while (wishesToLogin && ( !loginUserName || !loginPassword) );

}