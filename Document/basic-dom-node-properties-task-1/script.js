
for (const item of document.getElementsByTagName('li')) {
  const label = item.firstChild.data.trim();
  const numberOfNestedItems = item.getElementsByTagName('li').length;
  console.log(label + ': ' + numberOfNestedItems);
}