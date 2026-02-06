/*
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
Input: const statement = 'I am a hard working person' */

let sen = 'i am a hard working person';
let rev = sen.split(" ").reverse().join(" ");
console.log("The reverse sentence:", rev);