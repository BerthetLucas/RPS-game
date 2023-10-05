// DOM elements

const welcomeScreen = document.querySelector(".welcome-modale");
const btnStartGame = document.querySelector(".btn-start-game");
const playOne = document.querySelector(".j1-modale");
const playTwo = document.querySelector(".j2-modale");

const btnPlayerOne = document.querySelector(".btn-j1");
const btnPlayerTwo = document.querySelector(".btn-j2");
const gameScreen = document.querySelector(".game-modale");
const resultScreen = document.querySelector(".result-modale");
const btnToResult = document.querySelector(".btn-result");

// Players choices DOM element
const playerOneRock = document.querySelector(".j1-rock");
const playerOnePaper = document.querySelector(".j1-paper");
const playerOneScissors = document.querySelector(".j1-scissors");

const playerTwoRock = document.querySelector(".j2-rock");
const playerTwoPaper = document.querySelector(".j2-paper");
const playerTwoScissors = document.querySelector(".j2-scissors");

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
}

// Game screen to result screen

btnToResult.addEventListener("click", toResultScreen);

function toResultScreen() {
  gameScreen.style.display = "none";
  resultScreen.style.display = "flex";
}

// Game algorythm player's one choice

// Piste de débug Utiliser une fonction générale sur le choix du joueur, cette fonction doit retourner une promesse afin de pouvoir exploiter la valeur du choix en dehors de la fonction

let choicePlayerOne = "";

playerOneRock.addEventListener("click", function () {
  choicePlayerOne = playerOneRock.value;

  console.log(choicePlayerOne);
  playerOnePaper.style.display = "none"; 
  playerOneScissors.style.display = "none";  
  playerOneRock.style.width ="25em"; 
  playerOneRock.style.animation = "backOutRight";
  playerOneRock.style.animationDuration = "4s"; 
  playerOneRock.style.width =""; 
  // toPlayerTwoScreen();
});

playerOnePaper.addEventListener("click", function () {
  choicePlayerOne = playerOnePaper.value;
  console.log(choicePlayerOne);
  playerOneScissors.style.display = "none"; 
  playerOneRock.style.display = "none";   
  playerOnePaper.style.width ="25em"; 
  playerOnePaper.style.animation = "fadeOutUp";
  playerOnePaper.style.animationDuration = "4s"; 
  playerOnePaper.style.width =""; 
  // toPlayerTwoScreen();
});

playerOneScissors.addEventListener("click", function () {
  choicePlayerOne = playerOneScissors.value;
  console.log(choicePlayerOne);
  playerOnePaper.style.display = "none"; 
  playerOneRock.style.display = "none";  
  playerOneScissors.style.width ="25em"; 
  playerOneScissors.style.animation = "rotateOutUpLeft";
  playerOneScissors.style.animationDuration = "4s"; 
  playerOneScissors.style.width =""; 
  // toPlayerTwoScreen();
});

// Game algorythm player's two choice

let choicePlayerTwo = "";

playerTwoRock.addEventListener("click", function () {
  choicePlayerTwo = playerTwoRock.value;
  console.log(choicePlayerTwo);
  playerTwoPaper.style.display = "none"; 
  playerTwoScissors.style.display = "none";
  // toFightScreen();
  result();
});

playerTwoPaper.addEventListener("click", function () {
  choicePlayerTwo = playerTwoPaper.value;
  console.log(choicePlayerTwo);
  playerTwoRock.style.display = "none"; 
  playerTwoScissors.style.display = "none";

  // toFightScreen();
  result();
});

playerTwoScissors.addEventListener("click", function () {
  choicePlayerTwo = playerTwoScissors.value;
  console.log(choicePlayerTwo);
  playerTwoRock.style.display = "none"; 
  playerTwoPaper.style.display = "none";
  // toFightScreen();
  result();
});

// Game code for result

function result() {
  if (choicePlayerOne === choicePlayerTwo) {
    const egality = document.createElement("h2");
    egality.innerHTML = "None of you win !";
    resultScreen.appendChild(egality);
  } else if (
    (choicePlayerOne === "rock" && choicePlayerTwo == "scissors") ||
    (choicePlayerOne === "paper" && choicePlayerTwo == "rock") ||
    (choicePlayerOne === "scissors" && choicePlayerTwo == "paper")
  ) {
    const victory = document.createElement("h2");
    victory.innerHTML = "Player 1 wins";
    resultScreen.appendChild(victory);
  } else {
    const victory = document.createElement("h2");
    victory.innerHTML = "Player 2 wins";
    resultScreen.appendChild(victory);
  }
}
