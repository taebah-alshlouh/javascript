"use strict"
////////the first task//
let Favorite_Food=["mansaf","pancake","apple pie","maqlubah"]
let Favorite_Sport=["football","ballet","duel"];
let Favorite_Movie=["","",""];
console.log(Favorite_Food,Favorite_Sport,Favorite_Movie);

//////////the second task///////////
function firstOfArray(input){
  return arra[0];
}
let arra=["taeba","samar","tala","tarneem"];
console.log( firstOfArray(arra[0]));

//////////the third task///////
function lastOfArray(input) {
    return arra.slice(-1);

}
 console.log(lastOfArray(arra)); 

 /////////the fourth task//////////
 var array = [0,5,7,9];
 array.shift(0);
 array.unshift(1,3,4,6,8,9);
array.pop();
array.pop();
array.pop();
array.push(10);
console.log(array);

/////////the fifth task////////
array.pop();
array.shift();
array.shift();
array.shift();
array.shift();
array.shift();
array.unshift(5);
array.push(-7,3.5)
console.log(array);

////////the sixth task/////////

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

  /////////////the seventh task/////////////
let animals =['cat', 'ele', 'bird'];
animals[0]="zebra";
animals[1]="elephant";
animals.pop();
console.log(animals);

///////////8th task//////////////
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

////////////////9th task////////////////////

function arrayExceptLast(nums) {
    for (let index = 0; index < array.length-2; index++) {
        let element = array[index];
    }
    console.log(array);
}
arrayExceptLast(nums);

////////////the 10th task///////////12////

function  addToEnd(num) {
      nums1.push(num); 
      return nums1;   
}
let nums1=[1,2,3,8,9];
console.log(addToEnd(5));
console.log(addToEnd(11)); 

/////////////the 11th task//////////13//////////

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

/////////////////the 12th task//////////////14///////////////

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

///////the 13th task//////removeFromArray//////15////////

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

//////the 14th task////////oddArray///////16//////////

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

///////the 15th task//////////aveArray////////////17//////
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

/////////the 16th task//////////////shorterInArray//////////////18////////
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

 //////the 17th task///////////////////repeatChar//////////////19//////////

 function repeatChar(params) {
   
 }
 let string= "alex mercer madrasa rashed2 emad hala";
 repeatChar(string,"a");

 ////////the 18th task /////////////evenIndexOddLength/////////20//////////




 



  ////////the 19th task /////////////powerElementIndex/////////21//////////







////////the 20th task /////////////evenNumberEvenIndex/////////22//////////


