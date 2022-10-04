function over() {
console.log("hello")
square[0].style.backgroundColor ="blue"
}

function out() {
    square[0].style.backgroundColor ="pink"
}

function held() {
    square[0].style.backgroundColor ="red"
}

function tap() {
    square[0].style.backgroundColor ="green"
}

function up() {
    square[0].style.backgroundColor ="yellow"
}

function scrll() {
    square[0].style.backgroundColor ="orange"
}

const square = document.getElementsByClassName("square");
console.log(square)
square[0].addEventListener("mouseover", over);
square[0].addEventListener("mouseout", out)
square[0].addEventListener("mousedown", held)
square[0].addEventListener("mouseup", up)
square[0].addEventListener("dblclick", tap)
square[1].addEventListener("wheel", scrll)

const space = document.getElementById("back");
space.style.backgroundColor = "black";


window.addEventListener("keydown", (event) => {
if (event.key == "b") {
    square[0].style.backgroundColor ="blue"
}
else if (event.key == "r") {
    square[0].style.backgroundColor ="red"
}
else if (event.key == "g") {
    square[0].style.backgroundColor ="green"
}
else if (event.key =="y") {
    square[0].style.backgroundColor ="yellow"
}
else if (event.key =="o") {
    square[0].style.backgroundColor ="orange"
}
else if (event.key =="p") {
    square[0].style.backgroundColor ="pink"
}
})


