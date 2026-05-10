/****************************
Name of task:functions return
****************************/

console.log("running t13_functions returns")

//variables

let username = nameField.value;
let year=2025;
let age= ageField.value;
let _hours=20;



/**************************
  Functions
  *************************/

 function calculatePay(){
 let pay =  _hours * 18.50;
 pay = (pay * 0.105); //taxes :(
 return pay;let weeklyPay = calculatePay;
 }

 function writeLine(){
OUTPUT.innerHTML += "<h2>Your weekly pay is" weeklyPay "</h2>";
 }


/*****************************
 Main code
 ****************************/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
function getFormInput(){
const NAME_FIELD = document.getElementById("nameField")
OUTPUT.innerHTML = "<p>Your name is "+ username +"</p>";
}

function getFormInputAge(){
const AGE_FIELD = document.getElementById("ageField")
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

 


calculatePay(_weeklyPay);

writeLine(_weeklyPay);




 
