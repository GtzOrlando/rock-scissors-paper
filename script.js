let computerSelection;
let playerSelection;
let computerScore = 0;
let humanScore = 0;

function playerChoose() {
    human = prompt("Play rock, scissors or paper for a best of 5 against AI, Write your pick below").toLowerCase();
    if (human == "rock") {
        playerSelection = 0;
    } else if (human == "scissors") {
        playerSelection = 1;
    } else if (human == "paper") {
        playerSelection =2;
    } else {
        alert("You misspelled or you didn't choose any!");
        playerChoose();
    }
}   

function playRound() {
    playerChoose()
    
    computerSelection = Math.floor(Math.random()*3);
    if (computerSelection == 0) {
        computer = "rock";
    } else if (computerSelection == 1) {
        computer = "scissors";
    } else {
        computer = "paper";
    }
    
    if (playerSelection == computerSelection) {
        alert("DRAW! Computer: " + computer + "; you: " + human);
    } else if ((playerSelection - computerSelection) == 1 || (playerSelection - computerSelection) == -2) {
        alert("YOU LOSE! Computer: " + computer + "; you: " + human);
        computerScore++;
    } else {
        alert("YOU WIN! Computer: " + computer + "; you: " + human);
        humanScore++;
    }

    alert("Computer: " + computerScore + "; human: " + humanScore);
}

function game() {

    while (computerScore < 3) {
        playRound();
        
        if (humanScore == 3) {
            break;
        }
    }
}

game();