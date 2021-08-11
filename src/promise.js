// var myFirstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('My first promise');
//     }, 5000);
// });
// var mySecondPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('My Second promise');
//     }, 1000);
// });
// var myThirdPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('My Third promise');
//     }, 2000);
// });

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then((response) => console.log('Response of all:', response)).catch(e => console.log('Error in all:', e));
// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then((response) => console.log('Response of allSettled:', response)).catch(e => console.log('Error in allSettled:', e));
// Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then((response) => console.log('Response of race:', response)).catch(e => console.log('Error in race:', e));


// const fs = require('fs');

// const myFun = () => {
//     console.log('Called Myfun');
// }
// // asynchronous file reading
// fs.readFile('./output', (err, data)=> {
//     if(err){
//         console.log('Error::', err);
//     }
//     console.log('Data::', data);
// });

// // synchronous file reading
// const data = fs.readFileSync('./output');
// console.log('data--', data);

// myFun();


var events = require('events');
var em = new events.EventEmitter();

var myListener = (data) => console.log("my listener", data);

em.on("FirstEvent", myListener);

em.emit("FirstEvent", "Data");
em.emit("SecondEvent");

em.removeListener("FirstEvent", myListener);
em.emit("FirstEvent", "Data2");

