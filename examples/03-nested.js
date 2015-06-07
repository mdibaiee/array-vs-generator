var toArray = require('./iterator-to-array');

// yield 0...5
var generator = (function* () {
  for (var i = 0; i < 6; i++) {
    yield i;
  }
}());

// yield three numbers after number
var after = function* (number) {
  for (var i = 1; i < 4; i++) {
    yield number + i;
  }
};

// for each number of 0...5, yield an array of 3 numbers after it
var nested = (function* () {
  for (var n of generator) {
    yield toArray(after(n));
  }
}());

console.log(toArray(nested));
