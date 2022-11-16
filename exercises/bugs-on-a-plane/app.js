const form = document.getElementByID("arline-form");
const submit = document.getElementByID("submit");
//const query = document.querySelector;

    const firstName = form.elements["firstName"].value;
    const lastName = form.elements["lastName"].value;
    const age = form.elements["age"].value;
    const gender = form.elements["gender"].value;
    const location = form.elements["travel-location"].value;
    const diet = form.elemts["diet"].value;

function formAlert() {
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById('vegan').value);
    } else if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    } else { 
        (form.elements['paleo'].checked) 
        diet.push(document.getElementById('paleo').value);
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");

}


submit.addEventListener("click", formAlert);