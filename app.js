var rockBtn = document.getElementById("rk");
var scissorsBtn = document.getElementById("sc");
var paperBtn = document.getElementById("pp");
var choice = document.getElementById("player-choice");
var computerChoice = document.getElementById("computer-choice");
var options = ["rock", "paper", "scissors"];
var result = document.getElementById("result-container");
function ComputerChoiceHandler() {
    var computer = Math.floor(Math.random() * options.length);
    //console.log(options[computer]);
    return options[computer];
}
function whoWin(player, computer) {
    if (player === computer) {
        console.log("draw");
        result.innerText = "draw";
    }
    else if (player === "rock") {
        if (computer === "scissors")
            result.innerText = "you Win!";
        else
            result.innerText = "you lose";
    }
    else if (player === "paper") {
        if (computer === "scissors")
            result.innerText = "you lose!";
        else
            result.innerText = "you win!";
    }
    else if (player === "scissors") {
        if (computer === "paper")
            result.innerText = "you lose!";
        else
            result.innerText = "you win!";
    }
}
function onClickRock() {
    //console.log("rock");
    var choiceTwo = ComputerChoiceHandler();
    choice.src = "imgs/rock.png";
    computerChoice.src = "imgs/".concat(choiceTwo, ".png");
    whoWin("rock", choiceTwo);
}
function onClickScs() {
    //console.log("scissors");
    var choiceTwo = ComputerChoiceHandler();
    choice.src = "imgs/scissors.png";
    computerChoice.src = "imgs/".concat(choiceTwo, ".png");
    whoWin("scissors", choiceTwo);
}
function onClickPaper() {
    //console.log("paper");
    var choiceTwo = ComputerChoiceHandler();
    choice.src = "imgs/paper.png";
    computerChoice.src = "imgs/".concat(choiceTwo, ".png");
    whoWin("paper", choiceTwo);
}
rockBtn.addEventListener("click", onClickRock);
scissorsBtn.addEventListener("click", onClickScs);
paperBtn.addEventListener("click", onClickPaper);
