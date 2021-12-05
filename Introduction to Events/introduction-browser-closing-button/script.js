
window.addEventListener('click', function(e) {
  if (!e.target.classList.contains('card__btn--close')) return;

  const listItem = e.target.closest('li');
  if (!listItem) return;

  listItem.remove();
});