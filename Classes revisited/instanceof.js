
class Rabbit {}

const rabbit = new Rabbit();

console.log(rabbit instanceof Rabbit);

const user = {
  [Symbol.toStringTag]: "User"
}

console.log(user.toString());