console.warn('****************  ESNext  *****************');
class Rectangle {
  // Private attribute
  #area = 0;

  constructor(base = 0, height = 0) {
    this.base = base;
    this.height = height;

    this.#area = base * height;
  }

  // Al momento no se puede hacer metodos privados en JS
  doubleArea() {
    return this.#area * 2;
  }
}

const rectangle = new Rectangle(10, 15);
console.log('rectangle: ', rectangle);