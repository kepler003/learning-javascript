
// The table with id="age-table".
const ageTable = document.getElementById('age-table');
console.log(ageTable);

// All label elements inside that table (there should be 3 of them).
const labels = ageTable.getElementsByTagName('label');
console.log(labels);

// The first td in that table (with the word “Age”).
const td = ageTable.getElementsByTagName('td')[0];
console.log(td);

// The form with name="search".
const form = document.querySelector('form[name="search"]');
console.log(form);

// The first input in that form.
const inputs = form.getElementsByTagName('input');
console.log(inputs[0]);

// The last input in that form.
const lastInput = inputs[inputs.length - 1];
console.log(lastInput);