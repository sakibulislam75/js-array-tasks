/*
Write a JavaScript code to get the even numbers from an array using any looping technique.
Input: const numbers = [12, 98, 5, 41, 23, 78, 46]; */

let arr = [12, 98, 5, 41, 23, 78, 46];
let even = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        even.push(arr[i]);
    }
}
console.log("The even no :", even);