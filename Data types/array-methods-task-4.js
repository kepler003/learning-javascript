const arr = [5, 2, 1, -10, 8];

const sort = arr => {
  arr.sort((a, b) => b - a);
}

sort(arr);

console.log(arr); // 8, 5, 2, 1, -10