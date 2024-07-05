console.warn('**** Classes ****');

class Person {
  // Atributos
  name;
  code;
  phrase;
  
  // Constructor
  constructor(name = 'No name', code = 'No code', phrase = 'No phrase') {
    this.name = name;
    this.code = code;
    this.phrase = phrase;
  }

  // Metodo
  howIAm() {
    console.log(`I'm ${this.nombre}`);
  }

  myPhrase() {
    this.howIAm();
    console.log(`${this.code} says: ${this.phrase}`);
  }
}

const spiderMan = new Person('Peter Parker', 'Spider', 'Soy Spiderman')
spiderMan.howIAm();
spiderMan.myPhrase();