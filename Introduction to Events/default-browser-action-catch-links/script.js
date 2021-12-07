
document.addEventListener('click', function(e) {
  const target = e.target;
  
  if (target.tagName !== 'A') return;

  if (!confirm(`Leave for ${target.textContent}?`)) {
    e.preventDefault();
  }
});