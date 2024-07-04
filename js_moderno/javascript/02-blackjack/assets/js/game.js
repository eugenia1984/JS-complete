/**
 * 2C = 2 of Clubs
 * 2D = 2 of Diamonds
 * 2H = 2 of Heart
 * 2S = 2 of Spades
 */
let deck = [];
const types = ["C", "D", "H", "S"];
const specials = ["A", "J", "Q", "K"];

let pointsPlayer = 0;
let pointsComputer = 0;

// HTML References
const btnAsk = document.querySelector('#btnAsk');
const btnNew = document.querySelector('#btnNew');
const btnStop = document.querySelector('#btnStop');

const pointsHTML = document.querySelectorAll('small');

const divPlayerCards = document.querySelector('#player-cards');
const divComputerCards = document.querySelector('#computer-cards');

// Create a new Deck
const createDeck = () => {
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

  deck = _.shuffle(deck);

  return deck;
};

// Take one card
const askForOneCard = () => {
  if (deck.length === 0) {
    throw "No cards in deck";
  }

  const card = deck.pop();

  return card;
};

const cardValue = (card) => {
  const value = card.substring(0, card.length - 1);

  return isNaN(value) ? (value === "A" ? 11 : 10) : Number(value);
};

createDeck();

/***** Events ****/ 
const computerTime = (minimumPoints) => {
  do {
  const card = askForOneCard();

  pointsComputer = pointsComputer + cardValue(card);
  pointsHTML[1].innerText = pointsComputer;

  const imgCard = document.createElement('img');
  imgCard.src = `assets/cartas/${card}.png`;
  imgCard.classList.add('game-card');
  divComputerCards.append(imgCard );  

  if(minimumPoints > 21) {
    break;
  }

  } while( (pointsComputer < minimumPoints) && (minimumPoints <= 21) );
}

btnAsk.addEventListener('click', () => {
  const card = askForOneCard();

  pointsPlayer = pointsPlayer + cardValue(card);
  pointsHTML[0].innerText = pointsPlayer;

  const imgCard = document.createElement('img');
  imgCard.src = `assets/cartas/${card}.png`;
  imgCard.classList.add('game-card');
  divPlayerCards.append(imgCard );  

  if(pointsPlayer > 21) {
    console.warn('You lost');
    btnAsk.disabled = true;
    computerTime(pointsPlayer);
  } else if (pointsPlayer === 21) {
    console.warn('*** 21 points ***')
  }
})


