// PLACE YOUR CODE HERE
// let click = document.querySelecctor("h1");
// function eventListener(){
//     document.click.addEventListener("click");
//     h1.style.color = "yellow";
    
// }
let button = document.querySelector("#changeColor");
let h1 = document.querySelector("h1");

button.addEventListener("click", function() {
    h1.style.background = "yellow";
});