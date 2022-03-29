"use strict";
console.log("task1");
///////////////////////
let me={
    firstname:"Taebah",
    lastname:"shlouh",
    age:27,
    dob:"22 january 1995",
    favorite_food:["pancake","maqloba","mansaf"],
    favorite_movie: ["call","Alive","Space Sweeper","Emma","Free Guy"],
    show :function () {
        return `name: ${this.firstname} ${this.lastname} age:${this.age}`;
    }

};
console.log(me);
document.getElementById("t1").innerHTML=me.show();
;

//////////////////
  /*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/
console.log("task2");

let persons= [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];
  
function firstName(na) {
    let array=[];
    for (let x = 0; x < na.length; x++) {
        array.push(na[x].name.first);
        
    }
    return array;
};
console.log(firstName(persons));
document.getElementById("t2").innerHTML= firstName(persons);

/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/
console.log("task3");

const averageAge = (arr = []) => {
    const { sum, count } = arr.reduce((acc, val) => {
       let { sum, count } = acc;
       sum += val.age;
       count++;
       return { sum, count };
       }, {
          sum: 0, count: 0
    });
    return (sum / (count || 1));
 };
 console.log(averageAge(persons));


document.getElementById("t3").innerHTML= averageAge(persons);
/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/
console.log("task4");

function olderPerson(arr) {
    let Age = arr[0].age;
    let Older = 0;
    for (let i = 1; i < arr.length; i++) {
      if (Age < arr[i].age) {
        Age = arr[i].age;
        Older = i;
      }
    }
    return `${arr[Older].name.first} ${arr[Older].name.last}`;
  }
  console.log(olderPerson(persons));
  document.getElementById("t4").innerHTML= olderPerson(persons);
  /*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/
console.log("task5");

  function longestName(arr) {
    let Name = arr[0].name.first.length + arr[0].name.last.length;
    let indexLongestName = 0;
    for (var i = 1; i < arr.length; i++) {
      if (Name < arr[i].name.first.length + arr[i].name.last.length) {
        Name = arr[i].name.first.length + arr[i].name.last.length;
        indexLongestName = i;
      }
    }
    return arr[indexLongestName].name.first + " " + arr[indexLongestName].name.last;
  }
  console.log(longestName(persons));
  document.getElementById("t5").innerHTML= longestName(persons);
/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/
console.log("task6");
function longestName(arr) {
    
}





console.log(longestName(persons));
document.getElementById("t5").innerHTML= longestName(persons);
//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/
console.log("//////////task 7////////////");
function repeatWord(str) {
    let substr=str.toLowerCase().split(' ');
    let obj={};
    let count;
    for (let index = 0; index < str.length; index++) {
       let objindex=obj[substr[index]];
       if(objindex){
         count=objindex;
       }
       else{
         count=0;
       }
       obj[substr[index]]=count+1
    }
    return obj;
}


/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/
function repeatChar(str) {
  
}

/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/
function selectFromObject(x,y){
  let obj = {}
      for(let i =0 ; i<y.length ; i++)
      {
          if(Object.keys(x)[i]==y[i])
          {
              console.log(x[y[i]]);
              obj[y[i]] = x[y[i]];
          }
      }
  return obj;
  }
  console.log(selectFromObject({a: 1, cat: 3 }, ['a', 'cat', 'd']));

/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object

Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/
function objectToArray(obj) {
  
}

/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object

Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/
function arrayToObject(x)
{
     let newobj = {};
     for(let i=0 ; i<x.length; i+=2)
     {
         newobj[x[i]] = x[i+1];      
     }
     return newobj;
}

console.log(arrayToObject(["firstName","Moh","age",24]));
/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable

Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/
function onlyNumber(num) {
  let numobj={};
  for (let index = 0; index < Object.keys(num).length; index++) {
    if(typeof(Object.values[i]) == "it's number"){
      console.log();
    }
    
  }
}

/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable

Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/
function onlyString(obj) {
  let newObj={};
  for (let i = 0; i < Object.keys(obj).length; i++) {
    if (typeof(Object.values(obj)[i]) == `string`) {
      newObj[Object.keys(obj)[i]] = Object.values(obj)[i];
    }
  } return newObj;
}
console.log(onlyString({firstName:"Moh",age:24,movies:[1,5,"string"], he:`ibra`,she:`sara`}));
document.write(onlyString({firstName:"Moh",age:24,movies:[1,5,"string"], he:`ibra`,she:`sara`}));


/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable

Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/
function onlyArray(obj) {
  let numobj={};
  for(let i=0;i< Object.keys(obj).length; i++)
  {
    if(Array.isArray(Object.values(obj)[i]))
    {
      console.log(Object.values(obj)[i]);
      numobj[Object.keys(obj)[i]]=Object.values(obj)[i]
    }
  }
  return numobj;
}

console.log(onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));
document.getElementById("t14").innerHTML=onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]});
/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']

*/
console.log("//////////task15/////////////");
function keysArray(object) {
  let newob = Object.keys(object);
  return newob;
}
console.log( keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));
document.getElementById