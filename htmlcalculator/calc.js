const combine = document["add"]

combine.addEventListener("submit", function(add){
add.preventDefault()

const result1 = document.add.addition1.value
const result2 = document.add.addition2.value
document.add.addition1.value = ""
document.add.addition2.value = ""

console.log(result1 + " " + result2)
final1 = plus(result1, result2)
console.log(final1)

const h3 = document.createElement('h3')
h3.textContent = final1
document.getElementsByTagName("body")[0].append(h3)
})

function plus(result1, result2){
    return (Number(result1) + Number(result2))
}

const take = document["subtracting"]

take.addEventListener("submit", function(subtract){
    subtract.preventDefault()

    const result3 = document.subtracting.subtract1.value
    const result4 = document.subtracting.subtract2.value
    document.subtracting.subtract1.value = ""
    document.subtracting.subtract2.value = ""

    final2 = minus(result3, result4)
    console.log(final2)

    const h32 = document.createElement('h3')
    h32.textContent = final2
    document.getElementsByTagName("body")[0].append(h32)

})

function minus(result3, result4){
    return (Number(result3) - Number(result4))

}
///////////////
const time = document["multiplyP"]

time.addEventListener("submit", function(multiplyP){
multiplyP.preventDefault()

    const result5 = document.multiplyP.multiply1.value
    const result6 = document.multiplyP.multiply2.value
    document.multiplyP.multiply1.value = ""
    document.multiplyP.multiply2.value = ""

    final3 = times(result5, result6)
    console.log(final3)

    const h33 = document.createElement('h3')
    h33.textContent = final3
    document.getElementsByTagName("body")[0].append(h33)
})

function times(result5, result6){
    return (Number(result5) * Number(result6))

}