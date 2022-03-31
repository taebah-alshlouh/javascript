"use strict";
let show=document.getElementById('show');

function GetDataFromLStorage(){
    let Data=localStorage.getItem('formData');
    let parseData=JSON.parse(Data);
    console.log(parseData);
    renderData(parseData)
}
GetDataFromLStorage()

function renderData(parseData){
    parseData.map(function(i){
    result.innerHTML= `I'm  ${i.fullName},  my birth date is ${i.bdate}`;
    })
}