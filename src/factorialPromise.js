// Question: Implement the well-known factorial function with a recursive Promise.
//     You may call the function recursively in the traditional factorial algorithm. 
//     But, you have to call a Promise recursively in the asynchronous version of the factorial problem.
// Answer: We need to return a Promise from our factorial method because we need an asynchronous solution here. 
//     Therefore, instead of returning values directly, we have to use the resolve callback to fulfill each recursive call. 
//     In this scenario, we have to make a chain of promises depending on the input parameter, which is n.

function factorialPromise(n) {
    return new Promise((resolve, reject) => {
        if(n<=1) {
            resolve(1);
        } else {
            resolve(factorialPromise(n-1).then((res)=> res * n));
        }
    })
}

factorialPromise(5)
    .then((ans) => {
        console.log(`fact(5) = ${ans}`);
    });