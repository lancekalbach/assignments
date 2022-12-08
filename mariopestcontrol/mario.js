const prev = document["bad"]

prev.addEventListener("submit", (badG) =>{
    badG.preventDefault()

const goomba = document.bad.goomba.value
const bob = document.bad.bobs.value
const cheep = document.bad.cheep.value
document.bad.goomba.value = ""
document.bad.bobs.value = ""
document.bad.cheep.value = ""

result1 = g(goomba)
result2 = b(bob)
result3 = c(cheep)

final = coin(result1, result2, result3)
console.log(final)

const h3 = document.createElement('h3')
h3.textContent = "Total Coins: " +final
document.getElementsByTagName("body")[0].append(h3)
})

function g(goomba){
    return (Number(goomba) * 5)
}

function b(bob){
    return (Number(bob) * 7)
}

function c(cheep){
    return (Number(cheep) * 11)
}

function coin(result1, result2, result3){
    return (Number(result1) + Number(result2) + Number(result3))
}