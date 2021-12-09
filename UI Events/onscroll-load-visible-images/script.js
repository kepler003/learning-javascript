
function loadImgs() {
  const imgs = document.querySelectorAll('img[data-src]');
  
  for (const img of imgs) {
    if (!checkIfImgInView(img)) continue;
    if (checkIfImgLoaded(img)) continue;
    img.setAttribute('src', img.dataset.src);
  }
}


function checkIfImgInView(img) {
  const windowHeight = document.documentElement.clientHeight;
  const imgPosTop    = img.getBoundingClientRect().top;
  const imgPosBottom = img.getBoundingClientRect().height + imgPosTop;

  const isTopVisible    = 0 < imgPosTop && imgPosTop < windowHeight;
  const isBottomVisible = 0 < imgPosBottom && imgPosBottom < windowHeight;

  return isTopVisible || isBottomVisible;
}

function checkIfImgLoaded(img) {
  return img.getAttribute('src') === img.getAttribute('data-src');
}

loadImgs();
window.onscroll = loadImgs;