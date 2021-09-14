
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

const client = new User('Bartek');

console.log(client);


function Person(name) {
  if (!new.target) {
    return new Person(name);
  }

  this.name = name;
}

const user = Person('Bartek');
const user2 = new Person('Paul');
console.log(user.name, user2.name);


function BigUser(name) {
  this.name = name;

  return {
    name: 'Godzilla'
  }
}

const monster = new BigUser('King Kong');
console.log(monster.name);