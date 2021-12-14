// JavaScript Document
var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
    deNav = event.target.parentNode;
    deNav.classList.toggle("toonMenu");
}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}