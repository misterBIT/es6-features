for(let value of ["a", "b", "c"]){
    console.log(value);
}

// Difference with for-in
var list = [3, 5, 7];
list.foo = 'bar';
 
for (var key in list) {
  console.log(key); // 0, 1, 2, foo
}
 
for (var value of list) {
  console.log(value); // 3, 5, 7
}

// an iterable object in ES6
var foo = {
  [Symbol.iterator]: () => ({
    items: ['p', 'u', 'k', 'i'],
    next: function next () {
      return {
        done: this.items.length === 0,
        value: this.items.shift()
      }
    }
  })
}

for (var letter of foo) {
  console.log(letter); 
}