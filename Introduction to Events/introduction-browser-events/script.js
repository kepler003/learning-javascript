
// function count(num) {
//   for (let i = 1; i <= num; i++) {
//     console.log(i);
//   }
// }


// const input = document.querySelector('input');
// input.onclick = function() {
//   console.log('Click');
// }


// document.addEventListener('DOMContentLoaded', function(){
//   console.log('Loaded');
//   console.log(document.querySelector('input'));
// });


// const obj = {
//   handleEvent(e) {
//     console.log(e.type, e.currentTarget);
//   }
// }

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', obj);


class Menu {
  handleEvent(e) {
    switch (e.type) {
      case 'mousedown':
        e.currentTarget.innerHTML = 'Mouse has been dropped';
        break;
      case 'mouseup':
        e.currentTarget.innerHTML = 'Mouse is flying again';
        break;
    }
  }
}

const obj = new Menu();

const btn = document.querySelector('.btn');
btn.addEventListener('mousedown', obj);
btn.addEventListener('mouseup', obj);