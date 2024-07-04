/**
 * 2C = 2 of Clubs
 * 2D = 2 of Diamonds
 * 2H = 2 of Heart
 * 2S = 2 of Spades
 */
let deck = [];
const types = ["C", "D", "H", "S"];
const specials = ["A", "J", "Q", "K"];

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
  console.log(deck);
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
cardValue("KD");

console.log(cardValue(askForOneCard()))
