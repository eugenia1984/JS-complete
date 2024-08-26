/**
 * 
 * @param {HTMLDivElement} element 
 */
export const secondGeneratorFunctionComponent = ( element) => {
  const genId = idGenerator();
  
  const button = document.createElement('button');
  button.innerText = 'Click me';
  element.append(button);

  const renderButton = () => {
    const { value } = genId.next(); 
    button.innerText = `Click ${value}`;
  }

  // button.addEventListener('click', (event) => renderButton());
  // Como no espera parametro puedo solo nombrar la funcion
  button.addEventListener('click', renderButton);
}

function* idGenerator() {
  let currentId = 0;

  while(true) {
    yield ++currentId;
  }
}