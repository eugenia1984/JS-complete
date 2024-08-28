import modalHtml from "./render-modal.html?raw";
import "./render-modal.css";

let modal, form;

// TODO: Load user by id
export const showModal = () => {
  modal?.classList.remove('hide-modal');
}

export const hideModal = () => {
  modal?.classList.add('hide-modal');
  // TODO: reset form
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = ( element ) => {
  if( modal) return;

  // If there is no modal -> create
  modal = document.createElement('div');
  modal.innerHTML = modalHtml;
  // modal.classList.add();
  modal.className = 'modal-container hide-modal';

  // Form HTML reference
  form = modal.querySelector('form');

  // EventListener at form submit
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log('Form send');
  })

  // EventListener to closed modal if it's clicked
  modal.addEventListener('click', (event) => {
    if( event.target.className !== 'modal-container') return;

    hideModal();    
  })

  element.append(modal);
}