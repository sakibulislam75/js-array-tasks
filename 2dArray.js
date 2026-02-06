let arr = [
    [1, 2],
    [2, 1]
];
console.log(arr[0][1]); // arr[row no][col no]

/*
Given a 2D array, update the value at second row first item to 99 and print the updated array
input:
[
  [1, 2],
  [3, 4],
  [5, 6]
]

expected output:
[
  [1, 2],
  [99, 4],
  [5, 6]
]
  */
let arr1 = [
    [1, 2],
    [3, 4],
    [5, 6]
];
arr1[1][0] = 99;
console.log("After Updating the array :", arr1);