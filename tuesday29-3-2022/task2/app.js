"use strict";
let locform = document.getElementById("Form");
let pargloc =  document.getElementById("cityResult")


function getvalue(loccation)
{
     this.loccation = loccation;
     outputlocation(loccation);
}



async function outputlocation(x)
{
    let respone = await fetch(`https://eu1.locationiq.com/v1/search.php?key=pk.146180d54ef1b81b7922cf956cba402d&q=${x}&format=json`)
    let data = await respone.json()
   
   let createname = document.createElement("span");
   pargloc.appendChild(createname)
   createname.innerHTML= `Location Name: ${data[0].display_name} <br>
   lot: ${data[0].lat}
   lon: ${data[0].lon}
   <br>`
   let imgsrc = data[0].icon
   console.log(imgsrc);
   document.getElementById("imgg").src = `${imgsrc}`
    
    console.log(data);
}



locform.addEventListener("submit" , getfromform ) 
function getfromform(event) 
{
    event.preventDefault();
    let loccation = event.target.locName.value ; 
    console.log(loccation);
    new getvalue(loccation)

}
// getfromform();