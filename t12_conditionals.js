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
}

function getFormInputAge(){
const AGE_FIELD = document.getElementById("ageField")
}

function start(){
const NAME_FIELD = document.getElementById("nameField")
let username = nameField.value;
    OUTPUT.innerHTML += ("<p>Hello "+ username +"</p>")
 
const AGE_FIELD = document.getElementById("ageField")
let age = ageField.value;
if(age > 15 ){
    OUTPUT.innerHTML += ("<p>You are an unc</p>")
 }
else
OUTPUT.innerHTML += ("<p>You are a teeny child infant</p>")
}

writeLine('papyrusknighttruther');




 
