"use strict";
console.log('Welcome to Typescript');
let a = 10; //number
let x; //big integer
let b = "hello world!!";
var c = true; //boolean
var d = { 'amar': 90 }; //object
let ar; //array
let skills; //tuple
var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
})(days || (days = {}));
; //enum 
let y; // any type
let n; //doesn'tcontain any value
console.log(a);
console.log(b);
