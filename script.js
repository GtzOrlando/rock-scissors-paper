let computerSelection;
let playerSelection;
let computerScore = 0;
let userScore = 0;
let round = 1;

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    playerSelection = 0;
    playRound();
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    playerSelection = 1;
    playRound();
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    playerSelection = 2;
    playRound();
});

function playRound() {
    let user;

    computerSelection = Math.floor(Math.random()*3);
    if (computerSelection == 0) {
        computer = "rock";
    } else if (computerSelection == 1) {
        computer = "scissors";
    } else {
        computer = "paper";
    }

    computerSelection = Math.floor(Math.random()*3);
    if (playerSelection == 0) {
        user = "rock";
    } else if (playerSelection == 1) {
        user = "scissors";
    } else {
        user = "paper";
    }
    
    if (playerSelection == computerSelection) {
        round++;
        document.getElementById("roundNum").innerHTML = round;
        document.getElementById("result").innerHTML = "DRAW!";
    } else if ((playerSelection - computerSelection) == 1 || (playerSelection - computerSelection) == -2) {
        computerScore++;
        round++;
        document.getElementById("roundNum").innerHTML = round;
        document.getElementById("computerScore").innerHTML = computerScore;
        document.getElementById("result").innerHTML = "YOU WIN!";
    } else {
        userScore++;
        round++;
        document.getElementById("roundNum").innerHTML = round;
        document.getElementById("userScore").innerHTML = userScore;
        document.getElementById("result").innerHTML = "YOU LOSE!";
    }
}