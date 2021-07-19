function outer() {
    var count = 1;
    var digit = 2;
    return function inner() {
        while (count <= 10) {
            console.log('Multiple:', digit * count);
            count++;
        }
    }
}

outer()();