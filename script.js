let computerSelection;
let playerSelection;
let computerScore = 0;
let userScore = 0;
let round = 1;

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    playerSelection = 0;
    document.getElementById("result").innerHTML = "";
    disableButtons();
    effectUp();
    setTimeout(effectDown, 250);
    setTimeout(effectUp, 500);
    setTimeout(effectDown, 750);
    setTimeout(playRound, 1000);
    setTimeout(enableButtons, 1250);
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    playerSelection = 1;
    document.getElementById("result").innerHTML = "";
    disableButtons();
    effectUp();
    setTimeout(effectDown, 250);
    setTimeout(effectUp, 500);
    setTimeout(effectDown, 750);
    setTimeout(playRound, 1000);
    setTimeout(enableButtons, 1250);
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    playerSelection = 2;
    document.getElementById("result").innerHTML = "";
    disableButtons();
    effectUp();
    setTimeout(effectDown, 250);
    setTimeout(effectUp, 500);
    setTimeout(effectDown, 750);
    setTimeout(playRound, 1000);
    setTimeout(enableButtons, 1250);
});

function playRound() {
    let user;

    computerSelection = Math.floor(Math.random()*3);
    if (computerSelection == 0) {
        document.getElementById("computerVisual").src = "./images/rock.png";
    } else if (computerSelection == 1) {
        document.getElementById("computerVisual").src = "./images/scissors.png";
    } else {
        document.getElementById("computerVisual").src = "./images/paper.png";
    }

    if (playerSelection == 0) {
        document.getElementById("userVisual").src = "./images/rock.png";
    } else if (playerSelection == 1) {
        document.getElementById("userVisual").src = "./images/scissors.png";
    } else {
        document.getElementById("userVisual").src = "./images/paper.png";
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
        document.getElementById("result").innerHTML = "YOU LOSE!";
    } else {
        userScore++;
        round++;
        document.getElementById("roundNum").innerHTML = round;
        document.getElementById("userScore").innerHTML = userScore;
        document.getElementById("result").innerHTML = "YOU WIN!";
    }
}

function effectDown() {
    document.getElementById("userVisual").src = "./images/effect-down.png";
    document.getElementById("computerVisual").src = "./images/effect-down.png";
}

function effectUp() {
    document.getElementById("userVisual").src = "./images/effect-up.png";
    document.getElementById("computerVisual").src = "./images/effect-up.png";
}

function disableButtons() {
    btn1.setAttribute('disabled','disabled');
    btn2.setAttribute('disabled','disabled');
    btn3.setAttribute('disabled','disabled');

    document.getElementById("btn1").style.backgroundColor = "gray";
    document.getElementById("btn2").style.backgroundColor = "gray";
    document.getElementById("btn3").style.backgroundColor = "gray";
}

function enableButtons() {
    btn1.removeAttribute('disabled');
    btn2.removeAttribute('disabled');
    btn3.removeAttribute('disabled');

    document.getElementById("btn1").style.backgroundColor = "rgb(113, 165, 22)";
    document.getElementById("btn2").style.backgroundColor = "rgb(113, 165, 22)";
    document.getElementById("btn3").style.backgroundColor = "rgb(113, 165, 22)";
}