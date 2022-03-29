"use strict"

console.log ('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the’, ‘fox' 'over' lazy, 'dog',  ]

*/
console.log("///////////exercise 1/////////////");
console.log(`Correct the syntax error 
[ 1,7  9  45, ]=>  [1,7 , 9  ,45,] 
["Str" "alex","moh" =>["Str", "alex","moh"]
'the’, ‘fox' 'over' lazy, 'dog',  ] => ['the', 'fox', 'over' ,'lazy', 'dog',] `);
/*
2
What is the index of "Banana”, Tomato"
var fruits=["Tomato","Banana","Watermelon"]
*/
console.log("///////////exercise 2/////////////");
console.log(`What is the index of "Banana”, Tomato"
var fruits=["Tomato","Banana","Watermelon"] =>   1 ,0 `);
/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
console.log("//////////exercise 3/////////////");

let Favorite_Food=["mansaf","pancake","apple pie","maqlubah"]
let Favorite_Sport=["football","ballet","duel"];
let Favorite_Movie=["alive","Emma","Enola holmes"];
console.log(Favorite_Food,Favorite_Sport,Favorite_Movie);
/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
console.log("//////////exercise 4/////////////");
function firstOfArray(arra){
  return arra[0];
}
let arra=["taeba","samar","tala","tarneem"];
console.log( firstOfArray(arra[0]));
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
console.log("//////////exercise 5/////////////");
function lastOfArray(arra) {
  return arra.slice(-1);

}
console.log(lastOfArray(arra)); 
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
console.log("//////////exercise 6/////////////");

var array = [0,5,7,9];
array.shift(0);
array.unshift(1,3,4,6,8,9);
array.pop();
array.pop();
array.pop();
array.push(10);
console.log(array);

/*
7
Using the console try to figure out what the thing that’s (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
console.log("//////////exercise 7/////////////");

array.pop();
array.shift();
array.shift();
array.shift();
array.shift();
array.shift();
array.unshift(5);
array.push(-7,3.5)
console.log(array);
/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
console.log("//////////exercise 8/////////////");

function middleOfArray(arr) {
  if (!arr.length)
    return;
    
  const mid = arr.length / 2;
  if (arr.length % 2 === 1) {
    return arr[Math.floor(mid)];
  } else {
    return [
      arr[mid - 1],
      arr[mid],
    ];
  }
}
let arr2=[1,4,5,3,5,6,7];
console.log( middleOfArray(arr2));

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
console.log("//////////exercise 9/////////////");

let animals =['cat', 'ele', 'bird'];
  animals[0]="zebra";
  animals[1]="elephant";
  animals.pop();
  console.log(animals);


// 10
// Create a function called indexOfArray
// that accept an array and index
// and return what this array have in this index

// var nums= [1,2,3,8,9]
// Ex: indexOfArray(nums,3) => 8
// Ex: indexOfArray(nums,1) => 2
// Ex: indexOfArray(nums,4) => 9

// **try more cases by your self
// */
console.log("//////////exercise 10/////////////");

function indexOfArray(nums,index) {
  for (let index = 0; index < array.length; index++) {
      const element = array[index];
      console.log("element " +element+"index " +index);
      
  }
}
let nums= [1,2,3,8,9];
indexOfArray(nums,2);
indexOfArray(nums,4);
indexOfArray(nums,1);
indexOfArray(nums,3);
indexOfArray(nums,5);
console.log(nums);

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
console.log("//////////exercise 11/////////////");

function arrayExceptLast(nums) {
  for (let index = 0; index < array.length-2; index++) {
      let element = array[index];
  }
  console.log(array);
}
arrayExceptLast(nums);
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
console.log("//////////exercise 12/////////////");

function  addToEnd(num) {
  nums1.push(num); 
  return nums1;   
}
let nums1=[1,2,3,8,9];
console.log(addToEnd(5));
console.log(addToEnd(11)); 


// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("//////////exercise 13/////////////");

let random = [1, 2, 3, 4];

function SumArray(random) {
  let sum = 0;
for (let i = 0; i < random.length; i++) {
    sum += random[i];
}
 return sum;
}

console.log(SumArray(random));


function sumArray (random){
  let i= 0;
  let sum =0;
  while (i< random.length) {
    sum+=random[i];
    i++;
  }
  return sum;
}
console.log(sumArray(random));
/*

14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("//////////exercise 14/////////////");

function minInArray(nums3) {
  let smallestNum = nums3[0];
  for (let i = 1; i < nums3.length; i++) {
    if(nums3[i] < smallestNum) {
      smallestNum = nums3[i];   
    }
  }
  return smallestNum;
}


let nums3= [10,2,3,8,9];
console.log(minInArray(nums3));


function MinInArray(nums3) {
  let i = 1;
  let smallestNum = nums3[0];

  while (i < nums3.length) {
    if(nums3[i] < smallestNum){
      smallestNum = nums3[i];
      i++;
    }
    return smallestNum;
  }
}
console.log(MinInArray(nums3));

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("//////////exercise 15/////////////");

function removeFromArray(nums3) {

  for (let i = nums3.length-1; i >=0; i--){
    nums3[i].remove();
  }
 return nums3;
}
console.log(nums3);
console.log(removeFromArray(nums3[3],));

function RemoveFromArray(nums3) {
  let i = 0;
  while (condition) {
    
  }

}

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("//////////exercise 16/////////////");

function oddArray(arr3) {
  let i=0;
  let num=arr3.indexOfArray;
  while(num<length-1){
    i++;
    if(num % 2 == 0){
    num.shift(arr3[i]);
  }
    else{
      break;
    }
  }
  return arr3;
}
let arr3=[1,2,3,8,9];
console.log(oddArray(arr3));
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("//////////exercise 17/////////////");

function aveArray(arr3) {
  let total = 0;
  for (let i = 0; i < arr3.length; i++) {
      total += arr3[i];
  }
      console.log(Math.round(total/arr3.length));
}

aveArray(arr3);

function aveArray1(arr3) {
  let total = 0;
  let i = 0;
  while(i < arr3.length){
    total += arr3[i];
    i++;
  }
  console.log(Math.round(total/arr3.length));
}
aveArray1(arr3);


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("//////////exercise 18/////////////");

function shorterInArray(strings) {
  let tiny = strings[0];
  for (let i = 0; i < strings.length; i++) {
     const element = strings[i];
         if( tiny.length > element.length){
             tiny = element;
             }
                  }
                 return tiny;
                     }
 
 let strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
 console.log(shorterInArray(strings));
 function shorterInArray1(strings) {
  let tiny = strings[0];
  let i = 0;
  while (i < strings.length) {
    const element = strings[i];
    i++;
     if( tiny.length > element.length){
      tiny = element;
           }
          return tiny;
  }
 }
 console.log(shorterInArray(strings));

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("//////////exercise 19/////////////");

function repeatChar(str,char) {
  let count=0;
  for (let i = 0; i < str.length; i++) {
    if (str[i]==char)
    count++;
    
  }
  return count;
}
let string= "alex mercer madrasa rashed2 emad hala";
console.log(repeatChar(string,"a"));
console.log(repeatChar(string,"z"));


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*





21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/



