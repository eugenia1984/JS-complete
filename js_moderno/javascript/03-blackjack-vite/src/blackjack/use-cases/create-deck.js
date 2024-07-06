import _ from "underscore";

/**
 * This function create a new deck
 * @param {Array<String>} typesOfCards Example: ["C", "D", "H", "S"]
 * @param {Array<String>} specialsTypes Example: ["A", "J", "Q", "K"]
 * @returns {Array<String>} return a new deck of cards
 */
export const createDeck = (typesOfCards, specialsTypes) => {
  if (!typesOfCards || typesOfCards.length === 0) throw new Error("typesOfCards is required, must be an array of string.");
  if (!specialsTypes || typesOfCards.length === 0) throw new Error("specialsTypes is required, must be an array of string.");

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let type of typesOfCards) {
      deck.push(i + type);
    }
  }

  for (let type of typesOfCards) {
    for (let special of specialsTypes) {
      deck.push(special + type);
    }
  }

  deck = _.shuffle(deck);

  return deck;
};
