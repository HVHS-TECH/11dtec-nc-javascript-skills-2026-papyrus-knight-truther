/****************************
Name of task:functions return
****************************/

console.log("running t13_functions returns")

//variables

let username = nameField.value;
let year=2025;
let age= ageField.value;
let hours=20;



/**************************
  Functions
  *************************/

 function calculatePay(hours){
 let pay =  hours * 18.50;
 pay = (pay * 0.105); //taxes :(
 return pay;
 }

 function writeLine(){
OUTPUT.innerHTML += "<h2>Your weekly pay is" + pay + "</h2>";
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

calculatePay(hours);

function start(){
const NAME_FIELD = document.getElementById("nameField")
let username = nameField.value;
    OUTPUT.innerHTML += ("<p>Hello "+ username +"</p>")
 
const AGE_FIELD = document.getElementById("ageField")
let age = ageField.value;
if(age > 15 ){
    OUTPUT.innerHTML += ("<p>You are an unc</p>")
    OUTPUT.innerHTML += ("<p>You made $" + pay + "</p>")
 }
else
OUTPUT.innerHTML += ("<p>You are a teeny child infant</p>")
}

writeLine(pay);






 
