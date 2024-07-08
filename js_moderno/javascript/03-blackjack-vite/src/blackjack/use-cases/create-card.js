/**
 * To create a card
 * @param {String} card 
 * @param {Number} shift - 0 or 1
 * @param { NodeListOf<Element> } divCardsPlayers
 */
export const createCard = (card, shift, divCardsPlayers) => {
  const imgCard = document.createElement("img");
  imgCard.src = `/assets/${card}.png`;
  imgCard.classList.add("game-card");
  divCardsPlayers[shift].append(imgCard);
};