
const file = document.querySelector('.file');

file.ondrag = () => false;

file.addEventListener('mousedown', function(e) {
  e.preventDefault();
  
  const {
    left: filePosLeft, top: filePosTop,
    right: filePosRight, bottom: filePosBottom,
    width: fileWidth, height: fileHeight
  } = file.getBoundingClientRect();

  const { pageX, pageY, clientX, clientY } = e;

  file.style.position = 'absolute';
  file.style.zIndex = 1000;
  file.classList.add('dragging');

  document.body.append(file);

  function moveAt(x, y) {
    file.style.left = `${x - (clientX - filePosLeft)}px`;
    file.style.top = `${y - (clientY - filePosTop)}px`;
  }

  moveAt(pageX, pageY);

  let dropTarget;

  function onMouseMove(e) {
    moveAt(e.pageX, e.pageY);

    file.style.display = 'none';
    currentDropTarget = document.elementFromPoint(e.clientX, e.clientY);
    file.style.display = '';

    if (dropTarget !== currentDropTarget) {

      if (dropTarget) dropTarget.classList.remove('drop-target');

      if (currentDropTarget.classList.contains('droppable')) {
        currentDropTarget.classList.add('drop-target');
      }

      dropTarget = currentDropTarget;
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  file.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', onMouseMove);
    file.onmouseup = null;

    file.classList.remove('dragging');

    dropTarget.classList.remove('drop-target');
    if (dropTarget.classList.contains('droppable')) {
      file.style.position = '';
      dropTarget.append(file);
    }
  });
});