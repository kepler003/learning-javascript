
class CoffeMachine {
  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }
  
  _waterAmount = 0;

  get waterAmount() {
    return this._waterAmount;
  }

  set waterAmount(amount) {
    if (amount < 0) amount = 0;
    this._waterAmount = amount;
  }

  setPower(power) {
    if (power < 0) power = 0;
    this._power = power;
  }
}

const coffeMachine = new CoffeMachine(100);
coffeMachine.waterAmount = -100;
console.log(coffeMachine.waterAmount);

coffeMachine.setPower(1000);
console.log(coffeMachine.power);