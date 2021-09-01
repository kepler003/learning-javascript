const a = 10;

switch (a) {
  case 1:
    console.log(1);
    break;
  case 10:
    console.log(10);
    break;
  case 9:
    console.log(9);
    break;
  case 8:
    console.log(8);
    break;
}
const b = 10;

console.log('-'.repeat(10));

switch (b) {
  case 1:
    console.log(1);
    break;
  case 10:
    console.log(10);
  case 9:
    console.log(9);
  case 8:
    console.log(8);
}

const c = 10;

switch (c) {
  case 10:
  case 9:
    console.log(`It's either 10 or 9`);
    break;
}

const d = 9

switch (d) {
  case 10:
  case 9:
    console.log(`It's either 10 or 9`);
    break;
}