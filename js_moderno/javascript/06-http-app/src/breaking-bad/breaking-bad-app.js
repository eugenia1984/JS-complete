/**
 * @returns { Promise<Object> } // quote information
 */
const fetchQuote = async () => {
  const res = await fetch("https://breakingbadapi.com/api/quote/random" , { mode: 'no-cors' });
  const data = res.json();

  return data[0];
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingBadApp = async (element) => {
  document.querySelector("#app-title").innerHTML = "BreakingBad App";

  element.innerHTML = "Loading . . .";

  const quote = await fetchQuote();

  element.innerHTML = 'Data searched'
};
