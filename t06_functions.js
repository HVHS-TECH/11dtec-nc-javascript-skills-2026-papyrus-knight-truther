/****************************
Name of task:functions
****************************/

console.log("running t05_avascriptsandhtml")

//variables
let username ="papyrusknighttruther" ;
let year=2025;
let age=15;
let money=10;
let birthYear= year - age;
let halfMoney= money / 2;

/**************************
  Functions
  *************************/
 function writeLine(){
OUTPUT.innerHTML = "<h2>WOAH ITS A FUNCTION </h2>";
OUTPUT.innerHTML += ("Hi " + username + " as of " + year + " you are " + age + " years old.")
OUTPUT.innerHTML += (" You were born in " + birthYear )
OUTPUT.innerHTML += ("In 10 years you will be " + (age + 10) + " years old. ")
OUTPUT.innerHTML += ("You have " + money + " dollars. ")
OUTPUT.innerHTML += ("You spend half of your money, now you have " + halfMoney)
OUTPUT.innerHTML += (" Then you get $3, now you have " + (halfMoney + 3) + " dollars") 
 }

 function imag(){
    OUTPUT.innerHTML += "<img src=demonCore.jpg> </img>"
 }

/*****************************
 Main code
 ****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
writeLine()
imag()




 
