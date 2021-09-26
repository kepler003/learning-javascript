
'use strict'

const user = {
  name: 'Bartek',
  age: 24,
  color: 'blue'
}

const descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor);

Object.defineProperty(user, 'food', {
  value: 'Pizza'
});

console.log(Object.getOwnPropertyDescriptor(user, 'food'));

// user.food = 'Hamburger'; ERROR

