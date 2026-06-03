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
//**let item="chips";
//**let price=3.50;


/**************************
  Functions
  *************************/
 function writeLine(_name, _year, _age, _money, _birthYear, _halfMoney){
OUTPUT.innerHTML = "<h2>WOAH ITS A FUNCTION </h2>";
OUTPUT.innerHTML += ("Hi " + _name + " as of " + _year + " you are " + _age + " years old.")
OUTPUT.innerHTML += (" You were born in " + _birthYear )
OUTPUT.innerHTML += ("In 10 years you will be " + (_age + 10) + " years old. ")
OUTPUT.innerHTML += ("You have " + _money + " dollars. ")
OUTPUT.innerHTML += ("You spend half of your money, now you have " + _halfMoney)
OUTPUT.innerHTML += (" Then you get $3, now you have " + (_halfMoney + 3) + " dollars") 
OUTPUT.innerHTML += "<br>";
 }
 function writePrice(_item, _price){
  OUTPUT.innerHTML += (_item + " costs " + _price)
 }


/*****************************
 Main code
 ****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
writeLine("papyrusknighttruther", 2025, 15, 10, year - age, money / 2);
document.createElement("br");
writePrice(" A chocolate bar", 4);
writePrice(" a bag of chips", 3);
writePrice(" a drink", 2.50);




 
