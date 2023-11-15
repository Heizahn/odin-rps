function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

function determineWinner(userSelection, computerSelection){
    userSelection = userSelection.toLowerCase();

    if(userSelection === computerSelection){
        return 'The game was a tie!';
    } else if(userSelection === 'rock'){
        if(computerSelection === 'paper'){
            return 'You lose!, Paper beats Rock';
        } else {
            return 'You win!';
        }
    } else if(userSelection === 'paper'){
        if(computerSelection === 'scissors'){
            return 'You lose!, Scissors beats Paper';
        } else {
            return 'You win!';
        }
    } else if(userSelection === 'scissors'){
        if(computerSelection === 'rock'){
            return 'You lose!, Rock beats Scissors';
        } else {
            return 'You win!';
        }
    }
}


let userSelection = prompt('Choose rock, paper, or scissors: ');
console.log(determineWinner(userSelection, getComputerChoice()));