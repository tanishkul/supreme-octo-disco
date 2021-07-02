const arr = [2,3,1,4,7,5,0];

// const result = arr.reduce((acc, element)=> {
//     if(!acc.length) {
//         acc.push(element);
//     } else{
//         const add = element+

//     }

// }, [])

const result = [];
const array = [...arr];
for (let i= 0; i<arr.length; i++) {
 for (let j=1; j< arr.length; j++) {
     if (arr[i] + arr[j] === 12) {
        result.push({ i: arr[i], j: arr[j] });
        
     }
 }
}

const arr1 = arr.sort();
const qq= [];
let l = 0;
let r = arr1.length-1;
while (l < r) {
    if (arr1[l] + arr1[r] === 12){
        qq.push({ i: arr1[l], j: arr1[r] });
        break;}
    else if (arr1[l] + arr1[r] < 12)
        l++;
    else // arr1[i] + arr1[j] > sum
        r--;
}

console.log('Result::', qq);

