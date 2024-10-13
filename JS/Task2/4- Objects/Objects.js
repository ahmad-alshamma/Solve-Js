// 1): Create an object and add a new property to it using bracket notation. 
// Example: 
// Input: { name: "Adam", age: 25 }, "gender": "male"; 
// Output: { name: "Adam", age: 25, gender: "male" } 

// let info = {

//     name : "adam",
//     age : 25, 
//     gender : "male"

// };

// console.log(info)

//-----------------------------------------------------------------------------------------
// 2): Use the Object.values() method to get an array of an object's values. 
//  Example: 
//  Input: { name: "Adam", age: 25, gender: "male" }; 
//  Output: ["Adam", 25, "male"]

// let info = {

//     name : "adam",
//     age : 25, 
//     gender : "male"

// };

// console.log(Object.values(info))


//-----------------------------------------------------------------------------------------
// 3): Use the Object.entries() method to get an array of key-value pairs for an object. 
// Example: 
//  Input: { name: "Adam", age: 25, gender: "male" }; 
//  Output: [["name", "Adam"], ["age", 25], ["gender", "male"]] 

// let info = {

//     name : "adam",
//     age : 25, 
//     gender : "male"

// };

// console.log(Object.entries(info))

//-----------------------------------------------------------------------------------------
// 4):  Use the Object.assign() method to merge two objects. 
// Example: 
// Input: { name: "Adam", age: 25 }, { gender: "male" }; 
// Output: { name: "Adam", age: 25, gender: "male" }

// let info1 = {
//     name:"Adam",
//     age: 25,
// }

// let info2 = {
//     gender:"male"
// }

// console.log(Object.assign(info1,info2))

//-----------------------------------------------------------------------------------------
// 5): Use the Object.seal() method to prevent changes to an object's properties but allows changes to its values. 
// Example: 
//  Input: { name: "Adam", age: 25 }; 
//  Output: { name: "Adam", age: 25 } 

// let info = {
//     name:"Adam",
//     age : 25
// }

// console.log(Object.seal(info))


