let fromEuroToDollar = function(euro) {
    let dollar = euro * 1.16;
    return dollar;
}

let fromDollarToYen = function(dollar) {
    let yen = dollar * 153.99;
    return yen;
}

let fromYenToPound = function(yen) {
    let pound = yen  * 0.0049;
    return pound;
}

let suma = function(a, b) {
    return a + b;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, suma };
