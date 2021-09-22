
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

const sumSalaries = (salaries) => {
  return Object.values(salaries)
    .reduce((sum, salary) => sum + salary, 0);
}

console.log(sumSalaries(salaries)); // 650