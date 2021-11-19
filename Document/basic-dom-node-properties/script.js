
// console.log(document.body.constructor.name);
// console.log(document.body instanceof HTMLBodyElement);
// console.log(document.body instanceof EventTarget);
// console.dir(document.body);


// console.log(document.body.tagName);
// console.log(document.body.lastChild.tagName);
// console.log(document.body.lastChild.nodeName);
// console.log(document.body.previousSibling.nodeName);
// console.log(document.body.previousSibling.previousSibling.nodeName);
// console.log(document.body.previousSibling.previousSibling.tagName);


// console.log(document.body.innerHTML);
// document.body.innerHTML = 'Hello world';
// console.log(document.body.innerHTML);


// let para = document.querySelector('p');
// para.outerHTML = '<div>Hello world</div>'
// console.log(para);
// para = document.querySelector('div');
// console.log(para);


// const text = document.body.firstChild;
// console.log(text.data);

// const comment = text.nextSibling;
// console.log(comment.data);


// const item1 = document.querySelector('ul > li');
// const item2 = item1.nextElementSibling;
// item1.textContent = '<b>Welcome in my non-bold world</b>';
// item2.innerHTML = '<b>Welcome in my bold world</b>';


// const para = document.getElementsByTagName('p')[0];
// setInterval(() => para.hidden = !para.hidden, 1000);


// const input = document.getElementsByTagName('input')[0];
// let value = input.value;
// setInterval(() => {
//   const currentValue = input.value;
//   if (currentValue === value) return;
//   value = currentValue;
//   console.log(value); 
// }, 10);


console.dir(document.querySelector('input'));