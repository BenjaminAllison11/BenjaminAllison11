var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random");

function setGradient(){
    body.style.background = "linear-gradient(to bottom, " 
    + color1.value + "," + color2.value +")";

    css.textContent = body.style.background + ";";
}

window.onload = setGradient();

function noGenerator(){
    return Math.round(Math.random() * 255);
};

function rgbToHex(){
    var hex = noGenerator().toString(16);
    if (hex.length < 2){
        hex = "0" + hex;
    }
    return hex;
};

function randomColorNo() {
    var randomC = "#" + rgbToHex() + rgbToHex() + rgbToHex();
    return randomC
};

function setGradientRandom () {
    color1.value = randomColorNo();
    color2.value = randomColorNo();
    setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", setGradientRandom);

