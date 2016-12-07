var a, b, rest;
[a, b] = [1, 2];
console.log('a, b:', a, b);

// Swapping variables
var x = 1;
var y = 3;
[x, y] = [y, x];
console.log('x, y:', x, y); 


// Ignoring some returned values
function f() {
  return [11, 22, 33];
}

var [a1, , b1] = f();
console.log('a1, b1: ', a1, b1); 

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a, b, rest); 


// Object destructuring
// Basic assignment
var o = {p: 42, q: true};
var {p, q} = o;
console.log('p. q:', p, q); 

// Assignment without declaration:
var a, b;
({a, b} = {a:1, b:2});

var {j=10, k=5} = {k: 3};

console.log(j, k);
