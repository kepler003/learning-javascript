
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  static get [Symbol.species]() {
    return Array;
  }
}

const arr = new PowerArray(1, 12, 5, 8, 9, 0);
console.log(arr.isEmpty());

const filteredArr = arr.filter(item => item >= 10);
console.log(filteredArr.isEmpty());