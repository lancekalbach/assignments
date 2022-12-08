const arr = [2, 5, 100]

const double = arr.map(function(times){
    return times * 2
})

console.log(double)

/////////

const stringNum = arr.map(function(arrS){
    return String(arrS)
})

console.log(stringNum)

//////////

const nameM = ["john", "BOB", "thOmaS"]

function capitalizeWords(arr) {
    return arr.map(nameM => {
      return nameM.charAt(0).toUpperCase() + nameM.slice(1).toLowerCase()
    })
}

console.log(capitalizeWords(nameM))

/////////////

const ppl = [
{
    name: "Angelina Jolie",
    age: 80
},
{
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}
]

const pplList = ppl.map(function(peeps){
    return String(peeps.name)
})

console.log(pplList)

/////////

const ageRes = ppl.map(function(ages){
    if(ages.age<18){
        console.log("You are too young")
    } else if(ages.age>18){
        console.log("Go ahead")
    }
})

/////////

const sizes = ppl.map(nameAge => {
    const named = document.createElement('h1')
    named.textContent = nameAge.name
    document.getElementsByTagName("body")[0].append(named)

    const aged = document.createElement('h2')
    aged.textContent = nameAge.age
    document.getElementsByTagName("body")[0].append(aged)
})