"use strict";
let show=document.getElementById('show');

function GetDataFromLStorage(){
    let Data=localStorage.getItem('Data');
    let conData=JSON.parse(Data);
    console.log(conData);
    renderData(conData)
}
GetDataFromLStorage()

function renderData(conData){
    conData.map(function(i){
    result.innerHTML= `I'm  ${i},  my birth date is ${i.bdate}`;///the full name and the birthdate
    })
}
