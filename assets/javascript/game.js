var wins=0;
var countries=["india","usa","france","italy","england","canada"];
var no_Of_Guesses=10;
var letters_Guessed=[];
var computer=null;
var user_Guess=null;
var correct=[];
//computer randomly pick a word from array of strings

function comp_Words()
{
    console.log("computer word function execute");
    computer=countries[Math.floor(Math.random()*countries.length)];
    console.log(computer);
    dashes();
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
function correct_Words_Push()
{
    console.log("correct words push function execute");
    document.querySelector("#right").innerHTML=correct.join(" ");
 //  document.querySelector("#right").innerHTML=correct;
}

//when no guesses left then reset everything

function clearAll()
{
    no_Of_Guesses=10;
    letters_Guessed=[];
    no_Of_Guesses_Change();
    letters_Guessed_push();
    correct=[];
    correct_Words_Push();
    comp_Words();
 
}

function dashes()
{
    var n=computer.length;
    for(var i = 0 ;  i < n ; i++)
    {
        console.log(n);
        correct.push("_");
        correct_Words_Push();
    }
}

//compare the entered key with string

function compare()
{
    document.onkeypress=function(event)
    {
        user_Guess=String.fromCharCode(event.which).toLocaleLowerCase();
        var wordFound=false;
        for(var i=0;i<computer.length;i++)
        {
            console.log(computer[i]);
            if(computer[i] === user_Guess)
            {
                wordFound=true;
                console.log("match");
                console.log(i);
                correct[i]=user_Guess;
                correct_Words_Push();
                
            }
        }
        if(wordFound)
        {
            console.log("word match");
        }
        else
        {
                console.log("not match");
                no_Of_Guesses--;
                no_Of_Guesses_Change();
                letters_Guessed.push(user_Guess);
                letters_Guessed_push();
        }
        if(no_Of_Guesses === 0)
        {
            clearAll();
        }
        var convert=correct.toString();
        var computerSplit=computer.split("");
        console.log(convert);
        if(computerSplit == convert)
        {
            wins++;
            console.log(wins);
            document.querySelector("#win").innerHTML=wins;
            console.log("you won");
            alert("congratulations you find the word");
            clearAll();
        }
    };   
}

//executes everytime user press any key

document.onkeypress=function(e)
{
       var user_Guess1=String.fromCharCode(e.which).toLowerCase();
       console.log(user_Guess1);
       comp_Words();
       compare();
       
};