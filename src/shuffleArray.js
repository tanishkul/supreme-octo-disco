function mySolution(ar1) {
    const updatedArray = ar1;
    let result = [];
    let leftPart, rightPart;
    const updatedString = updatedArray.split(" ");

    if (updatedString.length % 2 === 0) {
        leftPart = updatedArray.slice(0, ar1.length / 2);
        rightPart = updatedArray.slice(ar1.length / 2, ar1.length);
    } else {
        leftPart = updatedArray.slice(0, Math.ceil(ar1.length / 2));
        rightPart = updatedArray.slice(Math.ceil(ar1.length / 2), ar1.length);
    }
    for (let i = 0; i < updatedString.length; i++) {
        if (i % 2 === 0) {
            result[i] = leftPart[i];
        } else {
            result[i] = rightPart[i];
        }
    }
    result = result.join(" ");
    console.log('result-->>', result);
}
mySolution("2 3 4 5 1");


function shuffleArray(a, n) {
    // Rotate the element to the left 
    for (let i = 0, q = 1, k = n; i < n; i++, k++, q++)
        for (let j = k; j > i + q; j--) {
            [a[j - 1], a[j]] = [a[j], a[j - 1]];
        }
    return a;
}
const a = [1, 3, 5, 7, 2, 4, 6, 8];
const result = shuffleArray(a, a.length / 2);
console.log(result);