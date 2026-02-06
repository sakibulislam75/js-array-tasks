/*
Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.
Input: [1, 2, 3]
Expected Output:
Original: [1, 2, 3] Copy: [99, 2, 3] */

let original = [1, 2, 3];
let copy1 = [...original]
copy1[0] = 99;
console.log("copy1:", copy1);

let original1 = [1, 2, 3];
let copy2 = original1.slice(); //way-2
console.log("copy2:", copy2);


let copy3 = Array.from(original1); //way
console.log("copy3:", copy3);