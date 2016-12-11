function f1(x, y=12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
console.log(f1(3) === 15);

// abriatry function (unknown params count)
function f11() {
  return arguments.length;
}
// Same as:
function f12(...params) {
  // params is a real Array
  return params.length;
}
var c = f12(67, 'shlomo', 6);
console.log(c);


function f2(x, ...y) {
  // y is an Array
  return x * y.length;
}
console.log(f2(3, "hello", true) === 6);

function f3(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument

var nums = [6, 7, 8];
console.log(f3(...nums) === 6)