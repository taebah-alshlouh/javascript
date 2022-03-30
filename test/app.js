"use strict";

let text ="Lorem Ipsum is simply dummy text of the printing and ipsum typesetting industry";
let text1= "Lorem Ipsum has been the industry's standard dummy text ever since THIS The 1500s book. It has book of Lorem Ipsum.";

let result = text.match(/ipsum/gmi);
let result1 = text.search(/[THIS]/g);

document.getElementById("demo").innerHTML = result;
document.getElementById("demo1").innerHTML = result1;

let str = "He was eating cake  Cake in the cafe.";
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
// let test =str.replace(/[cake]/ig,"pancake");
// console.log(test);
// let nam1e="ahmad went to aqaba Ahmad eated";
// if (x.search(/a/)!= 'A'){
//     y=x.replace(/a/,'A');
//     console.log(nam1e);
//   }

  let str2="welcome to our session! We are 3 ";
  function numbers(num) {
      if (typeof(num)=='number')
      return 'It is not number';
      else
      return 'correct';
  }
console.log(numbers(4));


























// var regex = /ca[kf]e/g;
// var str = "He was eating cake in the cafe.";
// var matches = str.match(regex);
// alert(matches.length);

