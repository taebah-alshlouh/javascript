"use strict";

// built web browser that contains a form for a mobile store where it takes client name 
// and phone type and render the data inside table contains the following column (client name, phone type,
// // price phone and phone condition), the phone price is between (50,500) 
// and the should render passed on phone price if it more than 100 shows in condition "new Device" less than 
// show "used" and should store data in local storage when I refresh the page still show the data I store it before.

let mobForm = document.getElementById("mobForm");
let tbElement=document.getElementById("boadTa");

let order_phone = [];


function storeInLocalStorage ( ){
    let stringArray=JSON.stringify(order_phone);
    localStorage.setItem("data",stringArray);
}

callFromLocalStorage()


function Order(useName, typeNameD) {
  this.useName = useName;
  this.typeNameD = typeNameD;
  this.price= price(50,500);
  this.condition=condition();

  order_phone.push(this);
  render();
  storeInLocalStorage( );
  console.log(order_phone);
}

function price(){
    let devicePrice=Math.ceil(Math.random() *(500-50)+100);
    return devicePrice
}

function condition() {
    let divCondition=Order.price;
    if(divCondition <100)
    return 'Used';
    else 
    return 'New device';

}


mobForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  let useName = event.target.useName.value;
  let typeNameD = event.target.typeNameD.value;
 
  new Order(useName, typeNameD);
}

handleSubmit();


function render() {
     
    tbElement.textContent='';
    for (let i = 0; i < order_phone.length; i++) {
        let row = document.createElement("tr");
        let c1 = document.createElement("td");
        let c2 = document.createElement("td");
        let c3 = document.createElement("td");
        let c4 = document.createElement("td");

      tbElement.appendChild(row);
      row.appendChild(c1);
      row.appendChild(c2);
      row.appendChild(c3);
      row.appendChild(c4);
  
      c1.textContent = order_phone[i].useName;
      c2.textContent = order_phone[i].typeNameD;
      c3.textContent = order_phone[i].price;
      c4.textContent = order_phone[i].condition;
    }
}    


function callFromLocalStorage(){

    let dataObj=localStorage.getItem("data");
    let strbject=JSON.parse(dataObj);
    if (strbject !==null){
        order_phone= strbject;
    }
    render();
    
    }
