function getDigit(number) {
    let x = number,
        digit;

    const arrDigit = [];
    while (x > 0) {
        digit = x % 10;
        arrDigit.push(digit);
        x = Math.trunc(x / 10);
    }
    return arrDigit;
}

function log(b, n) {
    return Math.log(n) / Math.log(b);
}

function getEncrypt(a, b) {
    const arrDigit = getDigit(a);

    let tmp = b,
        results = [];

    for (let i = arrDigit.length - 1; i >= 0; i--) {
        digit = Math.trunc(log(arrDigit[i], tmp / (Math.pow(10, i))));
        // document.write(digit)
        // document.write(" ")
        results.push(digit);
        tmp -= Math.pow(arrDigit[i], digit) * Math.pow(10, i);

    }
    return results;
}



getEncrypt(243, 15387);
getEncrypt(2, 2);