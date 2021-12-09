
// document.addEventListener('pointerdown', function(e) {
//   console.log(e.pointerId, e.isPrimary);
// });


const thumb = document.querySelector('.thumb');
const slider = document.querySelector('.slider');

thumb.onpointerdown = (e) => {
  thumb.setPointerCapture(e.pointerId);
  
  thumb.onpointermove = (e) => {
    const { x, width } = slider.getBoundingClientRect();
    let posX = e.clientX - x - (thumb.offsetWidth / 2);
    if (posX < 0)  posX = 0;
    if (posX > width - thumb.offsetWidth) posX = width - thumb.offsetWidth;
    thumb.style.left = `${posX}px`;
  }

  thumb.onpointerup = () => {
    thumb.onpointermove = null;
    thumb.onpointerup = null;
  }
}