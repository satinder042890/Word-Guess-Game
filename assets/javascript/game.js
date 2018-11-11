var wins=0;
var countries=["india","usa","france","italy","england","canada"];
var no_Of_Guesses=5;
var letters_Guessed=[];
var computer=null;
var user_Guess=null;

//computer randomly pick a word from array of strings

function comp_Words()
{
    console.log("computer word function execute");
    computer=countries[Math.floor(Math.random()*countries.length)];
    console.log(computer);
};
 
//computer change guesses remaining everytime user press any key

function no_Of_Guesses_Change()
{
    console.log("No of Guesses function execute");
    document.querySelector("#gleft").innerHTML=no_Of_Guesses;
}

//guessed letters pushed to array

function letters_Guessed_push()
{
    console.log("letters guessed push function execute");
    document.querySelector("#guessedLetter").innerHTML=letters_Guessed.join(", ");

}

//when no guesses left then reset everything

function clearAll()
{
    no_Of_Guesses=5;
    letters_Guessed=[];
    no_Of_Guesses_Change();
    letters_Guessed_push();
    comp_Words();

}

//executes everytime user press any key

document.onkeypress=function(e)
{
    comp_Words();
    no_Of_Guesses--;
    no_Of_Guesses_Change();
    user_Guess=String.fromCharCode(event.which).toLowerCase();
    console.log(user_Guess);
    letters_Guessed.push(user_Guess);
    letters_Guessed_push();
    if(no_Of_Guesses === 0)
    {
       clearAll();
    }
}