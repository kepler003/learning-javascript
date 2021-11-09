
function makeObservable(target) {
  const handlers = Symbol('handlers');

  target[handlers] = [];

  target.observe = function(handler) {
    this[handlers].push(handler);
  }

  return new Proxy(target, {
    set(target, prop, value) {
      const success = Reflect.set(...arguments);

      if (success) {
        target[handlers].forEach(handler => handler(prop, value));
      }

      return success;
    }
  });
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  console.log(`SET: ${key} = ${value}`);
});

user.observe(key => console.log(`Here's the key: ${key}`));

user.name = "John"; // alerts: SET name=John