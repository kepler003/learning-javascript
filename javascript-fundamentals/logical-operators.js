let name;
let surname;
let age = 24;
console.log(name || surname || age || 'Unknown person');

let a;
let b;
let c = 10;
let d = (a || b || c) + 1;
console.log(d);

let k = null;
let l;
let m;
let n = k && l && m;
console.log(n);