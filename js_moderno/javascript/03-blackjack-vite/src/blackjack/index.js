import _ from "underscore";
import {
  cardValue,
  askForOneCard,
  createNewDeck,
  createCard,
} from "./use-cases";

let deck = [],
  pointsPlayers = [];
const types = ["C", "D", "H", "S"],
  specials = ["A", "J", "Q", "K"];

// HTML References
const btnAsk = document.querySelector("#btnAsk"),
  btnNew = document.querySelector("#btnNew"),
  btnStop = document.querySelector("#btnStop"),
  pointsHTML = document.querySelectorAll("small"),
  divCardsPlayers = document.querySelectorAll(".divCards");

// Create a new Deck
deck = createNewDeck(types, specials);

// Start a new game
const startGame = (numberPlayers = 2) => {
  deck = createNewDeck(types, specials);

  pointsPlayers = [];
  for (let i = 0; i < numberPlayers; i++) {
    pointsPlayers.push(0);
  }

  pointsHTML.forEach((el) => (el.innerText = 0));
  divCardsPlayers.forEach((el) => (el.innerText = ""));

  btnAsk.disabled = false;
  btnStop.disabled = false;
};

// Shift: 0 = first player and the last one will be the computer
const accumulatePoints = (card, shift) => {
  pointsPlayers[shift] = pointsPlayers[shift] + cardValue(card);
  pointsHTML[shift].innerText = pointsPlayers[shift];

  return pointsPlayers[shift];
};

const discoverWinner = () => {
  const [minimumPoints, pointsComputer] = pointsPlayers;

  setTimeout(() => {
    if (pointsComputer === minimumPoints) {
      alert("Nobody wins");
    } else if (minimumPoints > 21) {
      alert("Computer wins");
    } else if (pointsComputer > 21) {
      alert("Player wins");
    } else {
      alert("Computer wins");
    }
  }, 90);
};

const computerTime = (minimumPoints) => {
  let pointsComputer = 0;

  do {
    const card = askForOneCard(deck);
    pointsComputer = accumulatePoints(card, pointsPlayers.length - 1);
    createCard(card, pointsPlayers.length - 1, divCardsPlayers);
  } while (pointsComputer < minimumPoints && minimumPoints <= 21);

  discoverWinner();
};

/***** Events ****/
btnNew.addEventListener("click", () => {
  startGame();
});

btnAsk.addEventListener("click", () => {
  const card = askForOneCard(deck);
  const pointsPlayer = accumulatePoints(card, 0);

  createCard(card, 0, divCardsPlayers);

  if (pointsPlayer > 21) {
    btnAsk.disabled = true;
    btnStop.disabled = true;
    computerTime(pointsPlayer);
  } else if (pointsPlayer === 21) {
    btnAsk.disabled = true;
    btnStop.disabled = true;
    computerTime(pointsPlayer);
  }
});

btnStop.addEventListener("click", () => {
  btnAsk.disabled = true;
  btnStop.disabled = true;

  computerTime(pointsPlayers[0]);
});
