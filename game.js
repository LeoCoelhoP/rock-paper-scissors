function getComputerChoice(OPTIONS) {
    let index = Math.floor(Math.random() * OPTIONS.length);
    return OPTIONS[index]
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

function getMatchWinner (playerScore, computerScore) {
    midContainerNextPara = document.querySelector('.mid-container-next-para')
    midContainerLastPara = document.querySelector('.mid-container-last-para')

    if (playerScore > computerScore) {
        midContainerPara.textContent = 'GAME OVER!';
        midContainerNextPara.textContent = 'PlAYER WIN!'
        midContainerLastPara.textContent = 'refresh the page to restart.'

    } else if (computerScore > playerScore) {
        midContainerPara.textContent = 'GAME OVER!';
        midContainerNextPara.textContent = 'COMPUTER WIN!'
        midContainerLastPara.textContent = 'REFRESH THE PAGE TO RESTART.'
    } else {
        midContainerPara.textContent = 'GAME OVER!';
        midContainerNextPara.textContent = 'TIE!'
        midContainerLastPara.textContent = 'REFRESH THE PAGE TO RESTART.'
    }

}

function playRound(playerChoice) {
    let playerSelection = playerChoice

    const OPTIONS = ['rock', 'paper', 'scissors'];
    let computerSelection = getComputerChoice(OPTIONS);

    let roundWinner = getRoundWinner(computerSelection, playerSelection);

    let message;

    return (roundWinner === 'Computer')? 'computer': (roundWinner === 'Player') ? 'player' : 'tie';

}

function startGame() {
    topContainer.setAttribute('style', 'display: flex;');

    playerChoiceButtons = document.querySelectorAll('button');
    let playerOptions = Array.from(playerChoiceButtons);
    playerOptions.forEach((element) => {
        element.addEventListener('click', () => {
            element.setAttribute('style', 'background: lightyellow;');
            roundCounter.textContent = `ROUND ${round}/5`;
            scoreboard.textContent = `PLAYER ${playerScore} X ${computerScore} COMPUTER`;

            playerChoice = element.id;

            let roundWinner = playRound(playerChoice)
            if (roundWinner === 'computer') {
                computerScore++;
                midContainerPara.textContent = `ROUND WINNER:\xa0\xa0${roundWinner.toUpperCase()}!`;
            } else if (roundWinner === 'player') {
                playerScore++;
                midContainerPara.textContent = `ROUND WINNER:\xa0\xa0${roundWinner.toUpperCase()}!`;
            } else {
                midContainerPara.textContent = 'TIE!';
            }

            scoreboard.textContent = `PLAYER ${playerScore} X ${computerScore} COMPUTER`;

            round ++;
            element.setAttribute('style', 'background: white; border: auto;');


            if (round > 5) {
                playerOptions.forEach((element) => {
                    element.disbled = true;
                });
                gameOn = false;
                getMatchWinner(playerScore, computerScore);
                topContainer.setAttribute('style', 'display: none;');
            }
        });
    });
}
gameOn = true;
computerScore = 0;
playerScore = 0;
round = 1;

const topContainer = document.querySelector('.top-inside-container');
const roundCounter = document.querySelector('.round-counter');
const scoreboard = document.querySelector('.scoreboard');
const matchResult = document.querySelector('.match-result');

const midSection = document.querySelector('.mid-section');
const midContainerPara = document.querySelector('.mid-container-para');

const playerDeck = document.querySelector('.player-deck');

topContainer.appendChild(roundCounter);
topContainer.appendChild(scoreboard);
topContainer.appendChild(matchResult);


startGame();
