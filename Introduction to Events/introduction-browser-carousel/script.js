
const carousel = document.querySelector('.carousel');

carousel.addEventListener('click', function(e) {
  const { target } = e;
  const ifPrevClicked = target.classList.contains('prev');
  const ifNextClicked = target.classList.contains('next');

  if (!ifPrevClicked && !ifNextClicked) return;

  let currentSlideIndex = +carousel.getAttribute('currentslideindex');
  const list = carousel.getElementsByTagName('ul')[0];
  const slides = carousel.getElementsByTagName('li');

  if (ifPrevClicked) {

    if (currentSlideIndex === 0) return;
    currentSlideIndex--;

  } else if (ifNextClicked) {

    if (currentSlideIndex === slides.length - 1) return;
    currentSlideIndex++;
  }
  
  list.style.transform = `translateX(-${100 * currentSlideIndex}%)`;
  carousel.setAttribute('currentslideindex', currentSlideIndex);
});