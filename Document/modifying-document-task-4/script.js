
function createList() {
  const ul = document.createElement('ul');
  document.body.prepend(ul);
}

function askForText() {
  const ul = document.querySelector('ul');
  
  while (true) {
    const msg = prompt('Enter text', '');
    if (!msg) break;

    const li = document.createElement('li');
    li.textContent = msg;

    ul.append(li);
  }
}

function runApp() {
  createList();
  askForText();
}

runApp();