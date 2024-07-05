console.warn('************  Singleton  ************');
// SINGLETON: instancia unica de la clase, por mas que instancie muchas veces, siempre se crea el mismo

class Singleton {
  // Si se define una variable y no se le asigna valor -> undefined
  static instance;
  name = '';

  constructor(name = '') {
    // undefined doble negado -> false
    if( !!Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
    this.name = name;
  }
}

const singleton = new Singleton('Iron Man');
const singleton2 = new Singleton('Spider Man');
const singleton3 = new Singleton('Black Panther');

// Las tres instancias apuntan al mismo espacio de memoria
console.log(`Name in the instance 1 is: ${singleton.name}`);
console.log(`Name in the instance 2 is: ${singleton2.name}`);
console.log(`Name in the instance 3 is: ${singleton3.name}`);