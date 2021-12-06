
const tree = document.querySelector('.tree');

tree.addEventListener('click', function(e) {
  const target = e.target;
  const childUl = target.querySelector('ul');
  
  if (target.tagName.toString() !== 'LI') return;
  if (!childUl) return;

  childUl.hidden = !childUl.hidden;
});