function getComputerChoice(OPTIONS) {
    let index = Math.floor(Math.random() * OPTIONS.length);
    return OPTIONS[index]
}

function getPlayerChoice() {
    let invalidChoice = true;
    while (invalidChoice){
        let playerChoice = prompt('Rock, paper or scissors?').toLowerCase();
        if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice == 'scissors') {
            return playerChoice
        } else {
            console.log('Pick a valid object.')
        }        
    }
}

function getRoundWinner(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        return 'Tie';
    } else if (computerSelection === 'rock' && playerSelection === 'scissors'){
        return 'Computer';
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return 'Computer';
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return 'Computer';
    } else {
        return 'Player';
    }
}

function game() {
    let isGameOn = true;
    let computerScore = 0;
    let playerScore = 0;
    let round = 1;

    while (isGameOn) {

        console.log(`*===* ROUND ${round}/5 *===*`)
        const OPTIONS = ['rock', 'paper', 'scissors'];
        let computerSelection = getComputerChoice(OPTIONS);
        let playerSelection = getPlayerChoice();
        let roundWinner = getRoundWinner(computerSelection, playerSelection);

        if (roundWinner === 'Computer') {
            computerScore++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}\n `)
        } else if (roundWinner == 'Tie') {
            console.log('Tie!\n ')
        } else {
            playerScore++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}\n `)
        }

        round++;
        
        if (round > 5) {
            console.log('Game Over!')

            if (computerScore > playerScore) {
                console.log('You lose!')
            } else {
                console.log('You win!')
            }
            break;
        }
    }
}

game()
