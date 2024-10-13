// 1)
// If someone is applying to the academy’s website, create the conditional to cover these situations: 
// ● If the candidate is older than 30, print out: “You are not eligible. You may join other programs.”
// ● If the candidate is between 18 and 30, print out: “You are eligible. Start your application.”
// ● If the candidate is younger than 18, print out: “You may join the kids' program.” 
// ● If the candidate is older than 60, print out: “You may join the seniors’ program.” 
// ● Calculate the age 
// using the year of birth dynamically. 

// let year = prompt("enter your year birthday")
// let age = 2024 - year ;
// if (age > 30 && age <= 60){
//     console.log("You are not eligible. You may join other programs.")
// }

// else if (age <= 30 && age >=18){
//     console.log("You are eligible. Start your application.")
// }

// else if (age < 18){
//     console.log("You may join the kids program.")
// }

// else if(age > 60 && age <90){
//     console.log("You may join the seniors’ program.")
// }

// else {
//     console.log("you are dead")
// }

//-----------------------------------------------------------------------------------------
// 2)
// Write a function that takes a string and switches the letters' case from upper to lower and vice versa. 
// Sample Input: “OrAnGe”         Sample Output: “oRaNgE”

// function convert_upper_lower(word){
//     let splitword = word.split(""); // مشان تعمل كل حرف لحال
//     let mapword = splitword.map(char=> char===char.toUpperCase()?char.toLowerCase():char.toUpperCase()) // مشان يمسكلي حرف حرف ويقارنه اذا كبير ولا صغير
//     let result = mapword.join("")
//     console.log(result)
// }

// convert_upper_lower("OrAnGe")

//-----------------------------------------------------------------------------------------
// 3)
// Write a function that takes a string, capitalizes each word's first letter, and removes all spaces 
// (Camel Case). 
// Sample Input: “Coding Academy by Orange”
// Sample Output: “CodingAcademybyOrange”

// function Camel_Case(word){
//     splitword = word.split(" "); // مشان اقسم كل كلمة لحال
//     mapword = splitword.map(word=> word.charAt(0).toUpperCase()+word.slice(1).toLowerCase())
//     // بهاض السطر خليه يلف ع كل كلمة ويخلي اول حرف كبير وباقي الأحرف صغار
//     joinword = mapword.join(""); // دمجت الاحرف مشان يكونوا مع بعض 
//     console.log(joinword)
// }

// Camel_Case("coding academy by orange")

//-----------------------------------------------------------------------------------------
// 4)
// Write a function that removes a specific element in an array. 
// Sample Input: ([“Coding”, “Academy”, “By”, “Orange”], “By”) 
// Sample Output: [“Coding”, “Academy”, “Orange”] 
// function remover_specific_element(elements){

// }



//-----------------------------------------------------------------------------------------
// 5)
// Write a function that checks if a number is odd or even. 

// function odd_even(num){
//     if(num%2==0)
//         console.log("even number")

//     else
//         console.log("odd number")
// }

// odd_even(25)


//-----------------------------------------------------------------------------------------
// 6)
// Write a function that checks whether an input variable is a number
// function input_number(num){
//     if(typeof(num)==='number') // بقارن نوع المدخل عندي بالـ number
//         console.log("this is a number")

//     else 
//         console.log("this is not number")
// }

// input_number(90)

//-----------------------------------------------------------------------------------------
// 7)
// Write a function that finds the largest of two numbers. 
// function max_number(num1 , num2){
//     console.log(Math.max(num1,num2))
// }

// max_number(40,50)

//-----------------------------------------------------------------------------------------
// 8)
// Write a function that checks if a triangle is equilateral, scalene, or isosceles.
// function triangle(side1,side2,side3){
//     if(side1===side2 && side2===side3)
//         console.log("equilateral")
    
//     else if(side1!==side2 && side2!==side3)
//         console.log("scalene")

//     else 
//         console.log("isosceles")
// }

// triangle(50,50,50)
// triangle(50,50,70)
// triangle(50,60,80)


//-----------------------------------------------------------------------------------------
// 9) 
// Write a function that finds if a number is present in a given range
// function range(start,end){
//      start = parseInt(prompt("enter the srart range"))
//      end = parseInt(prompt("enter the end range"))
//     let num = parseInt(prompt("enter number to check in the range"))
//     if(num>start && num<end)
//         console.log("number in the range")

//     else
//         console.log("numbet not the range")
// }

// range()

//-----------------------------------------------------------------------------------------
// 10) 
// Write a function that checks whether a year is a leap year

// function leapyear (year){
//     year = parseInt(prompt("entet year"))
//     if((year%4===0 && year%100!==0) || (year%400===0))
//         console.log("this is leap year")

//     else 
//         console.log("this is not a leap year")
// }

// leapyear()


