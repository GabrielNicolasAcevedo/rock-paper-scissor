// Variables
let playerScore = 0;
let computerScore = 0;
const MAX_SCORE = 5;

// DOM Elements
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");
const resultDiv = document.querySelector("#result");
const resetBtn = document.querySelector("#reset")

// Choices
const choiceMove = {
    rock: "Rock",
    paper: "Paper",
    scissors: "Scissors"
};

// Events
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));
resetBtn.addEventListener("click", () => resetGame());

// Computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    let randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
};

// Play Round
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    console.log("players choice: " + playerChoice)
    console.log("computers Choice: " + computerChoice);

    resultDiv.innerHTML = 
        `<strong>You:</strong> ${choiceMove[playerChoice]}<br>
        <strong>PC:</strong> ${choiceMove[computerChoice]}<br><br>`;
    
    if (playerChoice === computerChoice) {
        resultDiv.innerHTML += "It's a tie!"
        console.log("it's a tie!")
    } 
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper") 
    ) {
        playerScore++;
        resultDiv.innerHTML += "You win the round!"
        console.log("You win the round!")
    } 
    else {
        computerScore++;
        resultDiv.innerHTML += "You lost the round!"
        console.log("You lost the round!")
    }

    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;

    checkWinner();

}

// Check winner of the game
function checkWinner() {
    if (playerScore === MAX_SCORE || computerScore === MAX_SCORE) {
        const winner = playerScore === MAX_SCORE ? "Congrats! You won the game!" : "Oh no! You have been defeated!";
        resultDiv.textContent = winner;
        disabledButtons();
    }
}

// When user or computer win, buttons must be disabled
function disabledButtons(){
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

// Reset score variable, result div and the string + enable buttons
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = 0;
    computerScoreSpan.textContent = 0;
    resultDiv.textContent = "Pick your move!"

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}





















/* function playRound(player, computer) {

    console.log(player);
    console.log(computer);
    
    switch (player) {
        case "rock":
            switch (computer) {
                case "scissors":
                    playerScore++;
                    console.log("player scores: " + playerScore);
                    break;
                case "paper":
                    computerScore++;
                    console.log("Computer scores: " + computerScore);
                    break;
                default:
                    console.log("It's a tie!")
                    break;
            }
            break;

        case "scissors":
            switch (computer) {
                case "paper":
                    playerScore++;
                    console.log("player scores: " + playerScore);
                    break;
                case "rock":
                    computerScore++;
                    console.log("Computer scores: " + computerScore);
                    break;
                default:
                    console.log("It's a tie!")
                    break;
            }
            break;

        case "paper":
            switch (computer) {
                case "rock":
                    playerScore++;
                    console.log("player scores: " + playerScore);
                    break;
                case "scissors":
                    computerScore++;
                    console.log("Computer scores: " + computerScore);
                    break;
                default:
                    console.log("It's a tie!")
                    break;
            }
            break;
    }
} */

/** 
 * Ask player for move choice
 * check if player typed correct move
 * if player's input does not match any move
 * ask again
*/
/* function getPlayerChoice() {
    let playerMove = prompt("rock, paper or scissors?", "").toLowerCase();

    switch (playerMove) {
        case "rock":
            return playerMove;
        case "scissors":
            return playerMove;
        case "paper":
            return playerMove;
        default:
            getPlayerChoice()
    }
} */

/**
 * 
 * @param {*} player 
 * @param {*} computer 
 * Takes player && computer args to compare the values
 * and based on the rules, computer or player increments score
 * rock > scissors
 * scissors > paper
 * paper > rock
 * else, it's a tie
 */


/* function playGame() {
    for (let round = 0; round < 5; round++) {
        playRound(getPlayerChoice(), getComputerChoice());
    }
    if (playerScore === computerScore) {
        console.log("It's a draw! You couldn't beat your computer! jaja!")
    } else if (playerScore > computerScore) {
        console.log("Amazing! You beat the super computer!!")
    } else {
        console.log("The computer has beaten you! Good luck next time!")
    }

} */

