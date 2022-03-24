"use strict"
let f_input=prompt("Enter the operation (+ , - , * , /)");
let num1 = Number(prompt('Enter the first number '));
let num2 = Number(prompt('Enter the secound number '));

switch(f_input){
    case "+":{
   let result= num1+num2;
    console.log(result,"sum");
    break;}

    case"-":{
    let result= num1-num2;
    console.log(result,"subtract");
    break;}

    case"*":{
   let result= num1*num2;
    console.log(result,"multiplied");
    break;}

    case"/":{
   let result= num1/num2;
    console.log(result,"divide");
    break;    }   
}
console.log();