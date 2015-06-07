var toArray = require('./iterator-to-array');

var numbers = [1, 2, 3, 4, 5];

// let even = [ for (n of numbers) if (n % 2 === 0) n ];
var even = (function* () {
  for (var n of numbers) {
    if (n % 2 === 0) {
      yield n;
    }
  }
}());
// equivalent:
// let even = numbers.map(n => { if (n % 2 === 0) return n });

console.log(toArray(even));
