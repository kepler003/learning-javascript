
createCal(cal, 2021, 11);

function createCal(container, year, month) {

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  thead.innerHTML = `
    <tr>
      <th>MO</th>
      <th>TU</th>
      <th>WE</th>
      <th>TH</th>
      <th>FR</th>
      <th>SA</th>
      <th>SU</th>
    </tr>
  `;

  const numOfDays = new Date(year, month, 0).getDate();
  const weekDay = new Date(year, month - 1, 1).getDay() || 7;

  // Drawing weeks
  for (let i = 1; i < numOfDays + weekDay;) {
    const tr = document.createElement('tr');
    
    // Drawing days of the week
    for (let j = 1; j <= 7; j++, i++) {
      const td = document.createElement('td');

      if (i - weekDay + 1 > 0 && i - weekDay < numOfDays) {
        td.append(i - weekDay + 1);
      }

      tr.append(td);
    }

    tbody.append(tr);
  }
  
  table.append(thead);
  table.append(tbody);
  container.append(table);
}