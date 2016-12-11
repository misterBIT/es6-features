// Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;

// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) === 34;

var population = new Map();
population.set("Israel", 7000000);
population.set("Iran", 34000000);

var country = prompt('Country?');
alert('population is: ' + population.get(country));

