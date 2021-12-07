
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', function(e) {
  const target = e.target;
  const isThumbnail = target.classList.contains('gallery__thumbnail-img');

  if (!isThumbnail) return;

  const mainImg = gallery.querySelector('.gallery__main-img');
  const src = target.getAttribute('src');
  
  mainImg.setAttribute('src', src);
});