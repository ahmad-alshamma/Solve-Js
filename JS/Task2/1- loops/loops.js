"use strict"

// 1.Use a for loop to find the factorial of a number.
// Example: Input: 5; Output: 120


// let number_Q1 = prompt("enter the number")
// let total_Q1 = 1
// for (let i = 0 ; i<number_Q1 ; i++){
//     total_Q1 = total_Q1 * (number_Q1 - i);
// }
// console.log(total_Q1)

// 5 -----> 20 -----> 60 -----> 120
// Total = 120 

//--------------------------------------------------------------------------------------------------

// 2.Use a for loop to print the Fibonacci sequence up to a given number.
// Example: Input: 10;   Output: 0 1 1 2 3 5 8
// function fibonacciSequence(limit) {
//     let a = 0, b = 1;
//     console.log(a);  // Print the first number

//     for (let i = 1; b <= limit; i++) {
//       console.log(b);  // Print the next number in the sequence
//       let next = a + b;
//       a = b;
//       b = next;
//     }
//   }
//   // 
//   // Example usage
//   const input = 10;
//   fibonacciSequence(input);  // Output: 0 1 1 2 3 5 8

//--------------------------------------------------------------------------------------------------
// // 3) 3.Use a for loop to print the prime numbers up to a given number.
// Input: 20;   Output: 2 3 5 7 11 13 17 19
// function print_Primes(limit) {
//     for (let i = 2; i <= limit; i++) {
//         let isPrime = true;
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             console.log(i);
//         }
//     }
// }

//--------------------------------------------------------------------------------------------------
// 4.Use a for loop to print the elements of a 2D array .
// Example: Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]];       Output: 1 2 3 4 5 6 7 8 9 

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]];
// console.log(arr)


//------------------------------------------------------------------------------------------------
// 5): Use a for loop to print the elements of an array in reverse order. Without using
// built in function
// Example: 
// Input: [1, 2, 3, 4, 5]; Output: 5 4 3 2 1
// let input = [1, 2, 3, 4, 5]
// for (let i=input.length-1; i>=0; i--){
//     console.log(input[i])
// }


