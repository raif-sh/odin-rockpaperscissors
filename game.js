// Create a function that randomly returns 'rock', 'paper' or 'scissors'.
function getComputerChoice() {
    // Generate a random number between 0 to 1
    let randomNum = Math.random();
    let choice = ""

    // Create a variable as a control to create three segments
    let divider = 1 / 3

    // Check whether random number falls into the first sement
    if (randomNum <= divider) {
        choice = "Rock";
    // Check if random number is in the middle segment
    } else if (randomNum < (divider * 2) && randomNum > divider) {
        choice = "Paper";
    // If both of the conditions are not met, assign value for the rest
    } else {
        choice = "Scissors";
    }
    return choice;
}

// Create a function that gets use input for their choice
function getHumanChoice() {
    // Creating a variable to prompt user
    input = parseInt(prompt("Enter 1 (for rock), 2 (for paper) or 3 (for scissors): "))
    choice = ""

    // Check if the input matches three options and assign the value
    if (input === 1) {
        choice = "Rock";
    } else if (input === 2) {
        choice = "Paper";
    } else if (input === 3) {
        choice = "Scissors";
    } else {
        choice = "Invalid"
    }
    return choice;
}

// Keeping track of the players score
let humanScore = 0;
let computerScore = 0;

// Function that takes the human and computer choice as arguments
// plays a single round and increment round winner's score and log winner
function playRound(humanChoice, computerChoice){

    if (humanChoice === "Rock") {
        if (computerChoice === "Rock") {
            console.log("Rock meets rock, its a draw")
            return
        } else if (computerChoice === "Paper") {
            console.log("Paper beats rock. You lose!")
            computerScore++;
            return;
        } else if (computerChoice === "Scissors") {
            console.log("Rock beats scissors. You win!")
            humanScore++;
            return;
        }
    }

    if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            console.log("Paper beats rock, You win!")
            humanScore++
            return
        } else if (computerChoice === "Paper") {
            console.log("Paper meets paper. Its a draw!")
            return;
        } else if (computerChoice === "Scissors") {
            console.log("Scissors beat paper. You lose!")
            computerScore++;
            return;
        }
    }

    if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
            console.log("Scissors cannot beat rock, You lose!")
            computerScore++
            return
        } else if (computerChoice === "Paper") {
            console.log("Scissors beat paper. You win!")
            humanScore++
            return;
        } else if (computerChoice === "Scissors") {
            console.log("Scissors meet scissors. Its a draw!")
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