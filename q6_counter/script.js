let button = document.querySelector("#increment");
button.addEventListener("click", function(){
    let click = 0;
    click = click + 1;
    document.querySelector("#box").innerHTML(click);
}