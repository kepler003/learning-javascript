const name = `Bartek
Pyzocha`;

console.log(name);

const welcome = 'Hello';

for (const char of welcome) {
  console.log(char);
}

const planet = 'Jupiter';
console.log(planet.startsWith('Jup'))
console.log(planet.endsWith('ter'));
console.log(planet.endsWith('te'));

const star = 'Proxima Centauri';
console.log(star.codePointAt(0));
console.log(star.codePointAt(1));

console.log(String.fromCodePoint(star.codePointAt(0)));

const countryA = 'Niemcy';
const countryB = 'Deutschland';

console.log(countryA.localeCompare(countryB));