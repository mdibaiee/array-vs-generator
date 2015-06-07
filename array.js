console.time('array');

var bigArray = new Array(100000);
for (var i = 0; i < 100000; i++) {
  bigArray[i] = i;
}

var squared = bigArray.map(function(n) {
  return n * n;
});
console.log('First Element:', squared[0]);

console.timeEnd('array');

console.log('Memory Usage: ', process.memoryUsage());
