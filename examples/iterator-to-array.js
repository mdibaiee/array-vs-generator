module.exports = function(iterator) {
  var arr = [];
  for (var i of iterator) {
    arr.push(i);
  }

  return arr;
}
