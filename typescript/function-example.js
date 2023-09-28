function test(a, b) {
    console.log(a + b);
}
test(10, 70);
function addition(a, b) {
    return a + b;
}
console.log(addition(60, 40));
//optional parameters
function multiply(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
console.log(multiply(2, 3, 4));
console.log(multiply(2, 3));
//Default parameters
function accountDetails(name, id, balance, rateOfInterest, time) {
    if (rateOfInterest === void 0) { rateOfInterest = 8.3; }
    if (time === void 0) { time = 1; }
    console.log("Account Holder Name:" + name);
    console.log("Account Id:" + id);
    console.log("Balance:" + balance);
    console.log("Interest:" + (balance * time * rateOfInterest) / 100);
}
accountDetails("A.Roy", 4354354354353, 10000);
accountDetails("A.Roy", 4354354354353, 10000, 7.9, 2);
accountDetails("A.Roy", 4354354354353, 10000, 7.9);
function getTotal() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var total = 0;
    values.forEach(function (v) { return total = total + v; });
    console.log(total);
}
getTotal();
getTotal(2, 4);
getTotal(2, 4, 5);
getTotal(2, 4, 5, 6);
getTotal(2, 4, 5, 6);
