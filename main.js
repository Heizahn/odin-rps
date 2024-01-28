function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

function determineWinner(userSelection, computerSelection) {
    userSelection = userSelection.toLowerCase();

    if (userSelection === computerSelection) {
        return 'The game was a tie!';
    } else if (userSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You lose!, Paper beats Rock';
        } else {
            return 'You win!';
        }
    } else if (userSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'You lose!, Scissors beats Paper';
        } else {
            return 'You win!';
        }
    } else if (userSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You lose!, Rock beats Scissors';
        } else {
            return 'You win!';
        }
    }
}

let resultWinner
const playerScore = document.getElementById("playerScore")
const computerScore = document.getElementById("computerScore")
const winner = document.getElementById("winner")
let scorePlayer = 0;
let scoreMachine = 0;

function playRound(userOption) {
    resultWinner = determineWinner(userOption, getComputerChoice())

    if (resultWinner === "You win!") scorePlayer++
    else if (resultWinner === "You lose!, Rock beats Scissors") scoreMachine++
    else winner.innerText = 'The round was a tie!'

    playerScore.innerText = scorePlayer.toString()
    computerScore.innerText = scoreMachine.toString()

    if (scorePlayer >= 5) {
        winner.innerText = "The player is the winner"
    }

    if (scoreMachine >= 5) {
        winner.innerText = "The computer is the winner"
    }
}


playerScore.innerText = scorePlayer.toString()
computerScore.innerText = scoreMachine.toString()
