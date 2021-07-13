/* Based on the problem statement, we will set the initial conditions:
1. if there is no house, the robber can’t steal any money
2. if there is only one house, the robber can only steal that house
3. if there are two or more houses, the robber will try to steal the maximum amount of money without stealing from the two adjacent houses */


function robbery(num) {
    if(num.length === 0) return 0;
    else if(num.length ===1) return num[1];
    else {
        const houses = [];
        houses[0] = num[0];
        houses[1] = Math.max(num[0], num[1]);
        for(let i =2;i<num.length;i++) {
            houses[i] = Math.max((num[i]+houses[i-2]), houses[i-1]);
        }
        console.log(houses);
    }
}

robbery([ 1, 3, 4, 4, 3, 3, 7, 2, 3, 4, 5, 1 ])