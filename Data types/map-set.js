
const map = new Map();

map.set(1, true);
console.log(map.get(1));

map.set({}, {name: 'Bartek'});
console.log(map.get({}));

const obj = {};
map.set(obj, {name: 'Bartek'});
console.log(map.get(obj));

const veggies = new Map([
  ['cucumber', 200],
  ['tomatoes', 300],
  ['potatoes', 50]
]);

for (const vegetable of veggies.keys()) console.log(vegetable);
for (const amount of veggies.values()) console.log(amount);
for (const entry of veggies) console.log(entry);

const user = {
  name: 'Bartek',
  age: 24
}

const arrayUser = Object.entries(user);
console.log(arrayUser);

try {
  arrayUser.get('name');
} catch(err) {
  console.log('ERROR');
}

const mapUser = new Map(arrayUser);
console.log(arrayUser);

try {
  console.log(mapUser.get('name'));
} catch(err) {
  console.log('ERROR');
}