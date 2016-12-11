'use strict';


// IIFE - immediatley invoked function expression

// var foo = function () {
//   console.log('foo');
// }
// foo();
// foo = undefined;


(function(num) {
  console.log('foo', num);
})(19);


// The problem with var - minimal scope: a function
var jsFuture = "es6";
(function () {
  // Hoisting
  if (!jsFuture) {let jsFuture = "es5"; }
  console.log(jsFuture);
}());


function bar() {
  {
    const name1 = 'Puki';
    // name1 = 'koko';
    console.log(name1);
  }
  console.log(typeof name1);
}
bar();







function f() {
  {
    let x = 9;
    {
      // okay, block scoped name
      let x = 'bamia';
      // const x = "sneaky";
      // error, const
      // x = "foo";
      console.log(x);
      
    }
    console.log(x);
    // error, already declared in block
    // let x = "inner";
  }
}


console.log('Let and Const');
f();