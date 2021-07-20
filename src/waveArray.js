const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
//---------------First Solution--------------------
// First sort the input array, then swap all adjacent elements.
//For example, let the input array be {3, 6, 5, 10, 7, 20}. 
//After sorting, we get {3, 5, 6, 7, 10, 20}. After swapping adjacent elements, we get {5, 3, 7, 6, 20, 10}. 
const waveArray = (arr) => {
    const sortedArray = arr.sort((a, b) => (a - b));
    for (let i = 0; i < sortedArray.length - 1; i += 2) {
        swap(sortedArray, i, i + 1);
    }
    return sortedArray;
}

console.log(waveArray([10, 90, 49, 2, 1, 5, 23])); // complexity is O(nlogn)

//---------------Second Solution--------------------
// 1) Traverse all even positioned elements of input array, and do following. 
//….a) If current element is smaller than previous odd element, swap previous and current. 
//….b) If current element is smaller than next odd element, swap next and current.
const sortInWave = (arr) => {
    for (let i = 0; i < arr.length; i += 2) {
        if (i > 0 && (arr[i] < arr[i - 1])) {
            swap(arr, i, i - 1);
        }
        if (i < arr.length - 1 && (arr[i] < arr[i + 1])) {
            swap(arr, i, i + 1);
        }
    }
    return arr;
}

console.log(sortInWave([10, 90, 49, 2, 1, 5, 23])); // complexity is O(n)