/*
5. Combining Arrays
Instructions:
Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log */

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let newArray = arr1.concat(arr2);
console.log("New combine array is:", newArray); //way1 using concat
console.log('[' + arr1 + arr2 + ']'); //wihtout concat