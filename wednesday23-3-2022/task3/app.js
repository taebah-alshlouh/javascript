"use strict";
function setImage(select){
    var image = document.getElementsByName("image-swap")[0];
    image.src = select.options[select.selectedIndex].value;
}