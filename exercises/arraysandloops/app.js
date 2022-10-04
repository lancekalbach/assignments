var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
let count = 0;
for (var i=0; i < officeItems.length; i++){
    if(officeItems[i] == "computer")
    count++
}
console.log("There are " +count+ " computers")

var people = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
   for(var i=0; i < people.length; i++){
    if(people[i].age < 18){
    console.log("You are too young")
    }   
    else if(people[i].age >= 18)
    console.log("Old Enough")
   } 
