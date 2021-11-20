
// const input = document.querySelector('input');
// console.log(typeof input.id, input.id.length);
// console.log(input.type);
// console.log(input.something);


// console.log(document.querySelector('input').type)
// console.log(document.querySelector('div').type)


// console.log(document.querySelector('input').hasAttribute('something'));
// console.log(document.querySelector('input').getAttribute('something'));
// document.querySelector('input').removeAttribute('something');
// document.querySelector('input').setAttribute('newAttribute', '123');
// for (const attr of document.querySelector('input').attributes) console.log(attr.name, attr.value);

//// A
// const input = document.querySelector('input');
// input.setAttribute('value', 'Placeholder');
// console.log(input.value);

// input.value = 'Another value';
// console.log(input.value)
// console.log(input.getAttribute('value'));
// console.log(input.outerHTML);


//// B
// const user = {
//   name: 'John',
//   age: 24
// }
// for (const div of document.querySelectorAll('[show-info]')) {
//   const field = div.getAttribute('show-info');
//   div.innerHTML = user?.[field] || ''; 
// }


let value = document.querySelector('div[data-user-height]').dataset.userHeight;
console.log(value);
value = 200;
console.log(value);
console.log(document.querySelector('div[data-user-height]').outerHTML);
document.querySelector('div[data-user-height]').dataset.userHeight = 200;
console.log(document.querySelector('div[data-user-height]').dataset.userHeight);