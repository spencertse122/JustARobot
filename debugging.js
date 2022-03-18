function numberToString(n, base = 10) {
    let result = "", sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
    }   
    do {
        console.log(`N is ${n}, about to run`)
        result = String(n % base) + result;
        // n /= base; // this is buggy
        // what we really want should be 
        n = Math.floor(n/base)

    } while (n > 0);
    return sign + result;
}

console.log(numberToString(13, 10));

// Error Propagation
