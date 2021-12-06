
const table = document.getElementsByTagName('table')[0];

table.onclick = function(e) {
  const td = e.target.closest('td');

  if (!td) return;
  if (!this.querySelector('tbody').contains(td)) return;

  highlight(td);
}

function highlight(elem, prev) {
  if (prev) prev.style.backgroundColor = '';
  elem.style.backgroundColor = 'red';
  return elem;
}

function highlightDecorator(f) {
  let highlighted;

  return function(elem) {
    f(elem, highlighted);
    highlighted = elem;
  }
}

highlight = highlightDecorator(highlight);