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

// Create a variable to lock in computer choice for this round
let computerChoice = getComputerChoice();

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

// Creating a variable to track user choice for current round
let humanChoice = getHumanChoice();
