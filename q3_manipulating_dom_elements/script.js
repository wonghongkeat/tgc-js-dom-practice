// PLACE YOUR CODE HERE
let header = document.querySelector("h1");
header.innerText = "Hello world!";

let color = document.querySelector("span#important");
color.style.background = "red";

let todo = document.querySelector("li.todo");
todo.style.fontFamily = "Verdana";
todo.style.fontSize = "16px";
// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = exports = {header, important, todo};
} catch (e) {}