let arr = [13, 331, 221, 12]
let output = {
    "0": [12, 221],
    "1": [13, 331]
}

const result = arr.reduce((acc, item) => {
    if (Object.keys(acc).length === 0) {
        acc = {
            0: [],
            1: []
        };
    }
    if (item.toString().includes('3')) {
        acc[0].push(item);
    } else if (item.toString().includes('2')) {
        acc[1].push(item);
    }
    return acc;
}, {})
console.log(result);