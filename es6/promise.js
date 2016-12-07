// Producing a promise
 var promise = new Promise(
        function (resolve, reject) { 
            let success = true;
            let value = 7; 
            if (success) {
                resolve(value);
            } else {
                reject(reason);
            }
        });

// Handling Success and Error
promise.then(
    function (result) {}
);


// Handling Success and Error
promise.then(
    null,
    function (reason) { /* rejection */ }
);



// Handling Success and Error
promise.then(
    null,
    function (reason) { /* rejection */ }
);

// Equivalent:
promise.catch(
    function (reason) { /* rejection */ }
);




// Basic Async Promise
var p = new Promise(function(resolve, reject) {  
   setTimeout(() => resolve(4), 2000);
});

p.then(res => console.log('Result is: ',  res));
p.then(res => console.log('Result is: ',  res));


// Chaining promisses
var p1 = p.then(res => 9);
p1.then(res => console.log('p1: ',  res));

// an immediately resolved promise
var p2 = Promise.resolve("foo"); 

// can get it after the fact, unlike events
p2.then(res => console.log(res)); 


// Example
function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}

var p = timeout(1000).then(() => {
    return timeout(2000);
}).then(() => {
    throw new Error("Problems");
}).catch(err => {
    return Promise.all([timeout(100), timeout(200)]);
})
