
const user = {
  hello() {
    console.log('Hello')
  }
}

console.log(JSON.stringify(user));

const planet = {
  name: 'Earth'
}

const moon = {
  goesAround: planet.name
}

console.log(JSON.stringify(moon));