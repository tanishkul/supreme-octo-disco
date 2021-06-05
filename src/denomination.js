function main(amount) {
    var denomination = [25, 10, 5, 2, 1];
    var index = 0;
    while(amount>0) {
        while (amount<denomination[index]){
            index++;
        }
        amount= amount-denomination[index];
        console.log(denomination[index]);
    }
}
main(87);