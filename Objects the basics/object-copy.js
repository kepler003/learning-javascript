let user = {
  name: 'Bartek',
  age: 24,
}

let person = user;

user.name = 'Tony';

console.log(person.name);

let newUser = {};
Object.assign(newUser, user, person);
console.log(newUser);

const apple = {
  type: 'fruit',
  tasty: true,
  colors: {
    red: 'rgb(255, 0, 0)',
    green: 'rgb(0, 255, 0)',
  },
}

const banana = Object.assign({}, apple);
console.log(banana);
apple.colors.red = '#ff0000';
console.log(banana);

let chair = {
  material: 'wood',
  color: 'brown'
}

console.log(chair);

chair = {
  price: '200 PLN',
  legs: 4
}

console.log(chair);

const table = {
  material: 'wood',
  color: 'brown'
}

console.log(table);

table.material = 'plastic';

console.log(table);

const earth = {
  type: 'planet',
  color: 'blue',
  temperatures: {
    hot: 40,
    cold: -35
  }
}

const moon = Object.assign({}, earth);

console.log(moon === earth);
console.log(moon.temperatures === earth.temperatures);

const mars = {...earth};
console.log(mars.temperatures === mars.temperatures);