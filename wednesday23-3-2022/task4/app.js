"use strict";
// Create a simple what-you-see-what-you-get text editor.
//   - Change the text inside the "text" div according to the form selections.

function fontFamily() {
    let f_m =document.getElementById("fontFa").value;
    if(f_m=="Courier New"){
          document.getElementById("textar").style.fontFamily="Courier New";
    }
    else if(f_m=="Lucida Sans"){
           document.getElementById("textar").style.fontFamily="Lucida Sans";
    }
    else if(f_m=="Arial"){
        document.getElementById("textar").style.fontFamily="Arial";
    }
}
function fontSize(){
    let f_s =document.getElementById("fS").value;
    if (f_s=="12px"){
        document.getElementById("textar").style.fontSize="12px";
    }else if(f_s=="18px"){
        document.getElementById("textar").style.fontSize="18px";
    }else if(f_s=="22px"){
        document.getElementById("textar").style.fontSize="22px";
    }
}
function fStyle() {
    let text_are = document.getElementById("textar");
    let italic = document.getElementById("Italic").checked;
    text_are.style.fontStyle = (italic ? "italic" : "normal");
}


function fWeight() {
    let text_are = document.getElementById("textar");
    let bo = document.getElementById("Bold").checked;
    text_are.style.fontWeight = (bo ? "bold" : "normal");
}

function tDecoration(){
    let text_are = document.getElementById("textar");
    let unde_line = document.getElementById("Underline").checked;
    text_are.style.textDecorationLine = (unde_line ? "underline" : "");
}
