const a = 'aaaaaaaba'
const b = 'aba'

console.log(a.indexOf(b))
let currentIndex;
let jIndex = 0;
for (let i in a) {
    if(a[i]===b[jIndex]) {
console.log('11111111111', currentIndex)
        currentIndex = i;
        jIndex++;
        continue; 
    } else {
        jIndex = 0;
    }
    console.log(i);
}
console.log('0000000000', currentIndex)