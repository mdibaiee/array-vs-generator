var toArray = require('./iterator-to-array');

var generator = function* () {
  for (var i = 0; i < 6; i++) {
    yield i;
  }
};

// let squared = ( for (n of generator()) n * n );
var squared = (function* () {
  for (var n of generator()) {
    yield n * n;
  }
}());
// equivalent (not lazy):
// let squared = Array.from(generator()).map(n => n * n);

console.log(toArray(squared));
