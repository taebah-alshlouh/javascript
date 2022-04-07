"use strict";
let regestForm=document.getElementsByName("regestForm");
let button=document.getElementById("sub");
let fName=document.getElementById('f_name');
let lName=document.getElementById('L_name');
let birthDate=document.getElementById('bdate');
let email=document.getElementById('email');
let password=document.getElementById('password');

let data=[];


function storeInLocal(){
    let array=JSON.stringify(data);
    localStorage.setItem('Data',array);
}




// function validation(fName,lName,birthDate,email,email2,password,repass) {
//     let pwd_expression = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
//     let letters = /[A-Za-z]+$/;
//     let filter = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// ////////////////////////////////
//     if(fName =='')
//            alert("Enter your Name");
//      else if( fName.test(letters)===fName.value)
//              return true;
//      else
//          alert("The name is not valid");
// ///////////////////////////////////////
//      if(lName =='')
//         alert("Enter your Name");
//      else if(lName.test(letters)===lName.value)
//             return true;
//     else
//             alert("The name is not valid");
// /////////////////////////////////////////////

//     if (password.match(pwd_expression)) 

//         alert("Valid email address!");
//      else 
//         alert("Invalid email address!");
    
// ////////////////////////////////////
//    if(email.test(filter)===email)
//     alert("valid Email");
//     else
//     alert("invalid Email")
// //////////////////////////////////
//     if (email2=='') 
//        { alert("enter your email again");}
    
//     else if(email2.test(filter))
//        {return true}
    
//     else
//       { alert("the email invalid");}
// ///////////////////////////////////
//        if(email=== email2){
//            return email2;

//        }
// ////////////////////////////////////
   



regestForm.addEventListener('submit',submithandler);
function submithandler(event) {
    event.preventDefault();
    let fName=event.target.f_name.value;
    let lName=event.target.L_name.value;
    let birthDate=event.target.bdate.value;
    let email=event.target.email.value;
    let email2=event.target.email2.value;
    let password=event.target.password.value;
    let repass=event.target.password2.value;
   data.push(fName,lName,birthDate);
 
   validation(fName,lName,birthDate,email,email2,password,repass)
   storeInLocal()
}

submithandler();