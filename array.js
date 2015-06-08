console.time('array');

var bigArray = new Array(100000);
for (var i = 0; i < 100000; i++) {
  bigArray[i] = i;
}

var squared = bigArray.map(function(n) {
  return n * n;
});
console.log('First Element:', squared[0]);
console.log('Second Element:', squared[1]);
console.log('Third Element:', squared[2]);
console.log('Forth Element:', squared[3]);

console.timeEnd('array');

console.log('Memory Usage: ', process.memoryUsage());
