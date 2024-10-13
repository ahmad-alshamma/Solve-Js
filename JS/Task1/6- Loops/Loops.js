// 1) 
// write a script to print out all even numbers between 1 and 50, twice. Use 1 for loop and 
// while loop. 

// for (let i=1; i<=50 ; i++){
//     if (i%2==0)
//         console.log(i , "for")
// }

// let i=1;
// while (i<=50){
//     if (i%2==0){
//         console.log(i , "while")
//     }
//     i++;
// }

//-----------------------------------------------------------------------------------------
// 2)  Try solving the previous exercise using a single for loop.

// for (let i=1 ; i<=50 ; i++){
//     if (i%2==0){
//         console.log(i , "for")
//     }
// }

//-----------------------------------------------------------------------------------------
// 3) 
// Resolve Exercise 1 so that one loop prints out even numbers and the second prints out the 
// odd ones. 

// for(let i=1 ; i<=50 ; i++){
//     if (i%2==0){
//         console.log("the number "+i+" is even")
//     }
// }

// let i = 1;
// while(i<=50){
//     if(i%2!=0){
//         console.log("the number "+i+" is odd")
//     }
//     i++;
// }

//-----------------------------------------------------------------------------------------
// 4) 
// Fizz-Buzz! Write a script that does the following: 
// ● Counts from 1 to 100 and prints out something for each number: 
// ○ If the number is divisible by 3, print "Fizz" 
// ○ If the number is divisible by 5, print "Buzz" 
// ○ If the number is divisible by both 3 and 5, print "FizzBuzz" 
// ○ If the number does not meet any of the above conditions, just print the number Output:
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 
// 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, 
// Fizz, ...

// for (let i=1 ; i<=100 ; i++){
//     if (i%3==0 && i%5==0){
//         console.log(i + " FizzBuzz")
//     }

//     else if(i%5==0){
//         console.log(i + " Buzz")
//     }

//     else if(i%3==0){
//        console.log(i + " Fizz")
//     }

//     else {
//         console.log(i)
//     }
// }

//-----------------------------------------------------------------------------------------
// 5) 
// Rewrite the script with a function so that each iteration will trigger a function call. 
// Sample Input: fizzBuzz(1) 
// Sample Output: 1 
// Sample Input: fizzBuzz(15) Sample 
// Output: FizzBuzz
// function FizzBuzz(num){
//     if (num%3==0 && num%5==0){
//         console.log(num + " FizzBuzz" +" Q5")
//         }

//         else if(num%5==0){
//             console.log(num + " Buzz" +" Q5")
//         }

//         else if(num%3==0){
//         console.log(num + " Fizz" +" Q5")
//         }

//         else {
//             console.log(num +" Q5")
//         }
// }
//         for (let i=1 ; i<=100 ; i++){
//             FizzBuzz(i);
//         }



//-----------------------------------------------------------------------------------------
// 6) 
// create a recursive solution. A FizzBuzz function calls itself to continue the series






//-----------------------------------------------------------------------------------------
// 7) 
// Write a function that takes a number and converts it to certain banknotes. 
// Sample Input: (57, [25, 10, 5, 1]) 
// Sample Output: 25, 25, 5, 1, 1 

// function convertbanknotes(amount , banknotes){
//     let result = [];
//         for (let i=0 ; i<banknotes.length; i++){
//             while(amount>=banknotes[i]){
//                 result.push(banknotes[i])
//                 amount = amount - banknotes[i]
//             }
//         }
//     return result;    
// }

// let amount = 80;
// let banknotes = [25,10,5,1]
// let final = convertbanknotes(amount,banknotes);
// console.log(final, "Q7")


//-----------------------------------------------------------------------------------------
// 8) 
// Write a function that counts the existence of a specific character within a string, despite the case. 
// Sample Input: (“Coding Academy by Orange”, “o”) 
// Sample Output: 2

// function search(input , letter){
//     let count = 0;
//     let splitinput = input.split("");
//     let matchinput = splitinput.match(/letter/gi);
//     for (let i=0 ; i<splitinput.length ; i++){
    
//         count++;
//     }   
//     console.log(count)
// }

// search("Coding Academy by Orange" , "o")


//-----------------------------------------------------------------------------------------
// 9) 
// Write for loops that accomplish the following tasks:
// a. Print the numbers 0 - 20, one number per line. 
// b. Print only the ODD values from 3 - 29, one number per line. 
// c. Print the EVEN numbers 12 down to -14 in descending order, one number per line. 
// d. Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3. 

// for (let i=0; i<=20 ; i++){
//     console.log(i , "loop1")
// }

// for (let i=3; i<=29; i++){
//     if(i%3==0){
//         console.log(i , "loop2")
//     }
// }

// for (let i=12; i>=-14; i--){
//     if (i%2==0){
//         console.log(i , "loop3")
//     }
// }

// for (let i=50; i>=20; i--){
//     if (i%3==0){
//         console.log(i , "loop4")
//     }
// }


//-----------------------------------------------------------------------------------------
// 10) 
// Initialize two variables to hold the string 'CodingAcademy' and the array
// [7, 500, 'KH404', 'black', 36], then construct for loops to accomplish the following tasks: 
// e. Print each element of the array to a new line. 
// f. Print each string character in reverse order to a new line. 

// function printer(word,arr){
//     for (let i=0 ; i<word.length; i++){
//         console.log(word.split(""))
//     }

//     for(let i= arr.length-1; i>=0 ; i--){
//         console.log(arr[i]+"\n")
//     }
// }

// printer("CodingAcademy",["ahmad , sami , hamza , mohammad , issa , omar"])


//-----------------------------------------------------------------------------------------
// 11) 
// Construct a for loop that sorts the array [7, 23, 18, 9, -13, 38, -10, 12, 0, 124] into two new arrays: 
// Define an empty evens array to hold the even numbers and an odds array for the odd numbers. In the loop, determine if each number is even or odd, then put that number into evens or odds, as appropriate

// function sort(numbers){
//     let even = []
//     let odd = []
//     for (let i=0; i<numbers.length; i++){
//         if(numbers[i]%2==0){
//             even.push(numbers[i])
//         }

//         else{
//             odd.push(numbers[i])
//         }
//     }
//     console.log(even)
//     console.log(odd)
// }

// sort([7, 23, 18, 9, -13, 38, -10, 12, 0, 124])


//-----------------------------------------------------------------------------------------
// 12) 
// Write the code to create meals using elements from these arrays, ensuring the rules below. 
// Protein options: 
// ['chicken', 'nodels', 'tofu', 'beef', 'fish', 'beans']
// Grain options: 
// ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers']
// Vegetable options: 
// ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'] Beverage 
// options: 
// ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea']
// Dessert options 
// ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi']
// The number of meals is determined as an input. 
// • The meals must include one item from each category. 
// • No two meals should be identical

let Protein = ['chicken', 'nodels', 'tofu', 'beef', 'fish', 'beans'];
let Grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let Vegetable = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let options = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let Dessert = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

