
// const elem = document.getElementById('elem');
// console.log(elem);


// const lis = document.querySelectorAll('li');
// lis.forEach(li => li.style.backgroundColor = 'lightblue');


// const hovers = document.querySelectorAll(':hover');
// hovers.forEach(elem => console.log(elem));


// const listItems = document.querySelectorAll('li');
// for (const item of listItems) console.log(item.matches('[id="list-item"]'));


// const item = document.getElementById('list-item');
// console.log(item.closest('ul'));


// const items = document.getElementsByTagName('li');
// console.log(items);


const item = document.querySelector('#list-item');
const list = item.closest('ul');
console.log(list.contains(item));
console.log(item.contains(item));
console.log(item.contains(list));