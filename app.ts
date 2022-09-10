const rockBtn = document.getElementById("rk") as HTMLButtonElement;
const scissorsBtn = document.getElementById("sc") as HTMLButtonElement;
const paperBtn = document.getElementById("pp") as HTMLButtonElement;
const choice = document.getElementById("player-choice") as HTMLImageElement;
const computerChoice = document.getElementById(
  "computer-choice"
) as HTMLImageElement;
const options = ["rock", "paper", "scissors"];
const result = document.getElementById("result-container") as HTMLElement;

function ComputerChoiceHandler(): string {
  let computer = Math.floor(Math.random() * options.length);
  //console.log(options[computer]);
  return options[computer];
}

function whoWin(player: string, computer: string): void {
  if (player === computer) {
    console.log("draw");
    result.innerText = "draw";
  } else if (player === "rock") {
    if (computer === "scissors") result.innerText = "you Win!";
    else result.innerText = "you lose";
  } else if (player === "paper") {
    if (computer === "scissors") result.innerText = "you lose!";
    else result.innerText = "you win!";
  } else if (player === "scissors") {
    if (computer === "paper") result.innerText = "you win!";
    else result.innerText = "you lose";
  }
}

function onClickRock(): void {
  //console.log("rock");
  const choiceTwo = ComputerChoiceHandler();
  choice.src = "imgs/rock.png";
  computerChoice.src = `imgs/${choiceTwo}.png`;
  whoWin("rock", choiceTwo);
}

function onClickScs(): void {
  //console.log("scissors");
  const choiceTwo = ComputerChoiceHandler();
  choice.src = "imgs/scissors.png";
  computerChoice.src = `imgs/${choiceTwo}.png`;
  whoWin("scissors", choiceTwo);
}

function onClickPaper(): void {
  //console.log("paper");
  const choiceTwo = ComputerChoiceHandler();
  choice.src = "imgs/paper.png";
  computerChoice.src = `imgs/${choiceTwo}.png`;
  whoWin("paper", choiceTwo);
}

rockBtn.addEventListener("click", onClickRock);
scissorsBtn.addEventListener("click", onClickScs);
paperBtn.addEventListener("click", onClickPaper);
