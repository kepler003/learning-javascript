
const rabbit = {
  name: 'Jojo'
}

const animal = {
  isAlive: true,
  sound() {
    console.log('Squeek')
  }
}

rabbit.__proto__ = animal;

rabbit.sound();

for (let prop in rabbit) {
  const hasOwn = rabbit.hasOwnProperty(prop);
  if (hasOwn) console.log(prop);
}