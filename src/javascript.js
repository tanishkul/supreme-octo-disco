for(let i=1;i<5;i++){
    setTimeout(() => {
        console.log(i)
    }, 1000)
}

for(var i=1;i<5;i++){
    setTimeout(() => {
        console.log(i)
    }, 1000)
}

console.log(''==false)
// true

console.log('1'==false)
// false

console.log(typeof null)
// object

console.log(typeof undefined)
// undefined

console.log('s'-1)
// NaN

console.log('s'/1)
// NaN

console.log(1/0)
// Infinity

console.log(typeof [])
//object

console.log(typeof {})
// object

console.log(''===false)
// false