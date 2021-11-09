
// const target = {};
// const proxy = new Proxy(target, {});

// proxy.test = 5;

// console.log(target.test);
// console.log(proxy.test);

// for (const key in proxy) {
//   console.log(key);
// }


// const numbers = new Proxy([1, 2, 3], {
//   get(target, prop) {
//     if (prop in target) {
//       return target[prop];
//     } else {
//       return 0;
//     }
//   }
// });

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);


// const numbers = new Proxy([], {
//   set(target, prop, val) {
//     if (typeof val == 'number') {
//       target[prop] = val;
//       return true;
//     } else {
//       return false;
//     }
//   }
// });

// numbers.push(10);
// console.log(numbers);
// numbers.push(0);
// console.log(numbers);
// // numbers.push('a'); ERROR


// const user = new Proxy(
//   {
//     name: 'John',
//     age: 30,
//     _password: '***'
//   },
//   {
//     ownKeys(target) {
//       return Object.keys(target).filter(key => !key.startsWith('_'));
//     }
//   }
// );

// for (prop in user) console.log(prop);
// console.log(Object.keys(user));
// console.log(Object.values(user));


// const user = new Proxy({}, {
//   ownKeys(target) {
//     return ['1', '2', '3']
//   },

//   getOwnPropertyDescriptor(target, prop) {
//     return {
//       enumerable: true,
//       configurable: true
//     }
//   }
// });

// console.log(Object.keys(user));


// let user = {
//   name: 'John',
//   _password: 'secret'
// }

// user = new Proxy(user, {
//   get(target, prop) {
//     if (prop.startsWith('_')) throw new Error('Access denied');
//     const value = target[prop];
//     return (typeof value === 'function') ? value.bind(target) : value;
//   },
//   set(target, prop, val) {
//     if (prop.startsWith('_')) throw new Error('Access denied');
//     target[prop] = val;
//     return true;
//   },
//   deleteProperty(target, prop) {
//     if (prop.startsWith('_')) throw new Error('Access denied');
//     delete target[prop];
//     return true;
//   },
//   ownKeys(target) {
//     return Object.keys(target).filter(key => !key.startsWith('_'));
//   }
// });

// try {
//   console.log(user._password);
// } catch(err) { console.log(err) }

// try {
//   user._password = 'Hello';
// } catch(err) { console.log(err) }


// const range = new Proxy(
//   {
//     start: 1,
//     end: 20
//   },
//   {
//     has(target, prop) {
//       return target.start <= prop && prop <= target.end;
//     }
//   }
// );

// console.log(5 in range);
// console.log(15 in range);
// console.log(25 in range);


// function delay(f, ms) {
//   return new Proxy(f, {
//     apply(target, thisArg, args) {
//       setTimeout(() => target.apply(thisArg, args), ms);
//     }
//   });
// }

// function sayHi() {
//   console.log('Hi');
// }

// sayHi = delay(sayHi, 3000);
// sayHi(); // Hi // after 3 seconds


// const user = {};
// Reflect.set(user, 'name', 'john');
// console.log(user.name);


let user = {
  name: 'John'
}

user = new Proxy(user, {
  get(target, prop, receiver) {
    console.log(`GET ${prop}`);
    return Reflect.get(target, prop, receiver);
  },

  set(target, prop, val, receiver) {
    console.log(`SET ${prop} with value ${val}`);
    return Reflect.set(target, prop, val, receiver);
  }
});

user.name;
user.name = 'Mike';