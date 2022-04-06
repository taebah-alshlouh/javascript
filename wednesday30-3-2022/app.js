"use strict";
let regestForm=document.getElementsByName("regestForm");

let data=[];

regestForm.addeventListener('submit',submithandler);


function  regesForm(fName,lName) {
    this.fName=fName;
    this.lName=lName;
    

}

function submithandler(event) {
    event.preventDefault();
    let fName=event.f_name.value;
    let lName=event.L_name.value;
    let birthDate=event.bdate.value;
    let email=event.email.value;
    let email2=event.email2.value;
    let password=event.password.value;

   new regesForm()
}
submithandler();

function LocalStorageFrom(){
    let array=JSON.stringify(info);
    localStorage.setItem('Data',array);
}
function name(params) {
    
}
let pwd_expression = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    let letters = /[A-Za-z]+$/;
    let filter = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
