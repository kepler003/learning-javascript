
function getScrollbarWidth() {
  const elem = document.body;
  console.log(elem.offsetWidth - elem.clientWidth);
}

setTimeout(() => getScrollbarWidth(), 1000);