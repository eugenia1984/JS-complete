import _ from "underscore";

export const createDeck = (typesOfCards, specialsTypes) => {
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
