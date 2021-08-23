// for(let i=1;i<5;i++){
//     setTimeout(() => {
//         console.log(i)
//     }, 1000)
// }

// for(var i=1;i<5;i++){
//     setTimeout(() => {
//         console.log(i)
//     }, 1000)
// }

// console.log(''==false)
// // true

// console.log('1'==false)
// // false

// console.log(typeof null)
// // object

// console.log(typeof undefined)
// // undefined

// console.log('s'-1)
// // NaN

// console.log('s'/1)
// // NaN

// console.log(1/0)
// // Infinity

// console.log(typeof [])
// //object

// console.log(typeof {})
// // object

// console.log(''===false)
// // false

// const obj1 = {
//     x: 10,
// };

// const obj2 = {
//     x: 15,
// }

// function change(a,b) {
//     // let c = Object.assign({...b}, { x: 20 });
//     a.x = 20;
//     b  = {
//         x: 20,
//     }
//     return b;
//     // console.log('ccccccc', c, b, d);
//     // b=d;
// }

// change(obj1, obj2);

// console.log(obj1, obj2);

// function recursionDecremental(n) {
//     if(n==0) {
//         return;
//     }
//     console.log(n);
//     return recursionDecremental(n-1);
// }

// recursionDecremental(10);

// let result = 1;
// function recursionIncremental(n) {
//     let result = 1;
//     console.log('resssssss', result, n, n <= result);
//     if (n < result) {
//         return result;
//     } else {
//         result = recursionIncremental(n - 1) + result;
//     }
//     console.log(result);
//     return result;
// }

// recursionIncremental(10);
// console.log(recursionIncremental(10));

function getPerson(one, two, three) {
    let str0 = one[0]; // ""
    let str1 = one[1]; // " is "
    let str2 = one[2]; // " years old."
    console.log('One--------', one);
    console.log('Two--------', two);
    console.log('Three--------', three);
    return `${two}${str0}${str1}${three}${str2}`;
}
const person = "Tanish";
const age = "23";
console.log(getPerson `${person} is ${age} years old.`);