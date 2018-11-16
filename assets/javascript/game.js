var wins=0;
var countries=["india","usa","france","italy","england","canada","australia","newzealand","germany","japan"];
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

//correct letter insert at its exact location

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

//when computer selects random word, it will display dashes on the screen

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
            
            $("#pic").attr("src",function()
            {
                var src= "assets/images/usa.jpg";
                if(computer === "india")
                {
                    src= "assets/images/indiaf.jpg";
                }
                if(computer === "usa")
                {
                    src= "assets/images/usaf.jpg";
                }
                if(computer === "france")
                {
                    src= "assets/images/france.jpg";
                }
                if(computer === "canada")
                {
                    src= "assets/images/canada.jpg";
                }
                if(computer === "italy")
                {
                    src= "assets/images/italy.jpg";
                }
                if(computer === "england")
                {
                    src= "assets/images/england.jpg";
                }
                if(computer === "australia")
                {
                    src= "assets/images/australia.jpg";
                }
                if(computer === "newzealand")
                {
                    src= "assets/images/newzealand.jpg";
                }
                if(computer === "germany")
                {
                    src= "assets/images/germany.jpg";
                }
                if(computer === "japan")
                {
                    src= "assets/images/japan.jpg";
                }
                if(computer === "france")
                {
                    src= "assets/images/france.jpg";
                }
                return src;
            })
            console.log("you won");
            //document.querySelector("#right").innerHTML=computer;
             //alert("congratulations you find the word");
             if(confirm("you find this word.. Do you want to continue with another word?"))
             {
                clearAll();
             }
           
        }
    };   
}

//executes when user press any key to start the game

document.onkeypress=function(e)
{
       var user_Guess1=String.fromCharCode(e.which).toLowerCase();
       console.log(user_Guess1);
       comp_Words();
       compare();
       
};