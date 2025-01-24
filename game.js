// function that randomly returns 'rock', 'paper' or 'scissors'.

function getComputerChoice() {
    // generate a random number in range of 0 to 2
    let randomNum = Math.random();
    let choice = ""
    let divider = 1 / 3

    // return one of the options based on the number
    if (randomNum <= divider) {
        choice = "Rock";
    } else if (randomNum < (divider * 2) && randomNum > divider) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}

let computerChoice = getComputerChoice();