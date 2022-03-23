"use strict";
let box = document.getElementById('box');
box.style.color = "blue";
let index = 0;
let colors = ['red', 'green', 'blue'];

box.addEventListener('click', function onClick() {
    box.style.backgroundColor = colors[index];
    index = index >= colors.length - 1 ? 0 : index + 1;
});