console.warn("************** Constructores multiples **************");

class Person3 {
  static forObject({firstName, lastName, country}) {
    return new Person3(firstName, lastName, country);
  }

  constructor(firstName, lastName, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
  }

  getInfo() {
    console.log(`${this.firstName}, ${this.lastName}, ${this.country}`);
  }
}

const firstName1 = "Melisa",
  lastName1 = "Flores",
  country1 = "Guatemala";

const euge = {
  firstName: 'Maria Eugenia',
  lastName: 'Costa',
  country: 'Argentina'
}

const persona1 = new Person3(firstName1, lastName1, country1);
const persona2 = Person3.forObject(euge);

persona1.getInfo();
persona2.getInfo();
