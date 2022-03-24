"use strict";
console.log("the first task");
///////////////////////
let me={
    firstname:"Taebah",
    lastname:"shlouh",
    age:27,
    dob:"22 january 1995",
    favorite_food:["pancake","maqloba","mansaf"],
    favorite_movie: ["call","Alive","Space Sweeper","Emma","Free Guy"],
    show:function () {
        return `name: ${this.firstname} ${this.lastname} age:${this.age}`;
    }

};
console.log(me);
