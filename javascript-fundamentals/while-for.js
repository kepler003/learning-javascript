outer: for (let i = 0; i < 10; i++) {
  for(let j = 0; j < 100; j++) {
    if (i == 5 && j == 55) break outer;
    console.log(i, j);
  }
}