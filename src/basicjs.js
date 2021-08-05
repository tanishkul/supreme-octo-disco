// Use case 1 - Print a simple Hello World

// Qn 1: Arrow functions
const hello = () => 'Hello';
const world = () => 'World';

// Qn 2: Template string
// Solution for Use case 1
console.log(`Ans 1 & 2: ${hello()} ${world()}`);

// Use case 2 - Delay the response by
//   - 300 ms for hello and
//   - 200 ms for world

// Qn 3: setTimeout
const helloTimeout = () => setTimeout(hello, 300);
const worldTimeout = () => setTimeout(world, 200);

console.log(`Ans 3: ${helloTimeout()} ${worldTimeout()}`); // Incomplete

// Qn 4: Promise
const delayedHello = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(hello()), 300));
const delayedWorld = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(world()), 200));

console.log(`Ans 4: ${delayedHello()} ${delayedWorld()}`); // Incomplete

// Qn 5: Promise.then().catch()
// Solution for Use case 2
delayedHello().then((h) =>
  delayedWorld().then((w) => console.log(`Ans 5: ${h} ${w}`))
);

// Qn 6: Async/Await
// Solution for Use case 2
async function greet() {
  const h = await delayedHello();
  const w = await delayedWorld();
  console.log(`Ans 6: ${h} ${w}`);
}
greet();

// Use case 3 - Modify the utility function to accept any
// function and arguments, but execute after the specified delay

// Qn 7: High-order function and Currying
// Qn 8: Spread vs rest operators
// Qn 9: Default parameters
// Solution for Use case 3
const delayedExec = (fn, sleep = 200) => {
  return (...args) => {
    return new Promise((resolve, reject) =>
      setTimeout(() => resolve(fn(...args)), sleep)
    );
  };
};

const helloFn = () => 'Hello';
const worldFn = (msg) => msg;
async function greetV2() {
  const h = await delayedExec(helloFn, 300)();
  const w = await delayedExec(worldFn)('World');
  console.log(`Ans 7 & 8: ${h} ${w}`);
}
greetV2();

let car = {
  registrationNumber: "GA12345",
  brand: "Toyota",
  displayDetails: function () {
      console.log(this.registrationNumber + " " + this.brand);
  }
}
let myCarDetails = car.displayDetails;
console.log('**********', myCarDetails(), typeof myCarDetails);
// // output ?

const arr = [1, 2, 3, 4 , 5, 1, 2, 3, 3];

let count = {};
for (let i=0;i<arr.length;i++) {
  if(!count[arr[i]]) {
      count[arr[i]] = 1;
  } else {
      count[arr[i]] += 1;
  }
}
//count = {1: 2, 2: 2, 3: 3, 4:1, 5:1};
const updatedARray = []
for(let key in count) {
  if(count[key] === 2) {
      updatedARray.push(key);
  }
}
console.log('1111111111', updatedARray)
console.log('Start') 
setTimeout(()=>{
console.log('Set Timeout 1')
},0)

setTimeout(()=>{
console.log('Set Timeout 2')
},0)

Promise.resolve().then(r => console.log('Promise 1')).then( s=> console.log('Promise 2'));
console.log('End')


let num = 0
async function increment(){
num+= await 2
console.log(num)
}
increment()
num+=1
console.log(num)
// Print the output


// user: {
//     Id
//     name, 
// }

// booking: {
//     booking Id
//     userId
//     startStation
//     EndStattion
//     amount
//     distance
//     class
//     seatId,
//     timestamp
// }

// seat: {
//     isBOOked
//     Id
//     Number
//     coach
// }

// const seat = seatModel.find({number: userRequestedSeatNumber });
// if(seat) {
//     throw 400 badrequuest
// } else {
//     const seatCreated = await seatModel.update({number: userRequestedSeatNumber  }, {isBooked: true, ...});
//     await bookingModel.create({ seat : seatCreated, ..})
// }
// console.log(this);

let array = [4, 2, [3, 4, 5, 7], 9, [[10], 12, 3], 4, 7];

function flatten(items) {
  const flat = [];

  items.forEach(item => {
    if (Array.isArray(item)) {
      flat.push(...flatten(item));
    } else {
      flat.push(item);
    }
  });

  return flat;
}

console.log(flatten(array));