const numbers = [1, 5, 2, 5, 8, 9, 23]

const result1 = numbers.reduce(function(final, num){
    final += num
    return final
}, 0)

console.log(result1)

///////

const nums = [1,2, 3, 4, 5]

const result2 = nums.reduce((final, numsA) => {
    return final + '' + numsA
})

console.log(result2)

///////////////

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const result3 = voters.reduce((final, vote) => {
    if(vote.voted){
        final++
    }
    return final
}, 0)

console.log(result3)

///////////

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "New Skis", price: 1000 },
    { title: "A second Tesla Model S", price: 90000 },
    {title: "New Mountain Bike", price: 10000}
]

const totalCost = wishlist.reduce((final, priced) => {
    return final + priced.price
}, 0)

console.log(totalCost)

///////////

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

const flatten = arrays.reduce((final, b) => final.concat(b), [])

console.log(flatten)

////////////

var votesN = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const totalVote = votesN.reduce((final, diff) => {
    if(diff.age >= 18 && diff.age <= 25 && diff.voted){
        final.numYoungVotes++
    } if(diff.age >= 18 && diff.age <= 25){
        final.numYoungPeople++
    } if(diff.age >= 26 && diff.age <= 35){
        final.numMidVotesPeople++
    } if(diff.age >= 26 && diff.age <=35){
        final.numMidsPeople++
    } if (diff.age >= 36 && diff.age <= 55){
        final.numOldVotesPeople++
    } if (diff.age >= 36 && diff.age <= 55){
        final.numOldsPeople++
    }
    return {...final}
}, {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0   
})
console.log(totalVote)