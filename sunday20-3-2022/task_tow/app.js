"use strickt"
let num=prompt("Enter number");
let num_conv=Number(num);
let day;
switch (num_conv) {
  case 0:
    day= "Sunday";
    break;
  case 1:
    day= "Monday";
    break;
  case 2:
    day= "Tuesday";
    break;
  case 3:
    day= "Wednesday";
    break;
  case 4:
    day= "Thursday";
    break;
  case 5:
    day= "Friday";
    break;
  case  6:
    day= "Saturday";
    default:
      console.log("enter a vaild number from 0 to 6");
}
console.log(day);
document.writeln("Today is "+ day);