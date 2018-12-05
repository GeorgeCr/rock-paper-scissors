var playerChoice = null;
var computerChoice = null;
var rockIcon = document.querySelector(".fa-hand-rock");
var paperIcon = document.querySelector(".fa-hand-paper");
var scissorsIcon = document.querySelector(".fa-hand-scissors");
var winnerDisplay = document.getElementById("winnerDisplay");
var playerChoiceDisplay = document.getElementById("playerChoiceDisplay");
var computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
var playerScore = 0;
var computerScore = 0;
var playerScoreDisplay = document.getElementById("playerScoreDisplay");
var computerScoreDisplay = document.getElementById("computerScoreDisplay");
var scoreBoardDisplay = document.getElementsByClassName("scoreboard")[0];

window.setInterval(function() {
    scoreBoardDisplay.classList.toggle("red");
}
, 500);

//getting the player's choice

rockIcon.addEventListener("click", function() {
    playerChoice = 0;
    playerChoiceDisplay.textContent = "You chose rock."
    computerDeal();
});

paperIcon.addEventListener("click", function() {
    playerChoice = 1;
    playerChoiceDisplay.textContent = "You chose paper."
    computerDeal();
});

scissorsIcon.addEventListener("click", function() {
    playerChoice = 2;
    playerChoiceDisplay.textContent = "You chose scissors."
    computerDeal();
});

//getting the player's choice

//getting the computer's choice

function getComputerChoice() {
    var choice = Math.floor(Math.random() * 3);
    return choice;
}

//getting the computer's choice

//finding a winner

function findWinner() {
    //solving the 3 ways of tie
    if ((playerChoice === 0 && computerChoice === 0)
        || (playerChoice === 1 && computerChoice === 1)
        || (playerChoice === 2 && computerChoice === 2)) {
        return 2;
    }
    //player is winner
    if ((playerChoice === 0 && computerChoice === 2) 
        || (playerChoice === 1 && computerChoice === 0) 
        || (playerChoice === 2 && computerChoice === 1)) {
        return 0;
    }
    if ((playerChoice === 1 && computerChoice === 0)
        || (playerChoice === 2 && computerChoice === 1)
        || (playerChoice === 0 && computerChoice === 1)) {
        return 0;
    }
    //computer is winner
    if ((playerChoice === 0 && computerChoice === 1)
        || (playerChoice === 1 && computerChoice === 2)
        || (playerChoice === 2 && computerChoice === 0)) {
        return 1;
    }
}

//print out the winner

function printWinner() {
    if (findWinner() === 0) {
        resetClasses();
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        winnerDisplay.textContent = "You win!"
        winnerDisplay.classList.add("p-win");

    } else if (findWinner() === 1) {
        resetClasses();
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        winnerDisplay.textContent = "Computer won!"
        winnerDisplay.classList.add("c-win");
        
    } else if (findWinner() === 2) {
        resetClasses();
        winnerDisplay.textContent = "It's a tie!"
        winnerDisplay.classList.add("tie");
        
    }
}

function resetClasses() {
    winnerDisplay.classList.remove("p-win", "c-win", "tie");
}

//print out the computer's choice

function printComputerChoice() {
    if (computerChoice === 0) {
        return "Computer chose rock."
    }
    if (computerChoice === 1) {
        return "Computer chose paper."
    }
    if (computerChoice === 2) {
        return "Computer chose scissors."
    }
}

function computerDeal() {
    computerChoice = getComputerChoice();
    computerChoiceDisplay.textContent = printComputerChoice();
    printWinner();
}