
let user = {
  name: 'Bartek',
};
console.log(user.noSuchKey === undefined);

console.log('name' in user);
console.log('age' in user);

const planet = {
  name: 'Earth',
  color: 'blue',
  age: 'very old',
  hasLife: true,
}

for (const key in planet) {
  console.log(key + ': ' + planet[key]);
}