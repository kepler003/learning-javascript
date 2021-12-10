
console.log(genres.value);

const option = new Option('Classic', 'classic', true, true);
genres.setAttribute('multiple', true);
genres.append(option);

console.log(genres.value);