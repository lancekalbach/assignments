const readlineSync = require("readline-sync");
let nameQ = readlineSync.question("Enter your name: ")
console.log("Welcome " +nameQ+ ", this game is about venturing into a cave filled with enemies. Please be careful!")
const action = ["Walk", "Print", "Exit"]
let playerHealth = 11
let inventory = ["Torch"]
enemyName = ["Snake", "Rat", "Bat"]

function cave(){
    const playerDmg = Math.floor(Math.random() * (8 - 1) + 3)
    console.log(playerDmg)
    const enemies = enemyName[Math.floor(Math.random() * enemyName.length)]
    let enemyHealth = 10
    const enemyDmg = Math.floor(Math.random() * (7 - 3) + 1)
     console.log(enemyDmg)
    const surviveChance = Math.floor(Math.random() * (8 - 3) + 2)
    console.log(surviveChance)

let choice = readlineSync.keyInSelect(action, "Welcome to the Cave, please choose your action")

if(action[choice] == "Walk"){
    console.log(nameQ+ ", you moved forward")
    let enemy = Math.random()
if(enemy >= .3){
    console.log("An enemy has appeared")
while(playerHealth > 0 && enemyHealth > 0){
    const actions = readlineSync.question('What would you like to do? Enter "run" to run. Enter "attack" to attack. ' );
switch(actions) {
case "run":
    const run = Math.random();
if(run < .5) {
    console.log("You tried running, but " +enemies+ " Attacked you and dealt " +enemyDmg)
} else {
    console.log("You escaped the enemy!")
    break
} case "attack":

playerHealth -= enemyDmg
    console.log(nameQ+ ", you chose to attack. You did " +playerDmg+ " damage to " +enemies)
enemyHealth -= playerDmg
    console.log(enemies+ " Attacked in return and dealt " +enemyDmg+ " damage to player " +nameQ)

if(playerHealth <= 0){
    console.log("You were defeated by " +enemies+ " and dropped: " +inventory)
} else if(enemyHealth <= 0){
    console.log("You have defeated " +enemies+ " It dropped x1 Gold Key")
    inventory.push("x1 Gold Key")
    break
}
} if (inventory[1] == "x1 Gold Key"){
    console.log("You found the Gold Key! You escaped the cave!")
    return playerHealth = 0
}
} 
} else if(enemy <= .3){
    console.log("This cave is creepy...No enemies yet, I think I am hearing things")
}
} else if(action[choice] == "Print"){
    console.log("Name: "+ nameQ + '\n' + "Health: " + playerHealth + '\n' + "Items: " + inventory)
} else if (action[choice] == "Exit"){
    console.log("Goodbye")
    return playerHealth = 0
    }
}
while(playerHealth > 0){
    play = function(){
    playerHealth = 11
    };
    play()
    cave()
}

//this was used, may have to use again 
//     const survive = readlineSync.keyInYN("Do you think you escaped?")
// if(survive === false){
//     console.log("You escaped!")
// } else if(survive === true){
//     console.log("Unfortunately, you died")
//             }

// while(alive === true){
// if(firstO[choice] == "Enter cave"){
// console.log(nameQ+ ", you have chose to enter the cave, good luck.")
// const proceed = readlineSync.keyInYN("Would you like to continue?")
// while(playerHealth > 0){
//     if(proceed === true){
//         const forward = readlineSync.keyInSelect(walk, "Press W to walk")
//     }
//     const forward = readlineSync.keyInSelect(walk, "Press W to walk")

//         if (walk[forward] == "W"){
//             (enemySpawn[i] === 1, 2, 3, 4, 5)
//             console.log("An enemy has appeared")
//             readlineSync.keyInSelect(enemyMove, "Quick, an enemy is coming after you, choose your next move!")
//             }
//             console.log(enemyMove == "Attack", "test")
//             if(enemyMove == "Attack"){
//                 console.log(nameQ+ ", you chose to attack. You did " +console.log(dmgP)+ " damage to" +enemyName[1])
//                 console.log(enemyName[1]+ " Attacked in return and dealt " +console.log(dmgE)+ " damage to player " +nameQ)
//             } else if(enemyMove == "Run"){
//                 console.log(nameQ+ ", you chose to run.")
//                 const survive = readlineSync.keyInYN("Do you think you escaped?")
//                 if(survive === false){
//                     console.log("You escaped!")
//                 } else if(survive === true){
//                     console.log("Unfortunately, you died")
//                 }
            
// } else if(proceed === false){
//     console.log("Goodbye!") 
// }
    
//     if (walk[forward] == "W"){
//     (enemySpawn[i] === 1, 2, 3, 4, 5)
//     console.log("An enemy has appeared")
//     readlineSync.keyInSelect(enemyMove, "Quick, an enemy is coming after you, choose your next move!")
//     }
//     if(enemyMove == "Attack"){
//         console.log(nameQ+ ", you chose to attack. You did " +console.log(dmgP)+ " damage to" +enemyName[1])
//         console.log(enemyName[1]+ " Attacked in return and dealt " +console.log(dmgE)+ " damage to player " +nameQ)
//     } else if(enemyMove == "Run"){
//         console.log(nameQ+ ", you chose to run.")
//         const survive = readlineSync.keyInYN("Do you think you escaped?")
//         if(survive === false){
//             console.log("You escaped!")
//         } else if(survive === true){
//             console.log("Unfortunately, you died")
//         }
//     }
// }
// } else if(firstO[choice] == "Grab torch"){
//     console.log("Good choice, you might need it later on")
//     choice = readlineSync.keyInSelect(firstO, "Now what you you like to do?")
// } else if(firstO[choice] == "Go home"){
//     console.log("You got lost and were soon attacked by a bear at night")
//     alive = false
//     choice = readlineSync.keyInSelect(firstO, "Try another route")
// }
// }

// let playerHealth = 10
// const enemyMove = ["Attack", "Run", "Hide"]
// enemyName = ["Snake", "Rat", "Bat"]

// let x = Math.floor(Math.random() * 4) + 1;
// console.log(x)

// let dmg = Math.floor(Math.random() * 4) + 1;
// //
// if(proceed === true){
//     readlineSync.keyInSelect(walk, "Press W to walk")
// }

// if(proceed === false){
//     console.log("Goodbye!")
// }

// while(playerHealth > 0){
// if(proceed === true){
//     readlineSync.keyInSelect(walk, "Press W to walk")
// } else if(proceed === false){
//     console.log("Goodbye!")
// }

// if (walk == "W"){
// (x[i] === 1, 2, 3, 4, 5)
//     console.log("An enemy has appeared")
//     readlineSync.keyInSelect(enemyMove, "Quick, an enemy is coming after you, choose your next move!")
//     if(enemyMove == "Attack"){
//     console.log(nameQ+ ", you chose to attack. You did 5 damage to" +enemyName[1])
//     console.log(enemyName[1]+ " Attacked in return and dealt " +console.log(dmg)+ " damage to player " +nameQ)
// } else if(enemyMove == "Run") {
//     console.log(nameQ+ ", you chose to run.")
//     const survive = readlineSync.keyInYN("Do you think you escaped?")
// } if(survive === false){
//     console.log("You escaped!")
// } else if(survive === true){
//     console.log("Unfortunately, you died")
// }
// }
// }

// for (let i = 0; i < x; i++) {
// if(x[i] === 3){
//     console.log("An enemy has appeared")
//     const enemyC = readlineSync.keyInSelect(enemyName, "Quick, an enemy is coming after you, choose your next move!")
// }
// }



//////////
// console.log(enemyMove == "Attack", "test")
// if(enemyMove === "Attack"){
//     console.log(nameQ+ ", you chose to attack. You did " +console.log(dmgP)+ " damage to" +enemyName[1])
//     console.log(enemyName[1]+ " Attacked in return and dealt " +console.log(dmgE)+ " damage to player " +nameQ)
// } else if(enemyMove == "Run"){
//     console.log(nameQ+ ", you chose to run.")
//     if(surviveChance === 1){
//         console.log("You survived")
//         readlineSync.keyInSelect(action, "Next move: ")
//     }
//     else if(surviveChance === 2){
//         console.log("You died")
//         playerHealth === -1
//     }