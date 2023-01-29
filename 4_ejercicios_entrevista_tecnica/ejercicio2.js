/*
Consigna:
Dada una cadena de texto comprobar si es un palindromo.
Los palindromos son palabras que se leen igual aun estando invertidos. Por ejemplo: Ana, Bobo, Oso, otto
*/

const isPalindrome = (text) => {
  // recibo por parametro un texto
  // separo el texto en array de letras con .split()
  // lo invierto con .reverse()
  // uno el array de letras a un string con .join()
  let invertedText = text.split("").reverse().join();

  // lo comparo con el texto ingresado
  return text === invertedText;
};

console.log(`It´s "oso" palindrome ? ${isPalindrome("oso")}`);
