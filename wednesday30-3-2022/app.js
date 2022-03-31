"use strict";
let regestForm=document.getElementsByName("regestForm");

let data=[];

regestForm.addeventListener('submit',submithandler);

function submithandler(event) {
    event.preventDefault();
    let fname=event.fname.value;

}
submithandler();