
function addNewContent() {
  while (1) {
    const windowHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scroll = window.scrollY;

    if (!(scroll + windowHeight + 150 >= scrollHeight)) break;

    const item = document.createElement('p');
    item.textContent = new Date();
    document.body.append(item);
  }
}

addNewContent();
window.onscroll = () => addNewContent();