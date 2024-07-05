console.warn('**** Classes ****');

class Person {
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

const spiderMan = new Person('Peter Parker', 'Spider', 'Soy Spiderman')
spiderMan.howIAm();
console.log('*************');
spiderMan.myPhrase();
console.log('*************');
spiderMan.setFavoriteFood = 'Pizza';
console.log(spiderMan.getFavoriteFood);