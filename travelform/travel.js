const form = document["info"]
let infoList = []
let i = 0

form.addEventListener("submit", (info) =>{
    info.preventDefault()

    const firstName = document.info.firstN.value
    const lastName = document.info.lastN.value
    const age = document.info.age.value
    const gender = document.info.gender.value
    const location = document.info.location.value
    const vegan = document.info.vegan.value
    const lactose = document.info.lactose.value
    const nuts = document.info.nuts.value
    document.info.firstN.value = ""
    document.info.lastN.value = ""
    document.info.age.value = ""
    document.info.gender.value = ""
    document.info.location.value = ""
    document.info.vegan.value = ""
    document.info.lactose.value = ""
    document.info.nuts.value = ""
    
    alert("Thank you for taking the time to fill this form out!" +'\n' +"First Name: " +firstName+ '\n' +"Last Name: " +lastName+ '\n' +"Age: " +age+ '\n' +"Gender: " +gender+ '\n' +"Destination: " +location+ '\n' +"Dietary Restrictions: " +vegan+ '\n' +lactose+ '\n' +nuts)
})