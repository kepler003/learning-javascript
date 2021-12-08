
// const btn = document.getElementsByTagName('button')[0];

// btn.addEventListener('mousedown', function(e) {
//   // console.log(e.button);
//   console.log(e.buttons);
// });

const btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', function(e) {
  if (e.altKey && e.shiftKey) {
    console.log('Alt + Shift + Click works!');
  } else {
    return;
  }
});