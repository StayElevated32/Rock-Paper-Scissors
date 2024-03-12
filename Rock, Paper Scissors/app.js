
//function for getting computer choice
function getComputerChoice(){
    return 'rock', 'paper', 'scissors';
};


// variable for player selection
const playerSelection = 'rock';

// variable for computer selection
const computerSelection = getComputerChoice();

// fucntion for playing a round
let userChoice = playerSelection.toLowerCase();
 function playRound(playerSelection, computerSelection){
    
     return 'You Win! Paper beats Rock';
}



// function for playing the game
function game(){
    prompt('Enter your choice: rock, paper, or scissors');
    return playRound(playerSelection, computerSelection);
}

console.log(game());


