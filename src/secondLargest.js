//Find the second largest number in an Array?
//Input: [12, 10, 1, 23, 9, 22]
//Output: 9

const arr = [12, 10, 1, 23, 9, 22, 23];
let secondLargest = arr[0];
let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } else if (secondLargest < arr[i] && arr[i] < largest) {
        secondLargest = arr[i];
    }
}
console.log(secondLargest, largest);

// Find the N power of a Given number without using Math.pow() method?
// function pow(n,e) {
//      // write your code
// }
// Input: pow(3,3)
// Output: 27

function pow(n, e) {
    let num = n;
    for (let i = 1; i < e; i++) {
        num *= n;
    }
    return num;
}

console.log(pow(-3, 3));


// Transform the nested array to single array?
// Input: [1, 2, [3, 4,[ 5, 6]]
// Output: [1, 2, 3, 4, 5, 6]

const nestedArray = [1, 2, [3, 4, [5, 6]]];

function flatArray(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...flatArray(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}


console.log(flatArray(nestedArray));