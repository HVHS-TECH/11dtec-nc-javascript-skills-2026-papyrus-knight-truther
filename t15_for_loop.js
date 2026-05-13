/****************************
Name of task:functions return
****************************/

console.log("running t13_functions returns")

//variables

let username = nameField.value;
let year=2025;
let age= ageField.value;
let hours=20;
let first3Abc = ["a", "b", "c"];
let shoppingList = ["Eggs", "Milk"];



/**************************
  Functions
  *************************/

 function calculatePay(hours){
 let pay =  hours * 18.50;
 pay = (pay * 0.105); //taxes :(
 return pay;
 }

 function writeLine(){
OUTPUT.innerHTML += "<h2>Shopping list: " + shoppingList +  "</h2>";
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

function getFormInput(){
const SHOPPING_FIELD = document.getElementById("shoppingField")
}

calculatePay(hours);

let pay = calculatePay(8);

function start(){
    
    for(let beer=5; beer>1; beer--){
    console.log( beer + " bottles of beer on the wall! " + beer + " bottles of beer on the wall, " + beer + " bottles of beer! Take one down pass it around")
}
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

const SHOPPING_FIELD = document.getElementById("shoppingField")
shoppingList.push(shoppingField.value)
    OUTPUT.innerHTML += ("<p>Shopping list: "+shoppingList+"</p>")


writeLine(shoppingList);








 
