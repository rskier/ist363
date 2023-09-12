//console.log("js has been loaded");

// variables, methods and functions

// 1. variables
const myName = "Rebecca Skier";
console.log(myName);

const myAge = 21
const myCity = "Syracuse"

const introduction = `Hi, my name is ${myName}, I am ${myAge} years old and I live in ${myCity};`

console.log(introduction);

console.log(myCity);

// 2. methods
const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("overlay");
console.log(menuBtn);

// "event name", callback function
menuBtn.addEventListener("click", function(){
    //console.log("menu button has been clicked");
    overlay.classList.add("active");
}); // end of menuBtn click event