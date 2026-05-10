/****************************
Name of task:functions
****************************/

console.log("running t05_avascriptsandhtml")

//variables

let username = nameField.value;
let year=2025;
let age= ageField.value;
let money=10;
let birthYear= year - age;
let halfMoney= money / 2;


/**************************
  Functions
  *************************/
 function writeLine(){
OUTPUT.innerHTML += "<h2>WOAH ITS A FUNCTION </h2>";
 }

 


/*****************************
 Main code
 ****************************/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
function getFormInput(){
const NAME_FIELD = document.getElementById("nameField")
let username = nameField.value;
OUTPUT.innerHTML = "<p>Your name is "+ username +"</p>";
}

function getFormInputAge(){
const AGE_FIELD = document.getElementById("ageField")
let age = ageField.value;
OUTPUT.innerHTML = "<p>Your age is "+ age +"</p>";
}

function start(){
const NAME_FIELD = document.getElementById("nameField")
let username = nameField.value;
    OUTPUT.innerHTML += ("<p>Hello "+ username +"</p>")
 
const AGE_FIELD = document.getElementById("ageField")
let age = ageField.value;
    OUTPUT.innerHTML += ("<p>You are "+ age +"</p>")
 }

writeLine('papyrusknighttruther', 2025, 15, 10, year - age, money / 2);




 
