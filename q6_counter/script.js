let increment = document.querySelector("#increment");
let box = document.querySelector("#box");
let decrement = document.querySelector("#decrement");
let reset = document.querySelector("#reset");
let count = 0;


increment.addEventListener("click", function(){
    if (count<10){
        count += 1;
        box.innerHTML = count;
    }
});

decrement.addEventListener("click", function(){
   if (count>0){
    count -= 1;
    box.innerHTML = count;
   }
});

reset.addEventListener("click", function(){
    count = 0;
    box.innerHTML = count;
});