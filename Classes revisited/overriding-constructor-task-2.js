
class Clock {
  render() {
    const date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let minutes = date.getMinutes();
    if (minutes < 10) hours = '0' + minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) hours = '0' + seconds;

    const output = `${hours}:${minutes}:${seconds}`;
    console.log(output);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }

  stop() {
    clearInterval(this.timer);
  }
}

class ExtendClock extends Clock {
  constructor(precision = 1000) {
    super();
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

const clock = new ExtendClock(100);
clock.start();
setTimeout(() => clock.stop(), 10000);