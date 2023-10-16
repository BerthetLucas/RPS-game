// DOM elements

let choicePlayerOne = "";
let choicePlayerTwo = "";

const textResult = document.querySelector(".result-text");
const textCongratulation = document.querySelector('.congratulation-text'); 

const welcomeScreen = document.querySelector(".welcome-modale");
const btnStartGame = document.querySelector(".btn-start-game");
const playOne = document.querySelector(".j1-modale");
const playTwo = document.querySelector(".j2-modale");
const congratulationScreen = document.querySelector('.congratulation'); 

const btnPlayerOne = document.querySelector(".btn-j1");
const btnPlayerTwo = document.querySelector(".btn-j2");
const gameScreen = document.querySelector(".game-modale");
const resultScreen = document.querySelector(".result-modale");
const btnToResult = document.querySelector(".btn-result");
const btnToNextMatch = document.querySelector(".btn-next-match");
const btnNewGame = document.querySelector('.btn-new-game'); 

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
  playerOneResultContainer.style.animationDuration = "1s";
  playerTwoResultContainer.style.animation = "bounceInRight";
  playerTwoResultContainer.style.animationDuration = "1s";
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
  playerOnePaper.style.display = "none";
  playerOneScissors.style.display = "none";
  playerOneRock.style.width = "25em";
  playerOneRock.classList.add("rock-fight-animation");
  playerOneResultContainer.innerHTML = `<img src="./img/Pierre.png">`;
  // toPlayerTwoScreen();
});

playerOnePaper.addEventListener("click", pOneSetPaper);

function pOneSetPaper() {
  choicePlayerOne = playerOnePaper.value;
  playerOneScissors.style.display = "none";
  playerOneRock.style.display = "none";
  playerOnePaper.style.width = "25em";
  playerOnePaper.classList.add("paper-fight-animation");
  playerOneResultContainer.innerHTML = `<img src="./img/Feuille.png">`;
  // toPlayerTwoScreen();
}

playerOneScissors.addEventListener("click", function () {
  choicePlayerOne = playerOneScissors.value;
  playerOnePaper.style.display = "none";
  playerOneRock.style.display = "none";
  playerOneScissors.style.width = "25em";
  playerOneScissors.classList.add("scissors-fight-animation");
  playerOneResultContainer.innerHTML = `<img src="./img/Ciseaux.png">`;
  // toPlayerTwoScreen();
});

// Game algorythm player's two choice

playerTwoRock.addEventListener("click", function () {
  choicePlayerTwo = playerTwoRock.value;
  playerTwoPaper.style.display = "none";
  playerTwoScissors.style.display = "none";
  playerTwoRock.style.width = "25em";
  playerTwoRock.classList.add("rock-fight-animation");
  playerTwoResultContainer.innerHTML = `<img src="./img/PierreInvers.png">`;

  // toFightScreen();
  result();
  imgend();
});

playerTwoPaper.addEventListener("click", function () {
  choicePlayerTwo = playerTwoPaper.value;
  playerTwoRock.style.display = "none";
  playerTwoScissors.style.display = "none";
  playerTwoPaper.style.width = "25em";
  playerTwoPaper.classList.add("paper-fight-animation");
  playerTwoResultContainer.innerHTML = `<img src="./img/FeuilleInvers.png">`;
  // toFightScreen();
  result();
  imgend();
});

playerTwoScissors.addEventListener("click", function () {
  choicePlayerTwo = playerTwoScissors.value;
  playerTwoRock.style.display = "none";
  playerTwoPaper.style.display = "none";
  playerTwoScissors.style.width = "25em";
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
    textResult.innerHTML = "None of you win !";
  } else if (
    (choicePlayerOne === "rock" && choicePlayerTwo === "scissors") ||
    (choicePlayerOne === "paper" && choicePlayerTwo === "rock") ||
    (choicePlayerOne === "scissors" && choicePlayerTwo === "paper")
  ) {
    textResult.innerHTML = "Player 1 wins";
    scorePlayerOne++;
    scorePlayerOneText.innerHTML = `Player 1 : ${scorePlayerOne}`;
    scorePlayerTwoText.innerHTML = `Player 2 : ${scorePlayerTwo}`;
  } else {
    textResult.innerHTML = "Player 2 wins";
    scorePlayerTwo++;
    scorePlayerOneText.innerHTML = `Player 1 : ${scorePlayerOne}`;
    scorePlayerTwoText.innerHTML = `Player 2 : ${scorePlayerTwo}`;
  }
}

// Code for img result asset

function imgend() {
  if (
    (choicePlayerOne == "rock" && choicePlayerTwo == "paper") ||
    (choicePlayerOne == "paper" && choicePlayerTwo == "rock")
  ) {
    resultimg.setAttribute("src", "./img/imgFight/PierreEnd2.png");
    resultimg.setAttribute("alt", "Rock Wrapp by paper");
  } else if (
    (choicePlayerOne == "rock" && choicePlayerTwo == "scissors") ||
    (choicePlayerTwo == "rock" && choicePlayerOne == "scissors")
  ) {
    resultimg.setAttribute("src", "./img/imgFight/CiseauxEnd.png");
    resultimg.setAttribute("alt", "Scissors smash by a rock");
  } else if (
    (choicePlayerOne == "paper" && choicePlayerTwo == "scissors") ||
    (choicePlayerTwo == "paper" && choicePlayerOne == "scissors")
  ) {
    resultimg.setAttribute("src", "./img/imgFight/FeuilleEnd.png");
    resultimg.setAttribute("alt", "Paper cut in two pieces");
  } else {
    resultimg.setAttribute("src", "./img/loi.png")
    resultimg.setAttribute("alt", " ");
  }
}

// Reset the game for the next match and logic if player wins 3 times. 

btnToNextMatch.addEventListener("click", function () {

  if (scorePlayerOne >= 3) {
    congratulationScreen.style.display = "flex";
    resultScreen.style.display = "none";
    welcomeScreen.style.display = "none"; 
    textCongratulation.innerHTML = "Congratulation Player 1 you win this game !"

  } else if (scorePlayerTwo >= 3) {
    textCongratulation.innerHTML = "Congratulation Player 2 you win this game !"
    congratulationScreen.style.display = "flex";
    resultScreen.style.display = "none";
    welcomeScreen.style.display = "none"; 
  }else {
  toNextMatchOne();
  toNextMatchTwo();
  textResult.innerHTML = "";
}
});

// reset game function 

function toNextMatchOne() {
  if (choicePlayerOne == "paper") {
    choicePlayerOne = "";
    playerOneScissors.style.display = "flex";
    playerOneRock.style.display = "flex";
    playerOnePaper.style.width = "";
    playerOnePaper.classList.remove("paper-fight-animation");
    playerOneResultContainer.innerHTML = "";
    playOne.style.display = "flex";
    resultScreen.style.display = "none";
  } else if (choicePlayerOne == "rock") {
    choicePlayerOne = "";
    playerOnePaper.style.display = "flex";
    playerOneScissors.style.display = "flex";
    playerOneRock.style.width = "";
    playerOneRock.classList.remove("rock-fight-animation");
    playerOneResultContainer.innerHTML = "";
    playOne.style.display = "flex";
    resultScreen.style.display = "none";
  } else if (choicePlayerOne == "scissors") {
    choicePlayerOne = "";
    playerOnePaper.style.display = "flex";
    playerOneRock.style.display = "flex";
    playerOneScissors.style.width = "";
    playerOneScissors.classList.remove("scissors-fight-animation");
    playerOneResultContainer.innerHTML = "";
    playOne.style.display = "flex";
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
    playOne.style.display = "flex";
    resultScreen.style.display = "none";
  } else if (choicePlayerTwo == "rock") {
    choicePlayerTwo = "";
    playerTwoPaper.style.display = "block";
    playerTwoScissors.style.display = "block";
    playerTwoRock.style.width = "";
    playerTwoRock.classList.remove("rock-fight-animation");
    playerTwoResultContainer.innerHTML = "";
    playOne.style.display = "flex";
    resultScreen.style.display = "none";
  } else if (choicePlayerTwo == "scissors") {
    choicePlayerTwo = "";
    playerTwoPaper.style.display = "block";
    playerTwoRock.style.display = "block";
    playerTwoScissors.style.width = "";
    playerTwoScissors.classList.remove("scissors-fight-animation");
    playerTwoResultContainer.innerHTML = "";
    playOne.style.display = "flex";
    resultScreen.style.display = "none";
  }
}


btnNewGame.addEventListener('click', function () {
  toNextMatchOne();
  toNextMatchTwo();
  textResult.innerHTML = "";
  scorePlayerOne = 0;
  scorePlayerTwo = 0;
  congratulationScreen.style.display = "none"; 
  welcomeScreen.style.display = "flex"; 
})