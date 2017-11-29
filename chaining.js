// original array
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
console.log("before: ", integers);
// sort the array
let integers2 = integers.sort(function(a, b){return b-a});
console.log("after sort: ", integers2);
// remove numbers above 19
let integers3 = integers.sort(function(a, b){return b-a}).filter(function(j){return j<=19});
console.log("after removing nums above 19: ", integers3);
// do some math on them
let integers4 = integers.sort(function(a, b){return b-a}).filter(function(j){return j<=19}).map(function(p){return p*1.5 -1});
console.log("after multiplying by 1.5 and subtracting 1: ", integers4);
// sum all of the index values
let finalIntegers = integers.sort(function(a, b){return b-a}).filter(function(j){return j<=19}).map(function(p){return p*1.5 -1}).reduce(function(t, g){return t+g});
console.log("after summing all indix values: ", finalIntegers);

// GOD DAMN YOU FOREACH!!! WORTHLESS!!!
