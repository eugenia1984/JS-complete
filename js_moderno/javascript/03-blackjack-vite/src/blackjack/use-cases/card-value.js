/**
 * To get the value of the card
 * @param {String} card 
 * @returns {Number} the value of the card
 */
export const cardValue = (card) => {
  const value = card.substring(0, card.length - 1);

  return isNaN(value) ? (value === "A" ? 11 : 10) : Number(value);
};