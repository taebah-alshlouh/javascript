"use strickt"
let f_num=prompt("enter the first number");
let s_num=prompt("enter the secound number");
let t_num=prompt("enter the third number");
let c_f_num=Number(f_num);
let c_s_num=Number(s_num);
let c_t_num=Number(t_num);
document.writeln(c_f_num);
document.writeln(c_s_num);
document.writeln(c_t_num);

if(c_f_num % 3 == 0){
     console.log("fizz");
     result=document.writeln("fizz");
}else if(c_f_num % 5 == 0){
    console.log("buzz");
    document.writeln("buzz");
}
else if (c_f_num %3 & c_f_num % 5 == 0) {
    console.log("fizz buzz");
    document.writeln("fizz buzz");
} else if (c_s_num % 3 == 0) {
    console.log("fizz");
     document.writeln("fizz");
} else if(c_s_num % 5 == 0){
    console.log("buzz");
    document.writeln("buzz");
}else if (c_s_num % 3 & c_s_num % 5 == 0) {
    console.log("fizz buzz");
    document.writeln("fizz buzz");
} else if(c_t_num % 3 & c_t_num % 5  == 0) {
    console.log("fizz buzz");
    document.writeln("fizz buzz");
}else if (c_t_num % 3 == 0) {
    console.log("fizz");
    document.writeln("fizz");
} else if(c_t_num % 5 == 0){
    console.log("buzz");
    document.writeln("buzz");
}
