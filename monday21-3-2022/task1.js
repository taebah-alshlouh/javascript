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

  for (var i = 0, len = nums3.length; i < len; i++){
    nums3[i].remove();
    nums3[i].parentNode.removeChild(nums3[i]);
    
  }
  return nums3;
}
console.log(nums3);
console.log(removeFromArray(nums[3]));

