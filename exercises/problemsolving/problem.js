function largest(a){
    let num = 0
    for (let i = 0; i < a.length; i++){
      if (a[i] >= num){
         num = a[i]
      }
    }
    return num
  }
  const arr = [1, 141, 27, 100, 501, 92]
  console.log(largest(arr))

/////////// 

//   const words = ["Hello!", "today", "is", "Wednesday!"]

//   words.every(getWords)

//   function getWords(word) {
//     if(word == "!"){
//         return word
//     }
//   }
//   console.log(getWords(1))

// const x = ["Hello!", "is", "this", "working?"]
// const z = x.includes("!")

// console.log(z)



// const x = ["Hello!", "is", "this", "working?"]
// let words1 = []

// const z = x.map(word => word.includes("!") && word)

// if(z === "!") {
//     word.push(words1)
// }

// console.log(words1)

// const x = ["Hello!", "is", "this", "working?"]
// let words1 =[]

// function a(word) {
//     for(i = 0; i < x.length; i++) {
//         if(word.includes("!")) {
//             console.log(word)
//         }
//     }
// }

// console.log(a(x))

const x = ["Hello!", "is", "this!", "working?"]

for(i = 0; i < x.length; i++) {
    if(x[i].includes("!")) {
        console.log(x[i])
    }
}
///////////

  function isDivisible(num1, num2) {
    if(num1 % num2 === 0){
        return true
    } else {
        return false 
    }
  }
 console.log(isDivisible(9,3))