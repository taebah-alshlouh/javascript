"use strict"
let n = 5;
let str = "";
for (let i = 1; i <= n; i++) {////rows/////
  for (let j = 0; j < i; j++) { ////columns//
    str += " * ";
  }
  str += "\n";
}
console.log(str);
