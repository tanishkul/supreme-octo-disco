function compareTriplets(a, b) {
    // Write your code here
    let bob = 0;
    let alice = 0;
    a.forEach((item, index) => {
        if(item<b[index]) {
            return bob += 1;
        } else if(item>b[index]) {
            return alice += 1;
        }
    })
    return [alice, bob];
}
compareTriplets([17, 28, 30], [99, 16, 8]);