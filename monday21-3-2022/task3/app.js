"use strict";
// All the exercises should use while loop:

// Please be sure to connect this file to another HTML file

// Don’t search on the internet except if it is written in the question

// You should solve all the question by what you understand from the lecture
// and with your pair not solo

// And don’t look or use a code that you wrote before 

console.log('Here is : While')
document.getElementById("p").innerHTML="Here is : While";
/*
1
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
*/
console.log("//////////////exercies 1//////////////");
function subtract(num) {
    var result = num;
    if (num === 0 || num === 1) 
    return 1; 
    while (num > 1) { 
    num--; 
    result = result - num; 
    }
    return result;
}
console.log(subtract(2));
console.log(subtract(5));
console.log(subtract(9));

/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/
console.log("//////////////exercies 2//////////////");
 
function factorial(n) {
var result = n;
if (n === 0 || n === 1) 
return 1; 
while (n > 1) { 
n--; 
result = result * n; 
}
return result;
}
console.log(factorial(2));
console.log(factorial(4));
   


/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/
console.log("//////////////exercies 3//////////////");

function repeatStr(str,num) {
    let concat= str;
    let i= 1;
    while(num-i !== 0){
    concat+= ' '+str;
    i++;
    }
    return concat;
}
console.log(repeatStr("to",2));
console.log(repeatStr("to",4));

/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/
console.log("//////////////exercies 4//////////////");

function sum2(n1,n2) {
    let sum= n1;
    let i= n1+1;
    while(i != n2+1){
        sum+= i;
        i++;
    }
    return sum;
}
console.log(sum2(4, 5));
console.log(sum2(3, 6));

/*
5
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
** Important: the continue condition should be [somthing!== 0]
** Important: You should't have extra space at the end
Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*/
console.log("//////////////exercies 5//////////////");

function repeatStr2(st1 ,st2) {
    let concat= st1;
    let i= 1;
    let num= st2.length;
    while(num-i !== 0){
    concat+= ' '+st1;
    i++;
    }
    return concat;
}
console.log(repeatStr2("ro","cc"));
console.log(repeatStr2("ro","fff"));
console.log(repeatStr2("roof","top"));



/*
6
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/
console.log("//////////////exercies 6//////////////");

function multiOf(n1,n2,n3) {
     return n1* (Math.pow(n2,n3));

}
console.log(multiOf(4,10,3));
console.log(multiOf(6,3,2));
console.log(multiOf(6,2,3));

/*
7
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/
console.log("//////////////exercies 7//////////////");
function muti2(par1,par2) {
    let mul= par1;
    let i= par1+1;
    while(i != par2+1){
        mul*= i;
        i++;
    }
    return mul;
}
console.log(muti2(4, 5));
console.log(muti2(3, 6));
console.log(muti2(2, 8));

/*
8
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should't have extra space at the end and comma
** Important: the stop condition should [num1!==num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/
console.log("//////////////exercies 8//////////////");
function numberBetweenUs(n1,n2) {

    var arr = [];
    var i=n1+1;
    while (i<=n2-1) {
        arr.push(`${i}`);
        i++;
    }
   return `${arr}`;
}
console.log(numberBetweenUs(2,8));
console.log(numberBetweenUs(1,3));


/*
9
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/
console.log("//////////////exercies 9//////////////");

function countDown(para1) {
   let arra=[];
   let countd=para1;
    while (countd>0) {
       arra.push(countd);
       countd--;
    }       
    return `${arra}`;
}
console.log(countDown(5));
console.log(countDown(2));
console.log(countDown(7));

/*
10
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
you need to use only sum
multiplication2(5,4) => 20
multiplication2(2,8) => 16
multiplication2(7,6) =>  42
*/
console.log("//////////////exercies 10//////////////");

function multiplication2(par1,par2) {
    let sum=0;
    while (par2) {
       sum= sum+par1;
       par2--;
    }return sum;
}
console.log(multiplication2(5,4));
console.log(multiplication2(2,8));
console.log(multiplication2(7,6));

/*
11
Write a function called mod2
that takes two parameters
and return the module of them
without using %
mod2(5,4) => 1
mod2(2,8) => 2
mod2(7,4) => 3
mod2(8,4) => 0
*/
console.log("//////////////exercies 11//////////////");

function mod2(pa1,pa2) {

    while (pa1 >= pa2)
        pa1 -= pa2;
       return pa1;

}
console.log(mod2(5,4));
console.log(mod2(2,8));
console.log(mod2(7,4));
console.log(mod2(8,4));

/*
12
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
repeatChar("schOol","o") => 2
repeatChar("school","a") => 0
repeatChar("School","s") => 1
try more case by yourself
*/

console.log("//////////////exercies 12//////////////");

function repeatChar(str,char) {
    let x=0;
    let sum=0;
    let newstr=str.toLowerCase();
    let str_length=str.length;
    while(str_length>0){
        if(newstr[x]==char){
            sum=sum+1;
        }
        x++;
        str_length--;
    }
    return sum;
}

console.log(repeatChar("schOol","o"));
console.log(repeatChar("schOol","o"));
console.log(repeatChar("school","a"));
console.log(repeatChar("School","s"));
console.log(repeatChar("runnn","n"));








// Advanced Part {for your benefits}

// Dont solve any question here if you didnt 
//finish all the question a bove with your pair

// This part you can try it and solve solo not with your pair

// This part is extra (and there is no help from the trainer) it is good to try it


/*
1
Create a function called fibon
that takes 1 parameter a number,
and return the fibonacci for this number
Ex: fibon(7); => 21
Ex: fibon(2); => 2
Ex: fibon(1); => 1
Ex: fibon(0); => 1
fib(n)=fin(n-1)+fib(n-2)
fibon(n): 1 1 2 3 5 8 13 21
         | | | | | |  |  |
n:        0 1 2 3 4 5  6  7
*/


/*
2
Write a function called mirror
that takes one parameter a string
and return the reversed string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
** Important: You should dint have extra space at the end
mirror("school") => "loohcs"
mirror("car") => "rac"
mirror("maDrasa") => "asarDam"
*/



/*
3
Write a function called mirrorCaseAlso
that takes one parameter a string
and return the reversed string order
and the lower case to upper case
and the upper case to lower case
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
** Important: You should dint have extra space at the end
mirrorCaseAlso("sChOol") => "LOoHcS"
mirrorCaseAlso("THOR") => "roht"
mirrorCaseAlso("BaBa") => "AbAb"
*/



/*
4
Write a function called repeatChar2
that takes two parameters
and return the times that this char
wit case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
repeatChar2("schOol","o") => 1
repeatChar2("school","a") => 0
repeatChar2("School","S") => 1
try more case by yourself
*/


/*
5
Create a function called HiSayHelloTo
that takes 1 parameter a number that represent
the nubmer of people come to an event,
and say hi to each person sepretadly
+ let him/her say hello to each one that comes before him/her
Ex: welcomeSayHello(3);
=>
hi 1
hi 2 Now Pleas Say Hello To 1
hi 3 Now Pleas Say Hello To 1 and 2
Ex: welcomeSayHello(7); =>
hi 1
hi 2 Now Pleas Say Hello To 1
hi 3 Now Pleas Say Hello To 1 and 2
hi 4 Now Pleas Say Hello To 1, 2 and 3
hi 5 Now Pleas Say Hello To 1, 2, 3 and 4
hi 6 Now Pleas Say Hello To 1, 2, 3, 4 and 5
hi 7 Now Pleas Say Hello To 1, 2, 3, 4, 5 and 6
*/

