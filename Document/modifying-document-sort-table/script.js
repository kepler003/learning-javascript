
const tbody = document.querySelector('tbody');
let rows = Array.from(document.querySelectorAll('tbody tr'));

rows = rows.sort((rowA, rowB) => {
  const nameA = rowA.querySelector('td:first-child').textContent;
  const nameB = rowB.querySelector('td:first-child').textContent;
  return nameA.localeCompare(nameB);
});

rows.forEach(row => tbody.append(row));