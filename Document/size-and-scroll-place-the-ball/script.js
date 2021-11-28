
const field = document.querySelector('.field');
const ball = document.querySelector('.ball');

const { clientWidth, clientHeight } = field;
const { width, height } = getComputedStyle(ball);

field.style.position = 'relative';
ball.style.position = 'absolute';
ball.style.left = `${clientWidth / 2 - width.replace('px', '') / 2}px`; 
ball.style.top = `${clientHeight / 2 - height.replace('px', '') / 2}px`; 