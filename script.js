window.addEventListener("load", start);

let rock;
let paper;
let scissors;

let rockValue = 0;
let paperValue = 1;
let scissorsValue = 2;

let myChoise;

function start() {
  rock = document.querySelector(".rock");
  paper = document.querySelector(".paper");
  scissors = document.querySelector(".scissors");
  // 0=rock, 1= paper, 2=scissors
  rock.addEventListener("click", rockClick);
  paper.addEventListener("click", paperClick);
  scissors.addEventListener("click", scissorsClick);
}

function rockClick() {
  console.log("rock");
  myChoise = rockValue;
  handleClick();
}

function paperClick() {
  console.log("paper");
  myChoise = paperValue;
  handleClick();
}

function scissorsClick() {
  console.log("scissors");
  myChoise = scissorsValue;
  handleClick();
}

function handleClick() {
  resetAnimation();
  makeRandomComputerChoise();
  determineWinner();
  showAnimations();
}

function makeRandomComputerChoise() {
  //math.random (vælg mellem 0,1 eller 2)
  computerChoise = Math.floor(Math.random() * 3);
  console.log(computerChoise);
  //Computer vælger random player.rock, player.paper, player.scissors
  //Math.random() mellem de tre måske variabler?;
}

function showAnimations() {
  player1.classList.add("shake");
  player2.classList.add("shake");
}

function determineWinner() {
  if (myChoise == computerChoise) {
    //draw
    showDraw();
  } else if (myChoise == rockValue && computerChoise == paperValue) {
    //I loose
    showLoose();
  } else if (myChoise == paperValue && computerChoise == scissorsValue) {
    //I i loose
    showLoose();
  } else if (myChoise == scissorsValue && computerChoise == rockValue) {
    //I i loose
    showLoose();
  } else {
    //i win
    showWin();
  }
}

function showWin() {
  console.log("Show win!");
}

function showLoose() {
  console.log("Show loose!");
}

function showDraw() {
  console.log("Show draw!");
}

function resetAnimation() {}
