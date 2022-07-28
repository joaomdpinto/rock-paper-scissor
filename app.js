const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll(".game-options");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(choice => 
        choice.addEventListener('click', (e) => {
            userChoice=e.target.id;
            userChoiceDisplay.innerHTML = userChoice;
            generateComputerChoice();
            getResult();
        }));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)+1;

    switch(randomNumber){
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'scissor';
            break;
        case 3:
            computerChoice = 'paper';
            break;
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    
    if(userChoice === computerChoice){
        result = 'its a draw';
    }
    
    else if (computerChoice === 'rock'){
        if(userChoice === 'paper'){
            result = 'you win!';
        } else {
            result = 'you loose!';
        }
    }

    else if (computerChoice === 'paper'){
        if(userChoice === 'scissor'){
            result = 'you win!';
        } else {
            result = 'you loose!';
        }  
    }

    else if (computerChoice === 'scissor'){
        if(userChoice === 'rock'){
            result = 'you win!';
        } else {
            result = 'you loose!';
        }
    }

    resultDisplay.innerHTML = result;
}