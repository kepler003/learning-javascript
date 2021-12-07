
const btn = document.getElementsByTagName('button')[0];

document.addEventListener('contextmenu', function(e) {
  if (e.defaultPrevented) return;
  e.preventDefault();
  alert('Document context menu');
});

btn.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  alert('Button context menu');
});