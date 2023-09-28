var first = "Typescript basics";
var second = String("Typescript basics");
var fourth = "test";
var third = new String("Typescript basics");
first = "welcome.... \nto....\ntyrpescript... welcome\nbasics...welcome";
second = "welcome.... \
to... \
tyrpescript... \ ";
console.log(typeof (first));
console.log(typeof (second));
console.log(typeof (third));
console.log(third.length);
console.log(third.charAt(3));
console.log(third.concat(second).concat(fourth));
console.log(third.indexOf('W'));
console.log(third.substring(0, 3));
//console.log(third.replaceAll("welcome","Introduction"));
console.log(third.toLowerCase());
console.log(third.toUpperCase());
var str = "    sample text     ";
console.log(str);
//console.log(third.trimStart());
//console.log(third.trimEnd());
console.log(str.trim()); // trimstart, trimend
first = "welcome to typescript. welcome welcome";
console.log(first.replace(/welcome/g, "Introduction"));
