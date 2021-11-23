
// function clear(elem) {
//   while (elem.firstChild) {
//     elem.firstChild.remove();
//   }
// }

function clear(elem) {
  elem.innerHTML = '';
}

clear(document.getElementById('elem'));