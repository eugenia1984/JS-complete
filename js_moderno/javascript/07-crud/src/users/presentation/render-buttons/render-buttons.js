import  usersStore  from "../../store/users-store";
import "./render-buttons.css";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = ( element ) => {
  // HTML reference
  const nextButton = document.createElement('button');
  nextButton.innerText = ' Next >';

  const prevButton = document.createElement('button');
  prevButton.innerText = '< Prev ';

  const currentPageLabel = document.createElement('span');
  currentPageLabel.id = 'current-page';
  currentPageLabel.innerText = usersStore.getCurrentPage();

  // Add to element
  element.append(prevButton, currentPageLabel, nextButton);

}