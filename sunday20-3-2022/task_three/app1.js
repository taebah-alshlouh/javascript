"use strict"
let f_input=prompt("Enter the operation (+ , - , * , /)");
let num1 = parseInt(prompt('Enter the first number '));
let num2 = parseInt(prompt('Enter the secound number '));

let result=0;
switch(result){
    case "+":
    result= num1+num2;
    console.log(result);
    break;
    case"-":
    result= num1-num2;
    console.log(result);
    break;
    case"*":
    result= num1*num2;
    console.log(result);
    break;
    case"/":
    result= num1/num2;
    console.log(result);
    break;       
}