const readlineSync = require("readline-sync");
const name = readlineSync.question("What is your name? ");
const choices = ["Put hand in hole", "Find the key", "Open the door"]
let choice = readlineSync.keyInSelect(choices, "Please choose your action to escape the room")

let isAlive = true

while (isAlive === true){
    if (choices[choice] == "Put hand in hole"){
        console.log("Player chose to " +choices[0] )
        console.log("You died! There was a poisonous snake in the hole.")
        isAlive=false
        choice = readlineSync.keyInSelect(choices, "Try again")

} else if (choices[choice] == "Find the key"){
    console.log("Player chose to " +choices[1] )
    const choice2 = readlineSync.keyInYN ('You have found the key. Do you want to escape? ')
        if(choice2===true) {
            console.log("The door is open. You have escaped. ")
            break
        } else {
            isAlive=false
            console.log("You died. You must escape the room")
        }
}else if (choices[choice] == "Open the door"){
    console.log("Player chose to " +choices[2] )
    console.log("The door is locked! You took too long, now you are dead")
    break
}
}
