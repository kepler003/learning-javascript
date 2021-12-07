
// const btn = document.querySelector('.elem');
// const customEvent = new Event('click');

// btn.dispatchEvent(customEvent);

// btn.addEventListener('click', function(e) {
//   console.log(e.isTrusted);
// });


document.addEventListener('hello', function(e) {
  alert(`Hello from ${e.target.tagName}`);
});

const elem = document.querySelector('.elem');
const customEvent = new Event('hello', { bubbles: true });
elem.dispatchEvent(customEvent);