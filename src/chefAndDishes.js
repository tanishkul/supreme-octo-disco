/* ingred: 4
dish 2nd: 
total ingred?

input: 4
dish: 2


Dish 1: [1, 2, 4] = 7
Dish 2: [1, 1, 2, 1, 2, 4]= 11
Dish 3: [1, 1, 1, 2, 1, 1, 2, 1, 2, 4] = ??

ingred: 10
dish 3: 
total ingred?*/

const getFactor = (num) => {
    return [...Array(num + 1).keys()].filter(i => num % i === 0);
}

function dishes(dishNo, ingredientNo) {
    let a = getFactor(ingredientNo);
    let result = [...a];
    [...Array(dishNo - 1).keys()].forEach(() => {
        let temp = [];
        result.forEach(e2 => {
            temp = [...temp, ...getFactor(e2)];
        })
        result = [...temp];
    });
    console.log('Dish no:', dishNo, '\nResult:', result, '\nSum', result.reduce((ele, acc) => acc = acc + ele));
}
dishes(2, 4);
dishes(3, 10);