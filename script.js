var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColorButton = document.querySelector("#randomColorButton");



function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";

};

//klicka på knappen, knappen ger siffra 0-255.
// body style background ska vara lika med lineargradient + rbg + randomknappen x3

var randomColor = Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255);
// randomColor = Number(randomColor);

function setRandomColor() {
body.style.background = "linear-gradient(to right, rgb(" + randomColor + "), rgb(" + randomColor + "))";

}

randomColorButton.addEventListener("click", setRandomColor);

body.addEventListener("load", setGradient());

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
