
document.addEventListener('mousedown', function(e) {
  const target = e.target;
  if (!target.classList.contains('draggable')) return;

  // ### Prepare for moving
  // Get current position relative to window
  const {
    left: targetLeft,
    top: targetTop,
  } = target.getBoundingClientRect();

  const { clientX, clientY } = e;

  const scrollY = window.scrollY;
  
  // Set elem's position to absolute and relative to document
  target.style.position = 'absolute';
  target.style.margin = '0';
  target.style.zIndex = '1000';
  moveTo(clientX, clientY);
  
  document.body.append(target);
  
  // Prepare for mousemove
  function onMouseMove(e) {
    moveTo(e.pageX, e.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);
  window.onblur = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.onmouseup = null;
    window.onblur = null;
    target.ondragstart = null;
  }

  target.ondragstart = (e) => e.preventDefault();
  
  // Prepare for mouseout
  document.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    document.onmouseup = null;
    window.onblur = null;
    target.ondragstart = null;
  }

  // ### Helper functions
  function moveTo(x, y) {

    const { clientWidth, clientHeight } = document.documentElement;

    let posX = x - (clientX - targetLeft);
    let posY = y - (clientY - targetTop);

    if (posX < 0) posX = 0;
    if (posY < 0 + window.scrollY) posY = 0 + window.scrollY;

    if (posX + target.offsetWidth > clientWidth) posX = clientWidth - target.offsetWidth;
    if (posY + target.offsetHeight > clientHeight + window.scrollY) posY = clientHeight - target.offsetHeight + window.scrollY;
    
    target.style.left = `${posX}px`;
    target.style.top = `${posY}px`;
  }
});