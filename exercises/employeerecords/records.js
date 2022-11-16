const employees = []

function Records(name, title, salary, status, over){
    this.name = name
    this.title = title
    this.salary = salary
    this.status = status
}

function printEmployeeForm() {
    console.log(employees)
}



for (var i = 0; i < 1; i++) {
var john = new Records("John", "HR", "$30 an hour", "Full Time") 
var john = new Records("John", "HR", "$30 an hour", "Part Time") 
    employees.push(john)
}

for (var i = 0; i < 1; i++) {
var bob = new Records("Bob", "Head Marketer", "$35 an hour", "Full Time")
employees.push(bob)
}

for (var i = 0; i < 1; i++) {
var tim = new Records("Tim", "CTO", "$40 an hour", "Full Time")
employees.push(tim)
printEmployeeForm()
}


    
    
