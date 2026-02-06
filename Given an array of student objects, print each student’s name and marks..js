/*
Given an array of student objects, print each student’s name and marks.
input:
[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
output:
John scored 85
Alice scored 90 */

let arrObject = [
    { name: 'john', marks: 85 },
    { name: 'alice', marks: 90 }
]
for (let s of arrObject) {
    console.log(s.name, "scored ", s.marks);
}