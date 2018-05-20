// splat function 24'th page
function splat(fun) {
  // fun = function(x, y) { return x + y };
  return function(array) {
    return fun.apply(null, array);
  }
}
var addArrayElements = splat(function(x, y) { return x + y });
addArrayElements([1, 2]);

