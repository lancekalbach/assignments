var header = document.getElementById("header")
header.style.color ="blue"
header.style
header.textContent ="Dom Olympics"
header.style.fontSize ="50px"
header.style.textAlign ="center"

var blw =document.getElementById('below')
blw.style.textAlign ="center"
blw.style.fontSize ="30px"
blw.style.color ="black"


var chatright = document.getElementsByClassName("right")
chatright[0].textContent ="I'm having a great day! How is yours?"
chatright[1].textContent="That's so good I am so glad!"

var chatleft = document.getElementsByClassName("left")
chatleft[0].textContent ="Hello! How is your day going?"
chatleft[1].textContent ="Awesome, my day is going super good!"

function erase() {
    chatleft[0].textContent =""
    chatleft[1].textContent =""
    chatright[0].textContent =""
    chatright[1].textContent =""
}

var clear = document.getElementById("clear-button")
clear.addEventListener("click", erase)

var msgcolor = document.getElementsByClassName("message")
function changeC() {
    msgcolor[0].style.backgroundColor ="red"
    msgcolor[1].style.backgroundColor ="black"
    msgcolor[2].style.backgroundColor ="red"
    msgcolor[3].style.backgroundColor ="black"
    msgcolor[0].style.color ="white"
    msgcolor[1].style.color ="white"
    msgcolor[2].style.color ="white"
    msgcolor[3].style.color ="white"
}

function changeB() {
    msgcolor[0].style.backgroundColor ="brown"
    msgcolor[1].style.backgroundColor ="blue"
    msgcolor[2].style.backgroundColor ="brown"
    msgcolor[3].style.backgroundColor ="blue"
    msgcolor[0].style.color ="black"
    msgcolor[1].style.color ="black"
    msgcolor[2].style.color ="black"
    msgcolor[3].style.color ="black"
}

var drop = document.getElementById("theme-drop-down")
 drop.addEventListener("click", changeC)
 drop.addEventListener("dblclick", changeB)


