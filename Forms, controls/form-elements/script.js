
const form = document.forms[0];
const fieldset = form.elements.userdata;
const username = fieldset.elements.username;
const password = fieldset.elements.password;
const parentForm = username.form;

console.log(form);
console.log(fieldset);
console.log(username);
console.log(password);
console.log(parentForm);

username.oninput = () => {
  console.log(username.value);
}

const selected = Array.from(form.continent.options)
  .filter(option => option.selected)
  .map(option => option.value);
console.log(selected);

setTimeout(() => {
  console.log(form.continent.selectedIndex);
  form.continent.options[2].selected = true;
  console.log(form.continent.value);
}, 2000);