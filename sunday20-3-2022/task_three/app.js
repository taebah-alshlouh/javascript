"use strickt"
let f_input=prompt("Enter the operation + or - or * or /");
let f_number=prompt("Enter the first number");
let s_number=prompt("Enter the secound number");
let con_f_number=Number(f_number);
let con_s_number=Number(s_number);
let result;
switch(result){
    case "+":
     result=con_f_number+con_s_number;
    break;
    case"-":
    con_f_number-con_s_number;
    break;
    case"*":
    console.log(`${con_f_number}*${con_s_number}`);
    break;
    case"/":
    con_f_number-con_s_number;
    break;
}