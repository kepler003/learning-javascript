
function positionNote(elem, anchor, position) {
  elem.style.position = 'absolute';
  const { top, left, right, bottom } = anchor.getBoundingClientRect();

  if (position === 'top') {

    elem.style.top = `${top}px`;
    elem.style.left = `${left}px`;
    elem.style.transform = 'translateY(-100%)'

  } else if (position === 'right') {

    elem.style.top = `${top}px`;
    elem.style.left = `${right}px`

  } else if (position === 'bottom') {
    
    elem.style.top = `${bottom}px`;
    elem.style.left = `${left}px`;
  }

  anchor.append(elem);
}

const note = document.createElement('div');
note.textContent = 'Lorem ipsum dolor sit amet';
note.classList.add('note');

positionNote(note, document.querySelector('.anchor'), 'bottom');