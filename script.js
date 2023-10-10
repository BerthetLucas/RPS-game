// DOM elements

let choicePlayerOne = "";
let choicePlayerTwo = "";

const welcomeScreen = document.querySelector(".welcome-modale");
const btnStartGame = document.querySelector(".btn-start-game");
const playOne = document.querySelector(".j1-modale");
const playTwo = document.querySelector(".j2-modale");

const btnPlayerOne = document.querySelector(".btn-j1");
const btnPlayerTwo = document.querySelector(".btn-j2");
const gameScreen = document.querySelector(".game-modale");
const resultScreen = document.querySelector(".result-modale");
const btnToResult = document.querySelector(".btn-result");
const btnToNextMatch = document.querySelector(".btn-next-match");

const resultimg = document.querySelector(".img-result");

// Players choices DOM elements
const playerOneRock = document.querySelector(".j1-rock");
const playerOnePaper = document.querySelector(".j1-paper");
const playerOneScissors = document.querySelector(".j1-scissors");

const playerTwoRock = document.querySelector(".j2-rock");
const playerTwoPaper = document.querySelector(".j2-paper");
const playerTwoScissors = document.querySelector(".j2-scissors");

const playerOneResultContainer = document.querySelector(".j1-choice-container");
const playerTwoResultContainer = document.querySelector(".j2-choice-container");

const scorePlayerOneText = document.querySelector(".player-one-score");
const scorePlayerTwoText = document.querySelector(".player-two-score");

let scorePlayerOne = 0;
let scorePlayerTwo = 0;

// Welcome screen

btnStartGame.addEventListener("click", toPlayerOneScreen);

function toPlayerOneScreen() {
  welcomeScreen.style.display = "none";
  playOne.style.display = "flex";
}

// Player one screen to player 2

btnPlayerOne.addEventListener("click", toPlayerTwoScreen);

function toPlayerTwoScreen() {
  playOne.style.display = "none";
  playTwo.style.display = "flex";
}

// Player two screen to game screen

btnPlayerTwo.addEventListener("click", toFightScreen);

function toFightScreen() {
  playTwo.style.display = "none";
  gameScreen.style.display = "flex";
  playerOneResultContainer.style.animation = "bounceInLeft";
  playerOneResultContainer.style.animationDuration = "2s";
  playerTwoResultContainer.style.animation = "bounceInRight";
  playerTwoResultContainer.style.animationDuration = "2s";
}

// Game screen to result screen

btnToResult.addEventListener("click", toResultScreen);

function toResultScreen() {
  gameScreen.style.display = "none";
  resultScreen.style.display = "flex";
}

// Command to next match

// Game algorythm player's one choice

playerOneRock.addEventListener("click", function () {
  choicePlayerOne = playerOneRock.value;

  console.log(choicePlayerOne);
  playerOnePaper.style.display = "none";
  playerOneScissors.style.display = "none";
  playerOneRock.style.width = "20em";
  playerOneRock.classList.add("rock-fight-animation");
  playerOneResultContainer.innerHTML = `<img src="./img/Pierre.png">`;
  // toPlayerTwoScreen();
});

playerOnePaper.addEventListener("click", pOneSetPaper);

function pOneSetPaper() {
  choicePlayerOne = playerOnePaper.value;
  console.log(choicePlayerOne);
  playerOneScissors.style.display = "none";
  playerOneRock.style.display = "none";
  playerOnePaper.style.width = "20em";
  playerOnePaper.classList.add("paper-fight-animation");
  playerOneResultContainer.innerHTML = `<img src="./img/Feuille.png">`;
  // toPlayerTwoScreen();
}

playerOneScissors.addEventListener("click", function () {
  choicePlayerOne = playerOneScissors.value;
  console.log(choicePlayerOne);
  playerOnePaper.style.display = "none";
  playerOneRock.style.display = "none";
  playerOneScissors.style.width = "20em";
  playerOneScissors.classList.add("scissors-fight-animation");
  playerOneResultContainer.innerHTML = `<img src="./img/Ciseaux.png">`;
  // toPlayerTwoScreen();
});

// Game algorythm player's two choice

playerTwoRock.addEventListener("click", function () {
  choicePlayerTwo = playerTwoRock.value;
  console.log(choicePlayerTwo);
  playerTwoPaper.style.display = "none";
  playerTwoScissors.style.display = "none";
  playerTwoRock.style.width = "20em";
  playerTwoRock.classList.add("rock-fight-animation");
  playerTwoResultContainer.innerHTML = `<img src="./img/PierreInvers.png">`;

  // toFightScreen();
  result();
  imgend();
});

playerTwoPaper.addEventListener("click", function () {
  choicePlayerTwo = playerTwoPaper.value;
  console.log(choicePlayerTwo);
  playerTwoRock.style.display = "none";
  playerTwoScissors.style.display = "none";
  playerTwoPaper.style.width = "20em";
  playerTwoPaper.classList.add("paper-fight-animation");
  playerTwoResultContainer.innerHTML = `<img src="./img/FeuilleInvers.png">`;
  // toFightScreen();
  result();
  imgend();
});

playerTwoScissors.addEventListener("click", function () {
  choicePlayerTwo = playerTwoScissors.value;
  console.log(choicePlayerTwo);
  playerTwoRock.style.display = "none";
  playerTwoPaper.style.display = "none";
  playerTwoScissors.style.width = "20em";
  playerTwoScissors.classList.add("scissors-fight-animation");
  playerTwoResultContainer.innerHTML = `<img src="./img/CiseauxInvers.png">`;
  // toFightScreen();
  result();
  imgend();
});

// Game code for result

function result() {
  if (
    choicePlayerOne === choicePlayerTwo ||
    choicePlayerOne == "" ||
    choicePlayerTwo == ""
  ) {
    const egality = document.createElement("h2");
    egality.innerHTML = "None of you win !";
    egality.classList.add("score-message");
    resultScreen.insertBefore(egality, resultimg);
  } else if (
    (choicePlayerOne === "rock" && choicePlayerTwo == "scissors") ||
    (choicePlayerOne === "paper" && choicePlayerTwo == "rock") ||
    (choicePlayerOne === "scissors" && choicePlayerTwo == "paper")
  ) {
    const victory = document.createElement("h2");
    victory.innerHTML = "Player 1 wins";
    victory.classList.add("score-message");
    resultScreen.insertBefore(victory, resultimg);
    scorePlayerOne++;
    scorePlayerOneText.innerHTML = `Player 1 : ${scorePlayerOne}`;
    scorePlayerTwoText.innerHTML = `Player 2 : ${scorePlayerTwo}`;
  } else {
    const victory = document.createElement("h2");
    victory.innerHTML = "Player 2 wins";
    victory.classList.add("score-message");
    resultScreen.insertBefore(victory, resultimg);
    scorePlayerTwo++;
    scorePlayerOneText.innerHTML = `Player 1 : ${scorePlayerOne}`;
    scorePlayerTwoText.innerHTML = `Player 2 : ${scorePlayerTwo}`;
  }
}

// Code for img result asset

function imgend() {
  if (
    (choicePlayerOne == "rock" && choicePlayerTwo == "paper") ||
    (choicePlayerTwo == "rock" && choicePlayerOne == "paper")
  ) {
    resultimg.setAttribute("src", "./img/imgFight/PierreEnd2.png");
  } else if (
    (choicePlayerOne == "rock" && choicePlayerTwo == "scissors") ||
    (choicePlayerTwo == "rock" && choicePlayerOne == "scissors")
  ) {
    resultimg.setAttribute("src", "./img/imgFight/CiseauxEnd.png");
  } else if (
    (choicePlayerOne == "paper" && choicePlayerTwo == "scissors") ||
    (choicePlayerTwo == "paper" && choicePlayerOne == "scissors")
  ) {
    resultimg.setAttribute("src", "./img/imgFight/FeuilleEnd.png");
  } else {
  }
}

btnToNextMatch.addEventListener("click", function () {
  toNextMatchOne();
  toNextMatchTwo();
});

function toNextMatchOne() {
  if (choicePlayerOne == "paper") {
    choicePlayerOne = "";
    playerOneScissors.style.display = "flex";
    playerOneRock.style.display = "flex";
    playerOnePaper.style.width = "";
    playerOnePaper.classList.remove("paper-fight-animation");
    playerOneResultContainer.innerHTML = "";
    welcomeScreen.style.display = "flex";
    resultScreen.style.display = "none";
  } else if (choicePlayerOne == "rock") {
    choicePlayerOne = "";
    playerOnePaper.style.display = "flex";
    playerOneScissors.style.display = "flex";
    playerOneRock.style.width = "";
    playerOneRock.classList.remove("rock-fight-animation");
    playerOneResultContainer.innerHTML = "";
    welcomeScreen.style.display = "flex";
    resultScreen.style.display = "none";
  } else if (choicePlayerOne == "scissors") {
    choicePlayerOne = "";
    playerOnePaper.style.display = "flex";
    playerOneRock.style.display = "flex";
    playerOneScissors.style.width = "";
    playerOneScissors.classList.remove("scissors-fight-animation");
    playerOneResultContainer.innerHTML = "";
    welcomeScreen.style.display = "flex";
    resultScreen.style.display = "none";
  }
}

function toNextMatchTwo() {
  if (choicePlayerTwo == "paper") {
    choicePlayerTwo = "";
    playerTwoScissors.style.display = "block";
    playerTwoRock.style.display = "block";
    playerTwoPaper.style.width = "";
    playerTwoPaper.classList.remove("paper-fight-animation");
    playerTwoResultContainer.innerHTML = "";
    welcomeScreen.style.display = "flex";
    resultScreen.style.display = "none";
  } else if (choicePlayerTwo == "rock") {
    choicePlayerTwo = "";
    playerTwoPaper.style.display = "block";
    playerTwoScissors.style.display = "block";
    playerTwoRock.style.width = "";
    playerTwoRock.classList.remove("rock-fight-animation");
    playerTwoResultContainer.innerHTML = "";
    welcomeScreen.style.display = "flex";
    resultScreen.style.display = "none";
  } else if (choicePlayerTwo == "scissors") {
    choicePlayerTwo = "";
    playerTwoPaper.style.display = "block";
    playerTwoRock.style.display = "block";
    playerTwoScissors.style.width = "";
    playerTwoScissors.classList.remove("scissors-fight-animation");
    playerTwoResultContainer.innerHTML = "";
    welcomeScreen.style.display = "flex";
    resultScreen.style.display = "none";
  }
}
