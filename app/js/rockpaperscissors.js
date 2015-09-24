////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return playerMove = move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return computerMove = move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    /* YOUR CODE HERE */
    if (playerMove === 'quit') {
        winner = 'quit';
    } else if (playerMove == computerMove) {
        winner = 'tie';
    } else if (((playerMove == 'rock') && (computerMove == 'paper')) || 
              ((playerMove == 'paper') && (computerMove == 'scissors')) || 
              ((playerMove == 'scissors') && (computerMove == 'rock'))) 
              {
        winner = 'computer';
    } else if (((playerMove == 'rock') && (computerMove == 'scissors')) || 
              ((playerMove == 'paper') && (computerMove == 'rock')) || 
              ((playerMove == 'scissors') && (computerMove == 'paper'))) 
              {
        winner = 'player';
    } else { 
        winner = null;
        }
        console.log("player chose" + ": " + playerMove);
        console.log("computer chose" + ": " + computerMove);
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    console.log("To quit, type 'quit'");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while(playerWins < 5 && computerWins < 5 ) {
        winner = getWinner();
        if (winner === 'quit') {
            return "Fine. Quitter.";
        } else if (winner === 'player') {
            playerWins += 1;
            console.log(playerMove + " beats " + computerMove + "." + '\n' + "Now the score is :" + playerWins + " : " + computerWins + "." + '\n');    
        } else if (winner === 'computer') {
            computerWins += 1;
            console.log(playerMove + " beats " + computerMove + "." + '\n' + "Now the score is :" + playerWins + " : " + computerWins + "." + '\n');
        } else if (winner === 'tie') {
            console.log("If you're not first, you're last. -_- No one wins.");
        } else {
            console.log("you did not enter a valid response' + '\n' + 'to quit, type 'quit'");
        }
}   console.log("GAME OVER");/* YOUR CODE HERE */
    return [playerWins, computerWins];
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    console.log("To quit, type 'quit'");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while(playerWins < x && computerWins < x ) {
        winner = getWinner();
        if (winner === 'quit') {
            return "Fine. Quitter.";
        } else if (winner === 'player') {
            playerWins += 1;
            console.log(playerMove + " beats " + computerMove + "." + '\n' + "Now the score is :" + playerWins + " : " + computerWins + "." + '\n');    
        } else if (winner === 'computer') {
            computerWins += 1;
            console.log(playerMove + " beats " + computerMove + "." + '\n' + "Now the score is :" + playerWins + " : " + computerWins + "." + '\n');
        } else if (winner === 'tie') {
            console.log("If you're not first, you're last. -_- No one wins.");
        } else {
            console.log("you did not enter a valid response' + '\n' + 'to quit, type 'quit'");
        }
}   console.log("GAME OVER");/* YOUR CODE HERE */
    return [playerWins, computerWins];
}