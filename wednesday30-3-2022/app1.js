"use strict";
let show=document.getElementById('show');

function GetDataFromLStorage(){
    let Data=localStorage.getItem('formData');
    let conData=JSON.parse(Data);
    console.log(conData);
    renderData(conData)
}
GetDataFromLStorage()

function renderData(conData){
    conData.map(function(i){
    result.innerHTML= `I'm  ${i.fullName},  my birth date is ${i.bdate}`;
    })
}