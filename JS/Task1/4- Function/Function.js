"use strict"

// 1))
function string_To_array(word){
    let result = word.split(" "); // split()
    return result;
}

console.log(string_To_array("Orange Jordan"))

//---------------------------------------------------------------------------------

// 2)
function visible_To_hidden(phone_number){
    let visible = phone_number.slice(7,10); // Extract three digit
    let hidden = phone_number.slice(0,7); // Extract 7 digit
    hidden = hidden.replace(hidden,"*******");
    let result = hidden + visible;
    return result;
}

console.log(visible_To_hidden("0788076258"));

// another solve 
function visible_To_hidden2(phone_number){
    let hidden = '*'.repeat(7)
    let visible = phone_number.slice(7);
    return hidden + visible;
}

console.log(visible_To_hidden2("0788076258") , "method2")

//---------------------------------------------------------------------------------

// 3)
function hidden_Email(email){
    let hidden = emial.slice(6,)
}

//---------------------------------------------------------------------------------
// 4)  
// Write a function that turns the first letter of every word in a string to the upper case. 
// Sample Input: “coding academy by orange”
// Sample Output: “Coding Academy By Orange”
    function first_letter_uppercase(word){
        let first_letter = word[0].toUpperCase()
        console.log(first_letter+word)
    }


first_letter_uppercase("ahmad")



//---------------------------------------------------------------------------------
// 5)  
// Write a function that turns the first letter of every word in a string to the upper case. 
// Sample Input: “coding academy by orange” Sample 
// Output: “Coding Academy By Orange”
