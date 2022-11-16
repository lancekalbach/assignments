//Prints numbers 0-9 to console
var numbr = "";
for(var i = 0; i < 10; i += 1) {
  numbr += i + " "
}
console.log(numbr);

//Prints numbers 9-0 to console
var back = ""
for (var i = 9; i > -1; i -= 1) {
    back += i + " "
}
console.log(back)

//Prints fruits to console
const fruit = ["banana", "orange", "apple", "kiwi"]
for (var i = 0; i < fruit.length; i++){
console.log(fruit[i])
}

//Prints numbers 0-9 to an array
var numAr = []
for(var i = 0; i < 1; i++) {
  for( var j = 0; j <= 9; j++){
    numAr.push(j)
  }
}
console.log(numAr)


//Prints positive numbers to console
var posNum = []
for(var i = 0; i < 1; i++) {
  for( var j = 0; j <= 100; j++){
    posNum.push(j)
  }
}
for(var i = 0; i < posNum.length; i++){
    if(posNum[i] % 2 === 0){
        console.log(posNum[i])
    }
}

const fruit2 = ["banana", "orange", "apple", "kiwi"]
for(var p = 0; p < fruit2.length; p++){
    console.log(p % 2 === 0)
    if(p % 2 === 0){
        fruit2.push(fruit2[p])
    }
    console.log(fruit2)
}