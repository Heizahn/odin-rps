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



function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;

    for(let i = 0; i < 5; i++){
        let result = determineWinner(prompt('Choose rock, paper, or scissors: '), getComputerChoice());
        if(result === 'The game was a tie!'){
            scoreComputer = scoreComputer
            scorePlayer = scorePlayer
            alert('The game was a tie!')
        } else if (result === 'You win!'){
            scorePlayer++
            alert('You win!')
        } else {
            scoreComputer++
            alert('You lose!')
        }
    }

    if(scorePlayer > scoreComputer){
        alert('You win the game!');
    } else if(scorePlayer < scoreComputer){
        alert('You lose the game!');
    } else {
        alert('The game was a tie!');
    }
}

game();