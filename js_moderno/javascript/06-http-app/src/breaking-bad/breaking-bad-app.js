/**
 * @returns { Promise<Object> } // quote information
 */
const fetchQuote = async () => {
  // const res = await fetch('https://www.breakingbadapi.com/api/quote/random');
  const res = await fetch("https://breakingbadapi.com/api/quote/random" , { mode: 'no-cors' });
  const data = await res.json();

  console.log(data);

  return data[0];
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingBadApp = async (element) => {
  document.querySelector("#app-title").innerHTML = "BreakingBad App";
  element.innerHTML = "Loading . . .";
  // await fetchQuote();
  
  // HTML element reference
  const quoteLabel = document.createElement('blockquote');
  const authorLabel = document.createElement('h3');
  const nextQuoteButton = document.createElement('button');
  nextQuoteButton.innerText = 'Next quote';

  const renderQuote = ( data ) => {
    quoteLabel.innerHTML = data.quote;
    authLabel.innerHTML = data.author;
    element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
  }

    // Add Listener
    nextQuoteButton.addEventListener('click', async() => {
      element.innerHTML = 'Loading...';
      const quote = await fetchQuote();
      renderQuote( quote );
  })

  // fetchQuote()
  //   .then( data => renderQuote(data))
  fetchQuote()
    .then( renderQuote );
};
