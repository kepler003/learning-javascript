
const list = document.querySelector('ul');

list.addEventListener('click', function(e) {
  const target = e.target;

  if (!target.classList.contains('msg__btn--close')) return;

  const li = target.closest('li');

  if (!li) return;
  if (!list.contains(li)) return;

  li.querySelector('.msg').style.opacity = 0;
  li.querySelector('.msg').style.transform = 'translateY(-25%)';

  setTimeout(() => {
    li.remove();
  }, 300);
});