const search = (array, l, h, element) => {
    if (l > h)
        return -1;
    let mid = Math.floor((l + h) / 2);
    if (array[mid] === element)
        return mid;
    // if array [l...mid] is sorted
    if (array[l] <= array[mid]) {
        if (array[l] <= element && element <= array[mid]) {
            return search(array, l, mid - 1, element)
        }
        return search(array, mid + 1, h, element);
    }

    // if array [l...mid] is not sorted so array[mid...h] must be sorted
    if (array[mid] <= element && element <= array[h]) {
        return search(array, mid + 1, h, element)
    }
    return search(array, l, mid - 1, element);
}

const rotatedArray = [4, 5, 6, 7, 8, 9, 1, 2, 3];
let key = 10;
let i = search(rotatedArray, 0, rotatedArray.length - 1, key);
console.log('Key is present at ', i);