let playerScore = 0;
let computerScore = 0;
const choiceBtns = document.querySelectorAll(".choice-btn");
const gameResult = document.querySelector("#game-result");
const currentScore = document.querySelector("#current-score");

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

function checkScore() {
    if (playerScore === 5) {
        showWinner("Congratulations! You won by winning 5 rounds first.");
    } else if (computerScore === 5) {
        showWinner("You lost because computer won 5 rounds first.");
    }
}

function showWinner(winnerText) {
    gameResult.textContent = winnerText + " Refresh the page to play again";
    choiceBtns.forEach(btn => {
        btn.disabled = true;
    });
}

function playRound(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();

    if (playerChoice === "rock" && computerChoice === "paper") {
        gameResult.textContent = "You lose! Paper beats Rock.";
        computerScore++;
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        gameResult.textContent = "You win! Rock beats Scissors.";
        playerScore++;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        gameResult.textContent = "You lose! Scissors beats Paper.";
        computerScore++;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        gameResult.textContent = "You win! Paper beats Rock.";
        playerScore++;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        gameResult.textContent = "You lose! Rock beats Scissors.";
        computerScore++;
    }   else if (playerChoice === "scissors" && computerChoice === "paper") {
        gameResult.textContent = "You win! Scissors beats Paper.";
        playerScore++;
    } else if ( playerChoice === computerChoice) {
        gameResult.textContent = "It's a tie.";
    } else {
        gameResult.textContent = "Oh Uh! Wrong Choice. Something went wrong!";
    }

    currentScore.textContent = `Current Score is: You - ${playerScore}, Computer - ${computerScore}`;
    checkScore();
}

choiceBtns.forEach(btn => {
    btn.addEventListener("click", playRound);
});