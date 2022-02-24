'use strict';

let playerChoice;
let computerChoice;
const btnElements = document.querySelector(".btns");
let scoreboardText = document.querySelector('.scoreboard-text').textContent;
let scorePlayer = document.getElementById('score-player').textContent;
let scoreComputer = document.getElementById('score-computer').textContent;
const gameOver = document.getElementById('game-over');
let gameOverText = document.querySelector('.game-over-text');
let scorePlayerNumb;
let scoreComputerNumb;
scorePlayerNumb = 0;
scoreComputerNumb = 0;
scorePlayer = String(scorePlayerNumb);
scoreComputer = String(scoreComputerNumb);

gameOverText = 'Hey';

const computerPlay = function() {
    let randomVal = Math.random();
    if(randomVal <= 0.33) return "rock";
    if(randomVal <= 0.66) return "paper";
    if(randomVal <= 1) return "scissors";
}


btnElements.addEventListener('click', function(e) {
    e.preventDefault();
    const object = e.target.textContent.toLowerCase();
    if(!e.target.classList.contains('btn')) {
        return
    } else {
        computerChoice = computerPlay();
        playerChoice = object;

        scoreboardText = playRound(playerChoice, computerChoice);
        scorePlayer = String(scorePlayerNumb);
        scoreComputer = String(scoreComputerNumb);
        return console.log(scoreboardText);

    }
    
});




const playRound = function(playerChoice, computerChoice) {
    
    let winNumb;
    if(playerChoice == computerChoice) {
        winNumb = 0;
    }  else if(playerChoice == 'rock' && computerChoice == 'scissors'){
        winNumb = 1;
    } else if(playerChoice == 'rock' && computerChoice == 'paper'){
        winNumb = 2;
    } else if(playerChoice == 'paper' && computerChoice == 'rock'){
        winNumb = 1;
    } else if(playerChoice == 'paper' && computerChoice == 'scissors'){
        winNumb = 2;
    } else if(playerChoice == 'scissors' && computerChoice == 'paper'){
        winNumb = 1;
    } else {
        winNumb = 2;
    };

    let winObj1 = (winNumb == 1 ? playerChoice : computerChoice)
    let winObj2 = winObj1[0].toUpperCase() + winObj1.slice(1);

    if(winNumb == 1) scorePlayerNumb++; 
    if(winNumb == 2) scoreComputerNumb++;

    if(!winNumb) {
        return "It's a tie!";
    } else return `${winObj2} beats ${winNumb == 1 ? computerChoice : playerChoice}. ${winNumb == 1 ? 'Player' : 'Computer'} wins!`
    
    
};

