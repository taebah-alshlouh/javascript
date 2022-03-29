"use strict";
let ulElement=document.getElementById("n");
async function getData() {
   let response=await fetch('https://eu1.locationiq.com/v1/search.php?key=pk.47e443853aa7832dbda5f46c0ff42778&q=aqaba&format=json');
   console.log(response);
   console.log(typeof response);
   let data=await response.json();
   console.log(data);

  let display= data.map((name)=> {

    let liElement=document.createElement("li");
    ulElement.appendChild(liElement);
    let l=name.display_name.split(",",2);
    liElement.innerHTML=` disaply name : ${l} lat: ${name.lat} lon: ${name.lon}`;
    
})
}
getData();