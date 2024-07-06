import _ from "underscore";
import "./style.css";

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

// Start a new game
const startGame = (numberPlayers = 2) => {
  deck = createDeck();

  pointsPlayers = [];
  for (let i = 0; i < numberPlayers; i++) {
    pointsPlayers.push(0);
  }

  pointsHTML.forEach((el) => (el.innerText = 0));
  divCardsPlayers.forEach((el) => (el.innerText = ""));

  btnAsk.disabled = false;
  btnStop.disabled = false;
};

// Create a new Deck
const createDeck = () => {
  deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let type of types) {
      deck.push(i + type);
    }
  }

  for (let type of types) {
    for (let special of specials) {
      deck.push(special + type);
    }
  }

  return _.shuffle(deck);
};

// Take one card
const askForOneCard = () => {
  if (deck.length === 0) {
    throw "No cards in deck";
  }

  return deck.pop();
};

const cardValue = (card) => {
  const value = card.substring(0, card.length - 1);

  return isNaN(value) ? (value === "A" ? 11 : 10) : Number(value);
};

// Shift: 0 = first player and the last one will be the computer
const accumulatePoints = (card, shift) => {
  pointsPlayers[shift] = pointsPlayers[shift] + cardValue(card);
  pointsHTML[shift].innerText = pointsPlayers[shift];

  return pointsPlayers[shift];
};

const createCard = (card, shift) => {
  const imgCard = document.createElement("img");
  imgCard.src = `/cartas/${card}.png`;
  imgCard.classList.add("game-card");
  divCardsPlayers[shift].append(imgCard);
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
    const card = askForOneCard();
    pointsComputer = accumulatePoints(card, pointsPlayers.length - 1);
    createCard(card, pointsPlayers.length - 1);
  } while (pointsComputer < minimumPoints && minimumPoints <= 21);

  discoverWinner();
};

/***** Events ****/
btnNew.addEventListener("click", () => {
  startGame();
})

btnAsk.addEventListener("click", () => {
  const card = askForOneCard();
  const pointsPlayer = accumulatePoints(card, 0);

  createCard(card, 0);

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

