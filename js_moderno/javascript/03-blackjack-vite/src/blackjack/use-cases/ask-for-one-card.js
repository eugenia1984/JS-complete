/**
 * 
 * @param {Array<String>} deck a deck of cards
 * @returns {String} return one card of the deck
 */
export const askForOneCard = (deck) => {
  if ( !deck || deck.length === 0) {
    throw new Error ("No cards in deck");
  }

  return deck.pop();
};