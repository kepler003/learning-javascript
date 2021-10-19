
function f() {
  console.log("Hello!");
}

Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
}

f.defer(5000); // shows "Hello!" after 5 seconds