var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet){
    
        var newArr = []
        
          for(var i = 0; i < people.length; i++ ) {
            newArr.push(people[i])

            for(var p = 0; p < alphabet.length; p++) {
              var upper = alphabet.toUpperCase()
              var abcSplit = upper.split("")
            
              newArr.push(abcSplit[p])
            } 
          }
            console.log(newArr)
        }
         
        forception(people, alphabet)
 
