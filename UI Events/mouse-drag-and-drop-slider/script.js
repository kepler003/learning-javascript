
const thumb = document.querySelector('.thumb');
thumb.addEventListener('mousedown', function(e) {
  const path = thumb.closest('.slider');
  const {
    left: pathLeft,
    width: pathWidth,
  } = path.getBoundingClientRect();

  const { clientWidth: thumbWidth } = thumb;

  const minX = pathLeft;
  const maxX = pathLeft + pathWidth - thumbWidth;

  function moveAt(x) {
    x = x - pathLeft - thumbWidth / 2;

    if (x < 0) x = 0;
    if (x > pathWidth - thumbWidth) x = pathWidth - thumbWidth;
    
    thumb.style.left = `${x}px`;

    document.getElementsByTagName('p')[0]
      .textContent = Math.round(x / (pathWidth - thumbWidth) * 100).toString() + '%';
  }

  moveAt(e.clientX);

  function onMouseMove(e) {
    moveAt(e.clientX);
  }

  document.addEventListener('mousemove', onMouseMove);

  document.onmouseup = () => {
    document.removeEventListener('mousemove', onMouseMove);
    thumb.onmouseup = null;
  }
})