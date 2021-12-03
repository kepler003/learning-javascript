
window.addEventListener('click', function(e) {
  const coordsElem = document.getElementsByClassName('coords')[0];
  coordsElem.textContent = `${e.clientX}:${e.clientY}`
});

const field = document.querySelector('.field');
const rect = field.getBoundingClientRect(field);
console.log(`Upper-left, outer corner: ${rect.left}:${rect.top}`);
console.log(`Bottom-right, outer corner: ${rect.right}:${rect.bottom}`);
console.log(`Upper-left, inner corner: ${rect.left + field.clientLeft}:${rect.top + field.clientTop}`);
console.log(`Bottom-right, inner corner: ${rect.right - (rect.width - field.clientWidth) / 2}:${rect.bottom - (rect.height - field.clientHeight) / 2}`);