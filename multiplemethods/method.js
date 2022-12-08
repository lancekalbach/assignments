var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


// const older = peopleArray.filter(peeps => {
//     if (peeps.age >= 18){
//         return peeps
//     }
// })

// console.log(older)

alpha = peopleArray.sort((a, b) => {
    if (a.lastName < b.lastName) {
        return -1;
      }
      if (a.lastName > b.lastName) {
        return 1;
      }
      return 0;
})

// console.log(peopleArray)

const older = peopleArray.filter(peeps => {
    if (peeps.age >= 18){
        return peeps
    }
})

// console.log(older)

const endPeeps = older.map(str =>{
    return String(str.firstName + " " + str.lastName + " " + str.age)
})

console.log(endPeeps)