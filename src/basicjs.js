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