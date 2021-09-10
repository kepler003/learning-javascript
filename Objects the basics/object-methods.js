
const user = {
  sayHi: function() {
    console.log('Hi!');
  }
}

user.sayHi();

const anotherUser = {
  sayHi() {
    console.log('Hi from me too');
  }
}

anotherUser.sayHi();

const person = {
  name: 'Bartek',
  sayName() {
    console.log(this.name);
  }
}

person.sayName();