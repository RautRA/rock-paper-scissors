let playerScore;
let computerScore;

function getComputerChoice() {
    let computerChoice;

    // get a random number between 0, 1 & 2 to determine computer's choice
    const randNum = Math.floor(Math.random() * 3);

    if (randNum === 0) {
        computerChoice = "rock";
    } else if (randNum === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors? What's your choice?");

    if(playerChoice === null) {
        console.log("You cancelled the game");
        return null;
    }

    playerChoice = playerChoice.trim().toLowerCase();

    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice;
    } else {
        console.log("Sorry you can only choose between Rock, Paper or Scissors");
        
        /* keep running the getHumanChoice function till a valid choice is 
        provided or game is cancelled */
        return getPlayerChoice();
    }
}

function playRound() {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    if (playerChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.");
        playerScore++;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        playerScore++;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    }   else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper.");
        playerScore++;
    } else if ( playerChoice === computerChoice) {
        console.log("It's a tie.");
    } else {
        console.log("Uh oh! Something went wrong!");
    }
}