const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll(".game-options");

let userChoice;

possibleChoices.forEach(choice => 
        choice.addEventListener('click', (e) => {
            userChoice=e.target.id;
            userChoiceDisplay.innerHTML = userChoice;
        }));