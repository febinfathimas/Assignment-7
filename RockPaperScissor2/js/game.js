function displayTitle() {
    "use strict";
    
    window.alert("Welcome to the Guess the Number Game!");
}
function playGame()
{
    var comFlip=Math.random();
    var computerChoice;
    var userChoice;
    
    userChoice = window.prompt("Select Rock or Paper or Scissors (r/p/s)");
    
    if(comFlip<=0.3)
    {window.console.log("Computer Choice was Rock");
    computerChoice="r";
    }
    else if(comFlip<=0.6)
    {window.console.log("Computer choice was Paper");
    computerChoice="p";}
    else if(comFlip>0.6)
    {window.console.log("Computer choice was Scissors");
    computerChoice="s";}

    if(userChoice === computerChoice)
    {
        window.console.log("Both Players on tie!....")
    }
    else{
    if ((userChoice === "p") && (computerChoice==="r"))
    {window.console.log("Paper cover Rock...you win!");}
    else if((userChoice === "r") && (computerChoice==="p"))
    {window.console.log(" Paper cover Rock.....you lose!");  }
    else if((userChoice === "r") && (computerChoice==="s"))
    {window.console.log(" Rock destroys Scissors.....you win!");  }
    else if((userChoice === "s") && (computerChoice==="r"))
    {window.console.log(" Rock destroys Scissors.....You lose!");  }
    else if((userChoice === "p") && (computerChoice==="s"))
    {window.console.log(" Scissor Cut Paper.....you lose!");  }
    else if((userChoice === "s") && (computerChoice==="p"))
    {window.console.log(" Scissor Cut Paper.....you win!");  }}
    
   
    return;
   
}
function main()
{
    displayTitle();
    var playagain = "y";
    while (true) {
        if(playagain === "y")
        {playGame();
        playagain = window.prompt("Do you want to play again (y/n)?");
        }
        else 
        {break;}
    }
    window.alert("Thanks for playing!");
}
main();


    
   