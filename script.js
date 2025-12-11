let noClicks =1;
const maxNoClicks =4;
const minNoClicks = 0.65;
let noscale =1;
let yesScale =1;

const gifElement = document.getElementById("profile")
const noButton=document.getElementById("btn-noo")
const yesButton=document.getElementById("btn-yes")
const buttonContainer=document.querySelector(".btn-container")
const yesButtonStyle = window.getComputedStyle(yesButton);
const maxYesWidth= parseFloat(yesButtonStyle.maxWidth);

const gifs =["gifs/yesplease.gif"]
