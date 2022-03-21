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

function  addToEnd(input) {
        let re=nums1[index].push();
        console.log(nums1);
}
let nums1=[1,2,3,8,9];
console.log(addToEnd(nums1(55))); 