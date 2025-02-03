// Game setup information
let roundNum = document.querySelector(".round");
let round = 1
roundNum.textContent = round;

// Keeping track of the players score
let humanScore = 0;
let computerScore = 0;

let humanProgress = document.querySelector(".humanProgress");
humanProgress.textContent = humanScore;

let computerProgress= document.querySelector(".computerProgress");
computerProgress.textContent = computerScore;

// Current round info
let currentHuman = document.querySelector(".roundPick");
currentHuman.textContent = "Choose one and click confirm to play"

let currentResult = document.querySelector(".roundResult");

// Finishing up game
let declareWinner = document.querySelector(".winner");
let gameConfirm = document.querySelector(".confirm")

// Create a function that randomly returns 'rock', 'paper' or 'scissors'.
function getComputerChoice() {
    // Generate a random number between 0 to 1
    let randomNum = Math.random();
    let choice = ""

    // Create a variable as a control to create three segments
    let divider = 1 / 3

    // Check whether random number falls into the first sement
    if (randomNum <= divider) {
        choice = "rock";
    // Check if random number is in the middle segment
    } else if (randomNum < (divider * 2) && randomNum > divider) {
        choice = "paper";
    // If both of the conditions are not met, assign value for the rest
    } else {
        choice = "scissors";
    }
    return choice;
}

// Getting user input from buttons
let pick = "";
let humanSelection = ""
let buttonGame = document.querySelector(".game");

buttonGame.addEventListener("click", (event) => {
    pick = event.target.textContent;
    humanSelection = getHumanChoice()
    currentHuman.textContent = "You have picked " + humanSelection;
})

// Create a function that gets use input for their choice
function getHumanChoice() {
    // Creating a variable to prompt user
    // input = prompt("Pick your choice - rock, paper or scissors: ")
    
    let choice = pick.toLowerCase();

    if (choice != 'rock' && choice != 'paper' && choice != 'scissors'){
        currentResult.textContent = choice + " is an invalid option";
    }

    return choice;
}

// Function that takes the human and computer choice as arguments
// plays a single round and increment round winner's score and log winner
function playRound(humanChoice, computerChoice){
    // Check human vs computer selection to find winner
    // Increment the score of the winner
    // Console.log the round winner/loser/draw
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            currentResult.textContent = "rock meets rock, its a draw"
            return
        } else if (computerChoice === "paper") {
            currentResult.textContent = "paper beats rock. You lose!"
            computerScore++;
            return;
        } else if (computerChoice === "scissors") {
            currentResult.textContent = "rock beats scissors. You win!"
            humanScore++;
            return;
        }
    }

    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            currentResult.textContent = "paper beats rock, You win!"
            humanScore++
            return
        } else if (computerChoice === "paper") {
            currentResult.textContent = "paper meets paper. Its a draw!"
            return;
        } else if (computerChoice === "scissors") {
            currentResult.textContent = "scissors beat paper. You lose!"
            computerScore++;
            return;
        }
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            currentResult.textContent = "scissors cannot beat rock, You lose!"
            computerScore++
            return
        } else if (computerChoice === "paper") {
            currentResult.textContent = "scissors beat paper. You win!"
            humanScore++
            return;
        } else if (computerChoice === "scissors") {
            currentResult.textContent = "scissors meet scissors. Its a draw!"
            return;
        }
    }
}


function playGame() {
    // Create a variable to lock in computer choice for this round
    const computerSelection = getComputerChoice();

    // Play one round of game and show new score
    playRound(humanSelection, computerSelection);

    if (humanScore === 5) {
        declareWinner.textContent = "You Won! Refresh to start new game"
        gameConfirm.firstElementChild.remove();
    } else if (computerScore === 5) {
        declareWinner.textContent = "Computer Won! Refresh to start new game"
        gameConfirm.firstElementChild.remove();
    } else {
        computerProgress.textContent = computerScore;
        humanProgress.textContent = humanScore;
        roundNum.textContent = round;
    }
}

const playNow = document.querySelector(".confirm")
playNow.addEventListener("click", () => {
    playGame();
    round++;
})