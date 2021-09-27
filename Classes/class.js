
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

const Planet = class {
  explode() {
    console.log('Boom!!!');
  }
}

const earth = new Planet();
earth.explode();

function makeClass(phrase) {
  return class {
    sayPhrase() {
      console.log(phrase);
    }
  }
}

(new (makeClass('ABC'))).sayPhrase();