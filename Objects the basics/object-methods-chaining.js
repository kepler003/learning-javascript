// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { 
//     console.log( this.step );
//   }
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { 
    console.log( this.step );
    return this;
  }
};

ladder.up().up().down().showStep(); // 1