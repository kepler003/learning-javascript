
const data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "apple tree": {},
      "magnolia": {}
    }
  }
}

const container = document.getElementById('container');
createTree(container, data);

function createTree(container, data) {
  const ul = document.createElement('ul');

  if (!Object.keys(data).length) return;

  for (const prop in data) {
    const li = document.createElement('li');
    li.append(prop);

    createTree(li, data[prop]);

    ul.append(li);
  }

  container.append(ul);
}