console.warn('*************  Classes Heredadas  ***************');

class Person2 {
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

    Person2._count++;
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

// Clase hija / SubClase / Clase heredada

class Hero extends Person2 {
  clan = 'No clan';

  constructor(name, code, phrase, clan) {
    super(name, code, phrase); // invoco al constructor de la clase padre
    this.clan = clan;
  }

  howIAm() {
    console.log(`My clan: ${this.clan}`)
    super.howIAm();
  }
}

const ironMan = new Hero('Tony Stark', 'IronMan', 'Soy IronMan', 'Avengers');
console.log(ironMan);
ironMan.howIAm();