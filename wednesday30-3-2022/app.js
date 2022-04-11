'use strict'
let first_name= document.getElementById('fname').value;
let last_name= document.getElementById('lname').value;
let birth_date= document.getElementById('bdate').value;
let email_= document.getElementById('email').value;
let password= document.getElementById('pass').value;
let button= document.getElementById('btn');
let info=[];

/////////////////////////
function fnameFun(){
    let first_name= document.getElementById('fname').value;
    let fname_pattern= /[^a-z|^ ]/i;
    let test1= first_name.search(fname_pattern);
    if(test1 != -1 ){
        document.getElementById('fname_span').innerHTML= "Inavlid name, your name should have only letters";
    }else{
        document.getElementById('fname_span').innerHTML= "";
        info.push(first_name);
    }
}
/////////////////////////
function lnameFun(){
    let last_name= document.getElementById('lname').value;
    let lname_pattern= /[^a-z|^ ]/i;
    let test2= last_name.search(lname_pattern);
    if(test2 != -1 ){
        document.getElementById('lname_span').innerHTML= "Inavlid name, your name should have only letters";
    }else{
        document.getElementById('lname_span').innerHTML= "";
        info.push(last_name);
    }
}
////////////////////////
function dateFun(){
    let birth_date= document.getElementById('bdate').value;
    let date_pattern= /^\d{4}-\d{2}-\d{2}$/;
    let test3= birth_date.search(date_pattern);
    if(test3 == -1){
        document.getElementById('date_span').innerHTML= "Invalid Date";
    }else{
        document.getElementById('date_span').innerHTML= "";
    }
}
////////////////////////
function emailFun(){
    let email_= document.getElementById('email').value;
    console.log(email_);
    let email_pattern1= /^[a-z | 0-9]/i;
    let email_pattern2= /@/;
    let email_pattern3= /[a-z].com$/i;
    let test4_= email_.search(email_pattern1);
    let test4__= email_.search(email_pattern2);
    let test4= email_.search(email_pattern3);
    if(test4_ == -1){
        document.getElementById('email_span').innerHTML= "Invalid Email, the email should be like that: test@addres.com";
    }else if(test4__ == -1){
        document.getElementById('email_span').innerHTML= "Invalid Email the email should be like that: test@addres.com";
    }else if(test4 == -1){
        document.getElementById('email_span').innerHTML= "Invalid Email the email should be like that: test@addres.com";
    }else{
        document.getElementById('email_span').innerHTML= "";
        info.push(email_);
    }
}

///////////////////////
function confEmailFun(){
    let email_= document.getElementById('email').value;
    let email_conf= document.getElementById('email_conf').value;
    if (email_ == email_conf){
        document.getElementById('email_conf_span').innerHTML= "";
    }else{
        document.getElementById('email_conf_span').innerHTML= "It Doesn't Match the Email you Entered";
    }
}
///////////////////////
function passwordFun(){
    let password= document.getElementById('pass').value;
    let pass_pattern1= /^[A-Z]/;
    let pass_pattern2= /\d/g;
    let pass_pattern3= /[^a-z|^0-9]/i;
    let test5= password.search(pass_pattern1);
    let test6= password.match(pass_pattern2);
    let test7= password.search(pass_pattern3);
    if( test5 == -1 || test6 == null || test6.length < 2 || test7 == -1 || (password.length < 8 || password.length > 32)){
        document.getElementById('password_span').innerHTML= "Invalid Password";
    }else{
        document.getElementById('password_span').innerHTML= ""; 
    }
    if(test5 == -1){
        document.getElementById('li1').style.display='block';
        document.getElementById('li1').innerHTML= "Your password should start with capital letter";
    }else{
        document.getElementById('li1').style.display='none';
        document.getElementById('li1').innerHTML= ""; 
    }
    if(test6 == null || test6.length < 2){
        document.getElementById('li2').style.display='block';
        document.getElementById('li2').innerHTML= "Your password should have at least 2 numbers";
    }else{
        document.getElementById('li2').style.display='none';
        document.getElementById('li2').innerHTML= ""; 
    }
    if(test7 == -1){
        document.getElementById('li3').style.display='block';
        document.getElementById('li3').innerHTML= "Your password should have at least 1 special character";
    }else{
        document.getElementById('li3').style.display='none';
        document.getElementById('li3').innerHTML= ""; 
    }
    if(password.length < 8 || password.length > 32){
        document.getElementById('li4').style.display='block';
        document.getElementById('li4').innerHTML= "Your password length should be between 8 and 32";
    }else{
        document.getElementById('li4').style.display='none';
        document.getElementById('li4').innerHTML= ""; 
    }
}
/////////////////////////////
function confPasswordFun(){
    let password= document.getElementById('pass').value;
    let password_conf= document.getElementById('pass_conf').value;
    if (password == password_conf){
        document.getElementById('password_conf_span').innerHTML= "";
    }else{
        document.getElementById('password_conf_span').innerHTML= "The two passwords doesn't match";
    }
}
////////////////////////////
console.log(info);

////////////////////////////
function submition(){
let infoArr= JSON.stringify(info);
localStorage.setItem('information', infoArr);
window.location= "index2.html";
}