////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'dynamite', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "dynamite";
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
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove == computerMove) {
        winner = 'tie';
    } else { 
        switch (playerMove) {
            case 'rock':
                if (computerMove === 'dynamite') {
                    winner = 'computer';
                } else if (computerMove === 'scissors') {
                    winner = 'player';
                } break;
            case 'dynamite':
                if (computerMove === 'dynamite') {
                    winner = 'computer';
                } else if (computerMove === 'rock') {
                    winner = 'player';
                } break;
            case 'scissors':
                if (computerMove === 'rock') {
                    winner = 'computer';
                } else if (computerMove === 'dynamite') {
                    winner = 'player';
                } break;
            default : return 'you entered an incorrect answer. try again';
        }
        
    }
    console.log("player chose" + ": " + playerMove);
    console.log("computer chose" + ": " + computerMove);
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    getPlayerMove();
    getComputerMove();
    getWinner();
    while(playerWins <= 5 && computerWins <= 5) {
        if (winner === 'player') {
            playerWins += 1;
            console.log("You win this time, punk.");
            console.log(playerMove + " beats " + computerMove + ".");
            console.log("Now the score is " playerWins + ":" + computerWins + ".");
            console.log("If you're feeling lucky, let's play again.");
        } else if (winner === 'computer') {
            computerWins += 1;
            console.log(computerMove + " beats " + playerMove + "! Muahahahaha");
            console.log("Now the score is " playerWins + ":" + computerWins + ".");
            console.log("Still feeling lucky? Let's play again.");
        } else if (winner === 'tie') {
            console.log("If you're not first, you're last. Rematch?";
        } else {
            console.log("404 - error - your brain not found");
        }
    console.log("There's only room for one of us in this town.");
    return [playerWins, computerWins];
}


// If you are interested in an additional challenge, try writing another function called playTo(x) that allows us to play Rock Paper Scissors until either the player or the computer has won x times. Feel free to steal liberally from playToFive().

