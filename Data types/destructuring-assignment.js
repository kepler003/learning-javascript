
const obj = {
  name: 'Bartek',
  age: 24,
  country: 'Poland'
}

for (const [key, value] of Object.entries(obj)) {
  console.log(key + ': ' + value);
}

function hello({name = 'User'} = {}) {
  console.log(name);
}

const user = {
  name: 'Bartek'
}

hello();