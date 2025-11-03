console.log("Hello world!");

// Variables to track players score
let playerScore = 0;
let computerScore = 0;

//getComputerChoice();
//console.log(computerChoice);

//getPlayerChoice();
//console.log(playerChoice);


let computerChoice;
let playerChoice;

playGame();


/** 
 * Math.Random returns a number between 0 and 1.
 * Multiply by 3 te get a number between 0 and 3
 * Math.floor to round the number and will give 0, 1 or 2
 * 0 = Rock; 1 = Scissors; 2 = Paper
*/
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
    }
}
/** 
 * Ask player for move choice
 * check if player typed correct move
 * if player's input does not match any move
 * ask again
*/
function getPlayerChoice() {
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
}

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

function playRound(player, computer) {

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
}

function playGame() {
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

}

