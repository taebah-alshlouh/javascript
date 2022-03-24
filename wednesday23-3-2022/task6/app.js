"use strict";

function show1() {
    let one = document.getElementById("p1");
    let one1 = document.getElementById("hide1");

    if (one.style.display == "none" && one1.style.display == "none") {
        one.style.display = "block";
        one1.style.display = "block";
    } else {
        one.style.display = "none";
        one1.style.display = "none";

    }
  }
  function show2() {
    let two = document.getElementById("p2");
    let two1 = document.getElementById("hide2");
    if (two.style.display == "none" && two1.style.display == "none") {
        two.style.display = "block";
        two1.style.display = "block";
    } else {
        two.style.display = "none";
        two1.style.display = "none";

    }
  }
  function show3() {
    let three = document.getElementById("p3");
    let three1 = document.getElementById("hide3");

    if (three.style.display == "none" && three1.style.display == "none") {
        three.style.display = "block";
        three1.style.display = "block";

    } else {
        three.style.display = "none";
        three1.style.display = "none"
    }
  }

