let calculator = {
  read() {
    this.num1 = +prompt('Enter the first value', 0)
    this.num2 = +prompt('Enter the second value', 0)
  },
  sum() {
    return this.num1 + this.num2;
  },
  mul() {
    return this.num1 * this.num2;
  },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );