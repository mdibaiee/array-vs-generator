console.time('generator');

var bigGenerator = function* () {
  for (var i = 0; i < 100000; i++) {
    yield i;
  }
};

var squared = (function* () {
  for (var n of bigGenerator()) {
    yield n * n;
  }
}());

console.log('First Element:', squared.next().value);
console.log('Second Element:', squared.next().value);
console.log('Third Element:', squared.next().value);
console.log('Forth Element:', squared.next().value);

console.timeEnd('generator');

console.log('Memory Usage: ', process.memoryUsage());
