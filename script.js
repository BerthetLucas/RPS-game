// DOM elements

const welcomeScreen = document.querySelector(".welcome-modale");
const btnStartGame = document.querySelector(".btn-start-game");
const playOne = document.querySelector(".j1-modale");
const playTwo = document.querySelector(".j2-modale");

const btnPlayerOne = document.querySelector(".btn-j1");
const btnPlayerTwo = document.querySelector(".btn-j2");

// Players choices DOM element
const playOneRock = document.querySelector(".j1-rock");
const playOnePaper = document.querySelector(".j1-paper");
const playOneScissors = document.querySelector(".j1-scissors");

const playTwoRock = document.querySelector(".j2-rock");
const playTwoPaper = document.querySelector(".j2-paper");
const playTwoScissors = document.querySelector(".j2-scissors");

// Welcome screen

btnStartGame.addEventListener("click", toPlayerOneScreen);
playOne.addEventListener("click",playerOneChoice); 


function playOneChoice () {
    
}



function toPlayerOneScreen() {
  welcomeScreen.style.display = "none";
  playOne.style.display = "block";
}

// Player one screen

btnPlayerOne.addEventListener("click", toPlayerTwoScreen);

function toPlayerTwoScreen() {
  playOne.style.display = "none";
  playTwo.style.display = "block";
}

// Player two screen
