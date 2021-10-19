
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

const user = new User('Bartek');

user.sayHi();

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(user)));

const Planet = class MyPlanet {
  constructor() {
    this.turns = true
  }
}

const earth = new Planet();
console.log(earth.turns);