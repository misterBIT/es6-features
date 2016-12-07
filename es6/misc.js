Array.from(document.querySelectorAll('*')) // Returns a real Array
Array.of(1, 2, 3);


console.log([0, 0, 0].fill(7, 1)); // [0,7,7]

console.log([1, 2, 3].find(x => x === 3)); // 3
console.log([1, 2, 3].findIndex(x => x === 2)); // 1

["a", "b", "c"].entries(); // iterator [0, "a"], [1,"b"], [2,"c"]
["a", "b", "c"].keys(); // iterator 0, 1, 2
// ["a", "b", "c"].values(); // iterator "a", "b", "c"

// Object.assign performs shallow copy
var user1 = {name: "User 1", score: 90, address: { city: 'Tel Aviv', street: 'Nahmani' }};
var user2 = Object.assign({}, user1);

user2.height = 175;
user2.address.street = 'Nordeo';

console.log(user1, user2);

var u1 = {    name: "User 1", score: 90,  address: { city: 'Tel Aviv', street: 'Nahmani' }};
var u2 = Object.assign({}, u1, {score: 75, address: {street: 'Nordeo'}})
console.log(u1, u2);
