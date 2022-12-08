const numbas = [1, 3, 6, 2, 7, 5, 15, 8, 4]

const greater = numbas.filter(great =>{
    if(great >= 5){
        return great
    }
})

console.log(greater)

////////

const even = numbas.filter(eve => {
    if(eve % 2 === 0){
        return eve
    }
})

console.log(even)

////////

const words = ["ice", "ski", "airplane", "mountain", "work", "snow", "skiing", "bike", "hi"]

const lessThanFive = words.filter(less => {
    if(less.length <= 5){
        return less
    }
})

console.log(lessThanFive)

//////////

const peeps = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const belong = peeps.filter(club => {
    if(club.member === true)
    return club
})

console.log(belong)

/////////

const ppl = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const oldEnough = ppl.filter(ageOf => {
    if(ageOf.age >= 18){
        return ageOf
    }
})

console.log(oldEnough)