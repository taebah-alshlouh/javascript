"use strict";
// - Create Html page with two password fields and a submit button.
// - Perform input check and display an error message next the corresponding field if there is an error.
//   * Passwords must be at least 6 characters long.
//   * The two passwords must match.
// - The placeholders for the error messages have already been prepared (div-s with class "err").
// - By default the submit button should be hidden. Display the button only when there are no errors.

let subm =document.getElementById("sub");
subm.style.visibility = "hidden";

function checkValidation(){
   let firstPass = document.getElementById("pass");
   let repeatPass = document.getElementById("re_pass");
   let message1 = document.getElementById("check1");
   let message2 = document.getElementById("check2");

               
   if(firstPass.value.length >= 6){
        message1.innerHTML = "Correct : the length is 6";
   }
   else{
        message1.innerHTML="wrong :Length is short";
   }
       
   if (firstPass.value == repeatPass.value) {
       message2.innerHTML= "Password Match";
       subm.style.visibility="visible";
   }
   else if(firstPass.value != repeatPass.value ){
       message2.innerHTML=" Password Doesn't match";
   }

}