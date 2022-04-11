"use strict";

let infoo= JSON.parse(localStorage.getItem('information'));
document.getElementById("welcomeFullName").innerHTML = `${infoo[0]} ${infoo[1]}`;
document.getElementById("welcomeEmail").innerHTML = `Your email is: ${infoo[2]}`;