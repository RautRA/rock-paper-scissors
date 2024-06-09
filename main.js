let playerScore = 0;
let computerScore = 0;
const choiceBtns = document.querySelectorAll(".choice-btn");
const gameResult = document.querySelector("#game-result");

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

function playRound(e) {
    const playerChoice = e.target.id;
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
        console.log("Oh Uh! Wrong Choice. Something went wrong!");
    }
}

choiceBtns.forEach(btn => {
    btn.addEventListener("click", playRound);
});