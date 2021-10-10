
class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }

    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }
}

const coffeeMachine = new CoffeeMachine(100);

coffeeMachine.waterAmount = -10;

console.log(coffeeMachine.waterAmount);