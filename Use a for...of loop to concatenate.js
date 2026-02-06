/*
Use a for...of loop to concatenate all the elements of an array into a single string.
Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik'] */

let numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let combineWord = '';
for (let number of numbers) {
    combineWord += number;
}
console.log('After Concatenation:', combineWord);