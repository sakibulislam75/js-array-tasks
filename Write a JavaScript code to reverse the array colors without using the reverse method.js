// Write a JavaScript code to reverse the array colors without using the reverse method-const colors = ['red', 'blue', 'green', 'yellow', 'orange']


let colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let n = [];
for (color of colors) {
    n.unshift(color);
}
console.log('The reverse array:', n);