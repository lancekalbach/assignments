localStorage.setItem("name", "steve")
localStorage.setItem("age", "10")
localStorage.setItem("isAlive", true)
localStorage.setItem("friends", JSON.stringify(["mark", "tina", "jay"]))
localStorage.setItem("adress", JSON.stringify({street: "123 street", city: "SLC" }))

const name1 = localStorage.getItem("name")
const age = localStorage.getItem("age")
const isAlive = localStorage.getItem("isAlive")
const friends = JSON.parse(localStorage.getItem("friends"))
console.log(name1)
console.log(age)
console.log(isAlive)

// JSON.stringify => turning JS into JSON
// JSON.parse => Turns JSON into JS

count = 0

function counter(){
    if (typeof(Storage) !== "undefined") {
        if (localStorage.count) {
         localStorage.count = Number(localStorage.count)+1
        } else {
           localStorage.count = 1
        }
        document.getElementById("count").innerHTML = localStorage.count
   }
}

setTimeout(function(){
    
 }, 1000)