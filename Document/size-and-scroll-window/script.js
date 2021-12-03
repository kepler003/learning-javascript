
// console.log(document.documentElement.clientHeight);


// const scrollHeight = Math.max(
//   document.body.scrollHeight, document.documentElement.scrollHeight,
//   document.body.offsetHeight, document.documentElement.offsetHeight,
//   document.body.clientHeight, document.documentElement.clientHeight,
// );

// console.log(scrollHeight);


// console.log(window.pageXOffset);
// console.log(window.pageYOffset);


// setTimeout(() => {
//   window.scrollBy(0, 100);
// }, 2000);

// window.scrollByY = function scrollByY(y) {
//   return window.scrollBy(0, y);
// }

// setTimeout(() => {
//   window.scrollByY(100);
// }, 1000);


setTimeout(() => {
  document.body.style.overflow = 'hidden'

  setTimeout(() => {
    document.body.style.overflow = '';
  }, 2000);
}, 1000);