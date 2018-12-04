var icons = document.querySelectorAll(".far");
var rockIcon = document.querySelector(".fa-hand-rock");
var paperIcon = document.querySelector(".fa-hand-paper");
var scissorsIcon = document.querySelector(".fa-hand-scissors");
var winnerDisplay = document.getElementById("winnerDisplay");
var playerChoiceDisplay = document.getElementById("playerChoiceDisplay");
var computerChoiceDisplay = document.getElementById("computerChoiceDisplay");

var playerChoice;
var computerChoice;
var winner;
var gameOver = false;

//hover effects
for (var i = 0; i < icons.length; i++) {
    icons[i].addEventListener("mouseover", function() { 
        this.classList.add("big-size");
    });
    icons[i].addEventListener("mouseout", function() {
        this.classList.remove("big-size");
    });
}

computerChoice = computerChoiceRandom();

//displaying the user's choice
rockIcon.addEventListener("click", function() { 
    playerChoice = 0;
    playerChoiceDisplay.textContent = "You chose Rock!";
    rockIcon.style.color = "green";
    computerChoiceRandom();
    reset();
});

paperIcon.addEventListener("click", function() {
    playerChoice = 1;
    playerChoiceDisplay.textContent = "You chose Paper!";
    paperIcon.classList.add("player-choice");
    computerChoiceRandom();
    displayWinner();
    reset();
});

scissorsIcon.addEventListener("click", function() {
    playerChoice = 2;
    playerChoiceDisplay.textContent = "You chose Scissors!";
    scissorsIcon.style.color = "green";
    computerChoiceRandom();
    reset();
});

function findingWinner(player, computer) {
    if (player === 0 && computer === 2) {
        winner = 1;
    } else if (player === 2 && computer === 0) {
        winner = 2;
    } else if (player === 1 && computer === 0) {
        winner = 1;
    } else if (player === 0 && computer === 1) {
        winner = 2;
    } else {
        winner = 3;
    }
    return winner;
}

function computerChoiceRandom() {
    var result = Math.floor(Math.random()*3); // 0 is rock, 1 is paper, 2 scissors
    if (result === 0) {
        computerChoiceDisplay.textContent = "Computer chose rock!";
        rockIcon.classList.add("computer-choice");
    } else 
      if (result === 1) {
        computerChoiceDisplay.textContent = "Computer chose paper!";
        paperIcon.classList.add("computer-choice");
    } else 
      if (result === 2) {
        computerChoiceDisplay.textContent = "Computer chose scissors!";
        scissorsIcon.classList.add("computer-choice");
    }
}

function displayWinner() {
    if (findingWinner(playerChoice, computerChoice) === 1) {
        winnerDisplay.textContent = "Congratulations, you won!";
    } else if (findingWinner(playerChoice, computerChoice) === 2) {
        winnerDisplay.textContent = "Ouch, the computer won. Try again, maybe!?";
    } else {
        winnerDisplay.textContent = "It's a tie!";
    }
}

function reset() {
    gameOver = false;
    playerChoiceDisplay.textContent = "";
    computerChoiceDisplay.textContent = "";
    playerChoice = null;
    computerChoice = null;
    winnerDisplay.textContent = "";
}
