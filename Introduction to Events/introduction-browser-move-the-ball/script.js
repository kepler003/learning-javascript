
const field = document.querySelector('.field');
const ball = document.querySelector('.ball');

field.addEventListener('click', function(e) {
  const { clientX, clientY } = e;
  
  const { 
    clientWidth: innerWidth, 
    clientHeight: innerHeight,
    clientTop: borderTop,
    clientLeft: borderLeft,
  } = field;
  
  const fieldRect = field.getBoundingClientRect();
  const { x, y } = fieldRect;

  const radius = ball.offsetWidth / 2;

  const clickX = clientX - x;
  const clickY = clientY - y; 
  
  const minX = borderLeft + radius;
  const maxX = borderLeft + innerWidth - radius;
  const minY = borderTop + radius;
  const maxY = borderTop + innerHeight - radius;

  let goToX = clickX - borderLeft - radius;
  let goToY = clickY - borderTop - radius;

  if (clickX < minX) goToX = 0;
  if (clickX > maxX) goToX = innerWidth - radius * 2;
  if (clickY < minY) goToY = 0;
  if (clickY > maxY) goToY = innerHeight - radius * 2;

  ball.style.transform = `translate(${goToX}px, ${goToY}px)`;
});