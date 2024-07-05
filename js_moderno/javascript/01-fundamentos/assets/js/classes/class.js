console.warn('*********************  Classes  **********************');

class Person {
  // Atributo estatico
  static _count = 0;
  static get count() {
    return Person._count;
  }
  static message() {
    console.log('Hi, I am a static method')
  }

  // Atributos
  name = '';
  code = '';
  phrase = '';
  favoriteFood = '';
  
  // Constructor
  constructor(name = 'No name', code = 'No code', phrase = 'No phrase', favoriteFood = 'No favorite food') {
    this.name = name;
    this.code = code;
    this.phrase = phrase;
    this.favoriteFood = favoriteFood;

    Person._count++;
  }

  // Setter -> establece un valor
  set setFavoriteFood(favoriteFood) {
    this.favoriteFood = favoriteFood.toUpperCase();
  }

  // Getter -> obtiene/recupera un valor
  get getFavoriteFood() {
    return `Favorite food of ${this.name}, is: ${this.favoriteFood}`;
  }

  // Metodo
  howIAm() {
    console.log(`I'm ${this.name}`);
  }

  myPhrase() {
    this.howIAm();
    console.log(`${this.name} says: ${this.phrase}`);
  }
}

const spiderMan = new Person('Peter Parker', 'Spider', 'I am Spiderman')
spiderMan.howIAm();
console.log('*****************************************************');
spiderMan.myPhrase();
console.log('*****************************************************');
spiderMan.setFavoriteFood = 'Pizza';
console.log(spiderMan.getFavoriteFood);
console.log('Instance of Persona: ',Person.count);
console.log('*****************************************************');
Person.message();
// Se pueden crear atributos static por fuera de la clase
// Pero es mejor definirla DENTRO de la class
// Primero van lso static y luego las propiedades
Person.atributeFromOutside = 'Static attribute generated outside the class';
console.log(Person.atributeFromOutside)