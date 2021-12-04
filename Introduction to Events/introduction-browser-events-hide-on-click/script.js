
const btn = document.querySelector('.btn');
const para = document.getElementsByTagName('p')[0];

btn.addEventListener('click', function() {
  para.hidden = true;
});