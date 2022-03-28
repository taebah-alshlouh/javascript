"use strict";

// built web browser that contains a form for a mobile store where it takes client name 
// and phone type and render the data inside table contains the following column (client name, phone type,
// // price phone and phone condition), the phone price is between (50,500) 
// and the should render passed on phone price if it more than 100 shows in condition "new Device" less than 
// show "used" and should store data in local storage when I refresh the page still show the data I store it before.

let mobForm = document.getElementById("mobForm");
let thElemen = document.getElementById("headTa");
let tbElement=document.getElementById("boadTa");

let order_phone = [];

function Order(useName, typeNameD) {
  this.useName = useName;
  this.typeNameD = typeNameD;
  this.price= price(50,500);

  order_phone.push(this);
  render();
  storeInLocalStorage( );
  console.log(order_phone);
}


function price(min,max){
    return  Math.ceil(Math.random() * (max - min) + min);
  
}


function condition() {
    if (Order.price < 100){
        return "used";
    }else {
        return "new Device";
    }
}



mobForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  let useName = event.target.useName.value;
  let typeNameD = event.target.typeNameD.value;
 
  new Order(useName, typeNameD);
}


function render() {
    let trElement = document.createElement("tr");
    let tdElement4 = document.createElement("td");
    let tdElement1 = document.createElement("td");
    let tdElement2 = document.createElement("td");
    let tdElement3 = document.createElement("td");
  
    for (let i = 0; i < order_phone.length; i++) {
      tbElement.appendChild(trElement);
      trElement.appendChild(tdElement4);
      trElement.appendChild(tdElement1);
      trElement.appendChild(tdElement2);
      trElement.appendChild(tdElement3);
  
      tdElement4.textContent = order_phone[i].useName;
      tdElement1.textContent = order_phone[i].typeNameD;
      tdElement2.textContent = order_phone[i].price;
      tdElement3.textContent = order_phone[i].condition;
    }
}    
handleSubmit();

    function storeInLocalStorage ( ){
        let stringArray=JSON.stringify(order_phone);
        localStorage.setItem("data",stringArray);
    }


    function callFromLocalStorage(){
        let dataObj=localStorage.getItem("data");
    
        let strbject=JSON.parse(dataObj);
        if(strbject != null){
            order_phone=strbject;
        }
        render( ); 
    }
