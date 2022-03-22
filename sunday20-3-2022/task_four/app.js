"use strickt"
let num1 = parseInt(prompt('Enter the first number '));
let num2 = parseInt(prompt('Enter the secound number '));
let num3 = parseInt(prompt('Enter the third number '));

document.writeln(num1+"<br>");
document.writeln(num2+"<br>");
document.writeln(num3+"<br>");
if((num1 % 3 ==0)|(num2 % 3 == 0)|(num3 % 3 ==0)){
    console.log("fizz");
    document.writeln("fizz"+"<br>");
}else{
    console.log("the numbers dont divided on 3");
    document.writeln("the numbers dont divided on 3"+"<br>");
}

if ((num1 % 5 ==0)|(num2 % 5 == 0)|(num3 % 5 ==0)) {
    console.log("buzz");
    document.writeln("buzz"+"<br>");
}else{
    console.log("the numbers dont divided on 5");
    document.writeln("the numbers dont divided on 5"+"<br>")

}
if (((num1 % 3 ==0)&(num1 % 5 ==0))|((num2 % 3 == 0)&(num2 % 5 == 0))|((num3 % 3 ==0)&(num3 % 5 ==0))) {
    console.log("fizz buzz");
    document.writeln("fizz buzz"+"<br>");
}else{
    console.log("the numbers dont divided on 3 and 5");
    document.writeln("the numbers dont divided on 3 and 5")
}

