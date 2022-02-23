'use strict';

const computerPlay = function() {
    let randomVal = Math.random();
    if(randomVal <= 0.33) return "rock";
    if(randomVal <= 0.66) return "paper";
    if(randomVal <= 1) return "scissors";
}



let playerChoice;
let computerChoice;
const btnElements = document.querySelector(".btns");



btnElements.addEventListener('click', function(e) {
    e.preventDefault();
    const object = e.target.textContent.toLowerCase();
    if(!e.target.classList.contains('btn')) {
        return
    } else {
        computerChoice = computerPlay();
        playerChoice = object;

        return console.log(playRound(playerChoice, computerChoice));
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

    if(!winNumb) {
        return "It's a tie!";
    } else return `${winObj2} beats ${winNumb == 1 ? computerChoice : playerChoice}. ${winNumb == 1 ? 'Player' : 'Computer'} wins!`
    
    
};

