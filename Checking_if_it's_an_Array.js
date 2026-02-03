/*
4.
Create different variables, each containing either an array or a non-array value.
Now use isArray to check if each variable is an array.
Print a message to the console indicating whether each variable is an array or not.
*/
let arr1 = 'sakibul islam bangladesh';
let arr2 = ['c', 'c++', 'java', 'javascript', 'flutter', 'html', 'css'];

let check1 = Array.isArray(arr1);
let check2 = Array.isArray(arr2);

console.log("variable arr1 is array?->", check1);
console.log("variable arr2 is array?->", check2);