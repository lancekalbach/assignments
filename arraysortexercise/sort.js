const mixed = [2, 357, 3, 7, 4, 9, 25, 678, 345, 8, 10, 5]

mixed.sort((a, b) =>{
return a - b
})

console.log(mixed)

///////// 

const bigS = [2, 8, 5, 6, 7, 0, 1, 23, 56, 99]

bigS.sort((a, b) => {
    return b - a
})

console.log(bigS)

/////////

const words = ["train", "bye", "hi", "helicopter", "absolutely"]

words.sort((a, b) => {
    return a.length - b.length
})

console.log(words)

///////

const moreWords = ["hello", "goodbye", "chairlift", "ski", "try", "apple"]

moreWords.sort((a, b) => {
    return a.localeCompare(b)
})

console.log(moreWords)

///////////

const peeps = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

peeps.sort((a, b) => {
    return a.age - b.age
})

console.log(peeps)