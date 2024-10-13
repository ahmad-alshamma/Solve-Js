'use strict'

// 1))

let array = ["Coding", "Academy", "By", "Orange"];

// The push() method adds a new element to an array (at the end):
array.push("Jordan");
console.log(array); // ['Coding', 'Academy', 'By', 'Orange', 'Jordan']

console.log(array.slice(0, 2)); // ['Coding', 'Academy']

// The pop() method removes the last element from an array:
array.pop();

// The unshift() method adds a new element to an array (at the beginning)
array.unshift("To");
array.unshift("Welcome");
console.log(array); //  ['Welcome', 'To', 'Coding', 'Academy', 'By', 'Orange']

console.log(array.slice(3, 6)); // ['Academy', 'By', 'Orange']

// The shift() method remove the first element to an array
array.shift();
array.shift();

// The join() method also joins all array elements into a string.
console.log(array.join(" ")); // Coading Academy By Orange

console.log(array); //  ['Coading', 'Academy', 'By', 'Orange']

array.splice(1,2)
console.log(array) // ['Coding', 'Orange']


// 2))
let friut = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop(); // a)
friut.shift(); // b)
friut.indexOf("orange"); // c)
friut.push(34); // d)
vegetables.length; // e)
vegetables.push(50); // f)
let food = friut.concat(vegetables); // g)
food.splice(4,2); // h)
food.reverse(); // i)
food.join(" "); // j)
