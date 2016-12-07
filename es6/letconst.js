// The problem with var - minimal scope: a function
var jsFuture = "es6";
(function () {
  if (!jsFuture) { var jsFuture = "es5"; }
  console.log(jsFuture);
}());



function f() {
  {
    let x;
    {
      // okay, block scoped name
      const x = "sneaky";
      // error, const
      //x = "foo";
    }
    // console.log(x);
    // error, already declared in block
    // let x = "inner";
  }
}


console.log('Let and Const');
f();