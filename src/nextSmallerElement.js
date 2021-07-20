// Using Two loops
const nextSmallerElement = (arr) => {
    const nextSmallerArray = [];
    let next;
    for (let i = 0; i < arr.length; i++) {
        next = -1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                next = arr[j];
                break;
            }
        }
        nextSmallerArray.push(next);
    }
    return nextSmallerArray;
}

console.log('Next smaller array:', nextSmallerElement([11, 13, 21, 3]));

// Using Stack
// 1) Push the first element to stack. 
// 2) Pick rest of the elements one by one and follow following steps in loop. 
// ….a) Mark the current element as next. 
// ….b) If stack is not empty, then pop an element from stack and compare it with next. 
// ….c) If next is smaller than the popped element, then next is the next smaller element for the popped element. 
// ….d) Keep popping from the stack while the popped element is greater than next. next becomes the next smaller element for all such popped elements 
// 3) After the loop in step 2 is over, pop all the elements from stack and print -1 as next element for them.

const stackNextSmallerElement = (arr) => {
    const stack = [];
    const nseMap = new Map(); // for ordering the output
    stack.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        let next = arr[i];
        if (stack.length === 0) {
            stack.push(next);
        }

        /* if stack is not empty, then pop an element from stack. If the popped element is greater than next, then
            a) print the pair
            b) keep popping while elements are greater and stack is not empty */
        while ((stack.length !== 0) && stack[stack.length - 1] > next) {
            // console.log(stack[stack.length - 1], '--->', next);
            nseMap.set(stack[stack.length - 1], next);
            stack.pop();
        }
        stack.push(next);
    }

    /* After iterating over the loop, the remaining elements in stack do not have the next smaller element, so print -1 for them */
    while (stack.length != 0) {
        // console.log(stack[stack.length - 1], '--->', -1);
        nseMap.set(stack[stack.length - 1], -1);
        stack.pop();
    }

    for (let element of arr) {
        console.log(element, '----->', nseMap.get(element));
    }

}

console.log('Next smaller array:', stackNextSmallerElement([11, 13, 21, 3]));