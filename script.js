"use strict";

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordBtn = document.getElementById("password-btn")
let passwordEl = document.getElementById("password-el")
let incremeantBtn = document.getElementById("incremeant-btn")
let decremeantBtn = document.getElementById("decremeant-btn")
let lengthInput = document.getElementById("length-input")
lengthInput.value = 8


passwordBtn.addEventListener("click", function(){
    let password = ""
    if(lengthInput.value >= 8 && lengthInput.value <= 32){
        for(let i = 0; i < lengthInput.value; i++){
        password += characters[Math.floor(Math.random()*characters.length)]
        }
        passwordEl.textContent = password;
    }
    else{
        passwordEl.textContent = "Error: Length out-of-range."
    }
})

incremeantBtn.addEventListener("click", function(){
    if(lengthInput.value < 32){
        lengthInput.value++;
    }
})

decremeantBtn.addEventListener("click", function(){
    if(lengthInput.value > 8){
        lengthInput.value--;
    }
})
