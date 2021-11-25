
let timer;

function start() {
  clearInterval(timer);

  writeTime();

  let ms = 1000 - new Date().getMilliseconds();
  timer = setInterval(() => {
    writeTime();
    ms = 1000;
  }, ms);

  function writeTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const hoursElem = document.querySelector('.hours');
    const minutesElem = document.querySelector('.minutes');
    const secondsElem = document.querySelector('.seconds');

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    hoursElem.textContent = hours;
    minutesElem.textContent = minutes;
    secondsElem.textContent = seconds;
  }
}

function stop() {
  clearInterval(timer);
}