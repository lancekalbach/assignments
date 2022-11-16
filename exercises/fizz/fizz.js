// let fizz = []
// for(var i = 0; i < 1; i++) {
//     for( var j = 1; j <= 101; j++){
//       fizz.push(j)
//     }
//   }
  
//   for(var i = 0; i < fizz.length; i++){
//     if(fizz[i] % 3 === 0){
//         console.log("fizz")
//     } else if (fizz[i] % 5 === 0){
//         console.log("buzz")
// } else if (fizz[i] % 5 === 0 && fizz[i] % 3 === 0){
//     console.log("fizzbuzz")
// } else (console.log(i))
// }
    
for (let i = 1; i < 101; i++) {
    if(i % 15 === 0) {
        console.log('fizzbuzz')
    } else if (i % 5 === 0){
        console.log("buzz")
    } else if (i % 3 === 0){
        console.log("fizz")
} else (console.log(i))
}