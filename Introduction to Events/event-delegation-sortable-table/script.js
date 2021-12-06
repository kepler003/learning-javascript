
const grid = document.querySelector('.grid');

grid.addEventListener('click', function(e) {
  const target = e.target;
  const tbody = this.querySelector('tbody');
  const types = ['number', 'string'];
  const type = target.dataset.type;

  if (!types.includes(type)) return;

  let tds = this.querySelectorAll(`
    td:nth-child(${types.indexOf(type) + 1})
  `);

  tds = Array.from(tds).sort((tdA, tdB) => {
    const textA = tdA.textContent;
    const textB = tdB.textContent;

    switch (type) {
      case 'number':
        return textA - textB;
      case 'string':
        return textA.localeCompare(textB);
    }
  });

  for (const td of tds) {
    const tr = td.closest('tr');
    tbody.append(tr);
  }
});