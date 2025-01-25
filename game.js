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

// Create a function that gets use input for their choice
function getHumanChoice() {
    // Creating a variable to prompt user
    input = prompt("Pick your choice - rock, paper or scissors: ")
    choice = input.toLowerCase()

    if (choice != 'rock' && choice != 'paper' && choice != 'scissors'){
        console.log(choice + " is an invalid option")
    }
    return choice;
}

// Keeping track of the players score
let humanScore = 0;
let computerScore = 0;

// Function that takes the human and computer choice as arguments
// plays a single round and increment round winner's score and log winner
function playRound(humanChoice, computerChoice){

    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("rock meets rock, its a draw")
            return
        } else if (computerChoice === "paper") {
            console.log("paper beats rock. You lose!")
            computerScore++;
            return;
        } else if (computerChoice === "scissors") {
            console.log("rock beats scissors. You win!")
            humanScore++;
            return;
        }
    }

    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("paper beats rock, You win!")
            humanScore++
            return
        } else if (computerChoice === "paper") {
            console.log("paper meets paper. Its a draw!")
            return;
        } else if (computerChoice === "scissors") {
            console.log("scissors beat paper. You lose!")
            computerScore++;
            return;
        }
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("scissors cannot beat rock, You lose!")
            computerScore++
            return
        } else if (computerChoice === "paper") {
            console.log("scissors beat paper. You win!")
            humanScore++
            return;
        } else if (computerChoice === "scissors") {
            console.log("scissors meet scissors. Its a draw!")
            return;
        }
    }
    // Increment the score of the winner
    // Console.log the round winner
}

// Create a variable to lock in computer choice for this round
const computerSelection = getComputerChoice();

// Creating a variable to track user choice for current round
const humanSelection = getHumanChoice();

playRound(humanSelection, computerSelection);

console.log("human score: " + humanScore);
console.log("computer score: " + computerScore);