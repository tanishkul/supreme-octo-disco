const data = [{
    a: 1
}, {
    b: 2
}, {
    c: 3
}, {
    a: 1
}];
const obj = {};
for (let i = 0; i < data.length; i++) {
    const [key, value] = Object.entries(data[i])[0];
    if (!obj[key]) {
        obj[key] = value;
    }
}
const updatedArray = [];
for (let key in obj) {
    updatedArray.push({
        [key]: obj[key]
    })

}
console.log('3333333333333', updatedArray);

const tempArray = data.reduce((acc, ele) => {
    const x = acc.find(item => JSON.stringify(item) === JSON.stringify(ele));
    if (!x) {
        acc.push(ele);
    }
    return acc;
}, []);
console.log('444444444444', tempArray, 'aditya'.match(/[a]/g));