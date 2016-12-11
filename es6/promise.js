// Producing a promise
let promise = new Promise(
        function (resolve, reject) { 
            let success = true;
            let value = 7; 
            if (success) {
                setTimeout(()=>resolve(value), 2000);
            } else {
                reject('Could not make it');
            }
        });

// Handling Success and Error
// promise.then(res => console.log('Got res: ', res));
// promise.catch(err => console.log('Got Error: ', err));

const prmReq = fetch('https://api.github.com/users/vyaron');

const prmData = prmReq.then(res => res.json());
prmReq.catch(err => console.log('Cant get that Data', err));
// prmData.then(data => console.log('got data', data))


// // Handling Success and Error
// prmData.then(
//     res => console.log('Me too:', res),
//     reason => console.log('Error', reason)
// );

// // Handling Success and Error
// promise.then(
//     null,
//     function (reason) { /* rejection */ }
// );

// // Equivalent:
// promise.catch(
//     function (reason) { /* rejection */ }
// );




// Basic Async Promise
var p = new Promise(function(resolve, reject) {  
   setTimeout(() => resolve(4), 2000);
});

// p.then(res => console.log('Result is: ',  res));
// p.then(res => console.log('Result is: ',  res));


// Chaining promisses
var p1 = p.then(res => 9);
// p1.then(res => console.log('p1: ',  res));

// an immediately resolved promise
var p2 = Promise.resolve("foo"); 

var prmItems  = getItems();
// prmItems.then(items => console.log('Items:', items));

function getItems() {
    const items = [6, 9, 3];
    return Promise.resolve(items);
}


// // can get it after the fact, unlike events
// p2.then(res => console.log(res)); 


// Example
function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}

// timeout(3000).then(res => console.log('Done!'));

var p = timeout(1000).then(() => {
    return timeout(2000);
}).then(() => {
    throw new Error("Problems");
}).catch(err => {
    console.log('Catching');
    return Promise.all([timeout(100), timeout(200)]);
})

p.then(res => console.log('DONE ALL'));
p.catch(err => console.log('Error!!', err));

