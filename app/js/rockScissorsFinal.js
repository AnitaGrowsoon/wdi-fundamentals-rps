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

function getPlayerMove(move) {
    return playerMove = move || getInput();
}

function getComputerMove(move) {
    return computerMove = move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    if (playerMove === 'quit') {
        return "quit";
    } else if (playerMove == computerMove) {
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
    while(playerWins < 5 && computerWins < 5) {
        winner = getWinner();
        if (winner === 'player') {
            playerWins += 1;
            console.log(playerMove + " beats " + computerMove + "." + '\n' + "Now the score is :" + playerWins + " : " + computerWins + "." + '\n');
            console.log("To quit, type 'quit'." + '\n');
        } else if (winner === 'computer') {
            computerWins += 1;
            console.log(playerMove + " beats " + computerMove + "." + '\n' + "Now the score is :" + playerWins + " : " + computerWins + "." + '\n');
            console.log("To quit, type 'quit'." + '\n');
        } else if (winner === 'tie') {
            console.log("If you're not first, you're last. Rematch?");
            console.log("To quit, type 'quit'." + '\n');
        } else if (winner === 'quit') {
            console.log("player chose: " + winner + ".");
            return "Fine. Quitter.";
        } else {
            console.log("Did you enter 'paper'? Tsk. Tsk.");
            console.log("Make sure you enter 'rock', 'dynamite', or 'scissors'.")
            console.log("To quit, type 'quit'." + '\n');
        }
} console.log("There's only room for one of us in this town.");
    return [playerWins, computerWins];
}

function playToX(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner;
    var x;
    while(playerWins < (x - 1) && computerWins < (x - 1) ){
        winner = getWinner();
        if (winner === 'player') {
            playerWins += 1;
            console.log('...');
            console.log("You win this time, punk. ");
            console.log(playerMove + " beats " + computerMove + ".");
            console.log("Now the score is: " + playerWins + ", " + computerWins + ".");
            console.log("If you're feeling lucky, let's play again.");
            console.log('');
        } else if (winner === 'computer') {
            computerWins += 1;
            console.log('...');
            console.log(computerMove + " beats " + playerMove + "! Muahahahaha");
            console.log("Now the score is: " + playerWins + ", " + computerWins + ".");
            console.log("Still feeling lucky? Let's play again.");
            console.log('');
        } else if (winner === 'tie') {
            console.log('...');
            console.log("If you're not first, you're last. Rematch?" + '\n');
        } else {
            console.log("Did you enter 'paper'? Tsk. Tsk." + '\n' + "Make sure you enter a correct response." + '\n')
        }
}   while(playerWins < x && computerWins < x) {
        winner = getWinner();
            if ((playerWins == (x - 1)) && winner === 'player') {
                playerWins += 1;
                console.log('...');
                console.log("You beat me! I demand a recount!");
                console.log('');
            } else if ((computerWins = (x - 1)) && winner === 'computer') {
                computerWins += 1;
                console.log('...');
                console.log("You lost. Wanna cry about it?");
                console.log('');
            } else if ((playerWins == (x - 1)) || (winner === 'player')) {
                playerWins += 1;
                console.log('...');
                console.log("You win this time, punk. ");
                console.log(playerMove + " beats " + computerMove + ".");
                console.log("Now the score is: " + playerWins + ", " + computerWins + ".");
                console.log("If you're feeling lucky, let's play again.");
                console.log('');
            } else if ((computerWins = (x - 1)) || winner === 'computer') {
                computerWins += 1;
                console.log('...');
                console.log(computerMove + " beats " + playerMove + "! Muahahahaha");
                console.log("Now the score is: " + playerWins + ", " + computerWins + ".");
                console.log("Still feeling lucky? Let's play again.");
                console.log('');  
            } else if (winner === 'tie') {
                console.log('...');
                console.log("If you're not first, you're last. Rematch?" + '\n');
            } else {
                console.log("Did you enter 'paper'? Tsk. Tsk." + '\n' + "Make sure you enter a correct response." + '\n')
            }
        if ((playerWins == x) || (computerWins == x)) {
        console.log('\n' + "There's only room for one of us in this town.");
        return [playerWins, computerWins];
        }
    }
}


playToX(10);
