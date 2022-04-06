"use strict";
let reForm=document.getElementsByName("regestForm");
let button=document.getElementById("sub");
let data=[];

button.addEventListener('click',submithandler);
function submithandler(event) {
    event.preventDefault();
    let fName=event.target.f_name.value;
    let lName=event.target.L_name.value;
    let birthDate=event.target.bdate.value;
    let email=event.target.email.value;
    let email2=event.target.email2.value;
    let password=event.target.password.value;
    let repass=event.target.password2.value;
   data.push(fName,lName,birthDate)
 
   console.log(regesForm);
   validation(fName,lName,birthDate,email,email2,password,repass)
   LocalStorageFrom()
}


function LocalStorageFrom(){
    let array=JSON.stringify(info);
    localStorage.setItem('Data',array);
    if(array!='')
    return true;
}

submithandler();



function validation(fName,lName,birthDate,email,email2,password,repass) {
    let pwd_expression = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    let letters = /[A-Za-z]+$/;
    let filter = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
////////////////////////////////
    if(fName =='')
           alert("Enter your Name");
     else if( fName.test(letters)===fName.value)
             return true;
     else
         alert("The name is not valid");
///////////////////////////////////////
     if(lName =='')
        alert("Enter your Name");
     else if(lName.test(letters)===lName.value)
            return true;
    else
            alert("The name is not valid");
/////////////////////////////////////////////
    if(birthDate == '')
      alert("Enter your birth date");
    else if(birthDate.test(filter)===birthDate.value)
           return true;
    else
    alert("invalid date");
///////////////////////////////////////
    if (password.match(pwd_expression)) 

        alert("Valid email address!");
     else 
        alert("Invalid email address!");
    
////////////////////////////////////
   if(email.test(filter)===email)
    alert("valid Email");
    else
    alert("invalid Email")
//////////////////////////////////
    if (email2=='') 
       { alert("enter your email again");}
    
    else if(email2.test(filter))
       {return true}
    
    else
      { alert("the email invalid");}
///////////////////////////////////
       if(email=== email2){
           return email2;

       }
////////////////////////////////////
   

    }//////////////funn end/////////
function checkDate(date){
 let rege=/(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
 if(rege.test(date)){
     console.log('correct date');
     return date;
 }
 else{
     console.log('inncorrect date');
     emailError.innerHTML='inncorrect date';
 }
}