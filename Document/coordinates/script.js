
// const rect = document.getElementsByTagName('div')[0].getBoundingClientRect();

// console.log(rect.width, rect.height);
// console.log(rect.top, rect.right, rect.bottom, rect.left);


// console.log(document.elementFromPoint(50, 50));


function getCoords(elem) {
  const rect = elem.getBoundingClientRect();
  const { scrollX, scrollY } = window;
  
  return {
    top: scrollY + rect.top,
    bottom: scrollY + rect.bottom,
    left: scrollX + rect.left,
    right: scrollX + rect.right,
  };
}

const elem = document.querySelector('.example');
console.log(getCoords(elem));