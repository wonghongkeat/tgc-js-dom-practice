let header = document.querySelector("h1");
header.style.color = "green";

let finished = document.querySelector("li.finished");
finished.innerText = "Repay credit card debt";

let urgent = document.querySelector("li#urgent");
urgent.style.borderColor = "black";
urgent.style.borderWidth = "2px";

let emphasis = document.querySelector(".emphasis");
emphasis.style.textDecoration = "underline";

let Pemphasis = document.querySelector("p.emphasis");
Pemphasis.style.background = "orange";
Pemphasis.style.fontSize = "32px";
Pemphasis.style.lineHeight = "24px";

let todo = document.querySelector("li#urgent span.todo");
todo.style.background = "yellow";

let h2 = document.querySelector("h2");
let span = document.createElement("span");
span.setAttribute("class", "greetings");
span.innerHTML = "About Us";
h2.innerHTML = "";
h2.appendChild(span);

//or 
h2.innerHTML = "<span class="greetings">About Us</span>";
