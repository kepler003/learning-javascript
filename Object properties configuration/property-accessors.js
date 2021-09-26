
'use strict'

const user = {
  name: 'Bartek',
  surname: 'Pyzocha',

  get fullName() {
    console.log('Searching for user\'s full name...');
    return this.name + ' ' + this.surname;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  }
}

console.log(user.fullName);

// user.fullName = 'Test'; ERROR before defying 'set'

user.fullName = 'Test Testerson';

console.log(user.fullName);