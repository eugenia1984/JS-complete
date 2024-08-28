
import "./render-app-button.css";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderAppButton = ( element ) => {
  // Create HTML button
  const fabButton = document.createElement('button');
  fabButton.innerText = '+';
  fabButton.classList.add('fab-button');

  // Add button
  element.append( fabButton);

  // EventListener
  fabButton.addEventListener('click', () => {
    throw Error('Not implemented yet')
  })
}