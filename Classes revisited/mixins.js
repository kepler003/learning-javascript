
const sayMixin = {
  say(phrase) {
    console.log(phrase);
  }
}

const sayHiMixin = {
  sayHi() {
    super.say('Hello there!');
  },
  
  sayBye() {
    super.say('Bye bye!')
  }
}

Object.setPrototypeOf(sayHiMixin, sayMixin);

class User {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, sayHiMixin);

const user = new User('Dude');
user.sayHi();
user.sayBye();


// Event mixin

const eventMixin = {
  _eventHandlers: {},

  on(eventName, handler) {
    if (!this._eventHandlers[eventName]) this._eventHandlers[eventName] = [];
    this._eventHandlers[eventName].push(handler);
  },

  off(eventName, handler) {
    const handlers = this._eventHandlers[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  trigger(eventName, ...args) {
    if (!this._eventHandlers[eventName]) return;
    this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
  }
}

class Menu {
  choose(value) {
    this.trigger('select', value);
  }
}

Object.assign(Menu.prototype, eventMixin);

const menu = new Menu();
menu.on('select', (value) => {
  console.log(value);
});
menu.choose('Option 1');