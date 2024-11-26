console.log("Hello World");

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: ");
    return choice;
}


function playRound() {
    humanChoice = getHumanChoice.toLowerCase();
    computerChoice = getComputerChoice.toLowerCase();
    if (computerChoice == 'rock' && humanChoice == 'paper') {
        console.log('Player wins! Paper beats rock')
        humanScore += 1
    } else if (computerChoice == 'paper' && humanChoice == 'rock') {
        console.log('Computer wins! Paper beats rock!')
        computerScore += 1
    } else if (computerChoice == humanChoice) {
        console.log('Draw!')
    } else if (computerChoice == 'paper' && humanChoice == 'scissors') {
        console.log("Player wins! Scissors beats paper")
        humanScore += 1
    } else if (computerChoice == 'scissors' && humanChoice == 'paper') {
        console.log("Computer wins! Scissors beats paper")
        computerScore += 1
    } else if (computerChoice == 'scissors' && humanChoice == 'rock') {
        console.log("Player wins! Rock beats scissors")
        humanScore += 1
    } else if (computerChoice == 'rock' && humanChoice == 'scissors') {
        console.log("Computer wins! Rock beats scissors")
        computerScore += 1
    } 
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(humanChoice, computerChoice); 
        console.log(computerScore)
        console.log(humanScore)
    }
    if (humanScore > computerScore) {
        console.log('Player wins!')
    }
    else if (computerScore > humanScore) {
        console.log("Computer wins!")
    } 
    else {
        console.log("Draw!")
    }

}

let humanScore = 0;
let computerScore = 0;

playGame()