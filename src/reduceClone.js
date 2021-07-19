const reducer = (accumulator, element) => accumulator + element;

const arr = [15, 30, 5];
const sum = (arr, reducer, initialValue) => {
    let accumulator = initialValue === undefined ? [] : initialValue;
    for (let i = 0; i < arr.length; i++) {
        let num = accumulator.length > 0 ? accumulator[accumulator.length - 1] : 0;
        let reduceNum = reducer(num, arr[i]);
        accumulator.push(reduceNum);
    }
    return accumulator;
}
console.log('sum:', sum(arr, reducer));