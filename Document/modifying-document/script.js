
// const div = document.createElement('div');
// div.className = 'alert';
// div.innerHTML = '<strong>Hi there!</strong> You\'ve read an important message.';
// document.body.append(div);


// document.body.prepend('<p>Hello world</p>', document.createElement('br'), '<div>Hello again</div>');


// document.body.insertAdjacentHTML('afterbegin', `
//   <div>
//   <strong>Hello</strong> World!
//   </div>
// `);


// const div = document.createElement('div');
// div.className = 'alert';
// div.innerHTML = '<strong>Hi there!</strong> You\'ve read an important message.';
// document.body.append(div);
// setTimeout(() => div.remove(), 2000);


// const div = document.querySelector('.alert');
// const div2 = div.cloneNode(true);
// div2.querySelector('strong').innerHTML = 'Bye there!';
// div.after(div2);


// B
function getList() {
  const fragment = new DocumentFragment();

  for (let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    li.append('list item: ' + i);
    fragment.append(li);
  }

  return fragment;
}

document.body.append(getList());