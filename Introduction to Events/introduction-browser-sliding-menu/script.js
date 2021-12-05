
const btn = document.getElementsByTagName('button')[0];
const list = document.getElementsByTagName('ul')[0];

btn.addEventListener('click', function() {
  list.hidden = !list.hidden;
  btn.classList.toggle('isOpen');
});