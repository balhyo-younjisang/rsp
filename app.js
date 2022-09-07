var rockBtn = document.getElementById("rk");
var scissorsBtn = document.getElementById("sc");
var paperBtn = document.getElementById("pp");
var show = document.getElementById("player");
function onClickRock() {
    show.innerHTML = "✊";
}
function onClickScs() {
    show.innerHTML = "✌️";
}
function onClickPaper() {
    show.innerHTML = "🖐️";
}
rockBtn === null || rockBtn === void 0 ? void 0 : rockBtn.addEventListener("click", onClickRock);
scissorsBtn === null || scissorsBtn === void 0 ? void 0 : scissorsBtn.addEventListener("click", onClickScs);
paperBtn === null || paperBtn === void 0 ? void 0 : paperBtn.addEventListener("click", onClickPaper);
