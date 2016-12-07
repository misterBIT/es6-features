// Expression bodies
var nums = [8, 3, 7, 10];
var odds = nums.filter(n => n % 2);
var mults = nums.map(n => n * n);
var sum = nums.reduce((acc, n) => ({sum: acc.sum + n}), {sum:0});

console.log('Odds: ', odds);
console.log('Mults: ', mults);
console.log('sum is: ', sum);

// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0) console.log('devided by 5: ',  v); 
    
});

// Lexical this
var bob = {
  _name: "Bob",
  _friends: ['Puki', 'Muki'],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
}
bob.printFriends();