'use strict';

let playerChoice;
let computerChoice;
const btnElements = document.querySelector(".btns");
let scoreboardText = document.querySelector('.scoreboard-text');
let scorePlayer = document.getElementById('score-player');
let scoreComputer = document.getElementById('score-computer');
let gameOver = document.getElementById('game-over');
let gameOverText = document.querySelector('.game-over-text');
let reset = document.getElementById('reset');
let scorePlayerNumb;
let scoreComputerNumb;
scorePlayerNumb = 0;
scoreComputerNumb = 0;
scorePlayer.textContent = String(scorePlayerNumb);
scoreComputer.textContent = String(scoreComputerNumb);




const computerPlay = function() {
    const rps = ['rock', 'paper', 'scissors']
    let randomVal = Math.floor(Math.random()*rps.length);
    return rps[randomVal];
}




const oneRound = function(e) {
    e.preventDefault();
    const object = e.target.textContent.toLowerCase();

    if(!e.target.classList.contains('btn')) return;

    computerChoice = computerPlay();
    playerChoice = object;

    scoreboardText.textContent = playRound(playerChoice, computerChoice);
    console.log(scorePlayerNumb, scoreComputerNumb);
    scorePlayer.textContent = String(scorePlayerNumb);
    scoreComputer.textContent = String(scoreComputerNumb);
    if (scorePlayerNumb == 5 || scoreComputerNumb  == 5) {
        
        gameOverText.textContent = `Game over! ${scorePlayerNumb == 5 ? 'Player' : 'Computer'} won. Try again?`
        gameOver.classList.remove('hidden')

        return this.removeEventListener('click', oneRound);
    }
}

btnElements.addEventListener('click', oneRound);

reset.addEventListener('click', function(e) {
    e.preventDefault();
    scorePlayer.textContent = '0';
    scoreComputer.textContent = '0';
    scoreboardText.textContent = '';
    gameOver.classList.add('hidden');
    return btnElements.addEventListener('click', oneRound);
})


const playRound = function(playerChoice, computerChoice) {
    
    let winNumb;
    if(playerChoice == computerChoice) {
        winNumb = 0;
    } else if(
        playerChoice == 'rock' && computerChoice == 'scissors' ||
        playerChoice == 'paper' && computerChoice == 'rock' ||
        playerChoice == 'scissors' && computerChoice == 'paper'
    ) {
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

