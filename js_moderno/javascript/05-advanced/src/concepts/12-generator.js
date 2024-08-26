/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = ( element) => {
  console.log('generatorFunctionComponent');

  const myGenerator = myFirstGeneratorFunction();

  console.log(myGenerator.next()); // { "value": "First value", "done": false }
  console.log(myGenerator.next()); // { "value": "Second value", "done": false }
  console.log(myGenerator.next()); // { "value": "Third value", "done": false }
  console.log(myGenerator.next()); // { "value": "No value", "done": true }
  console.log(myGenerator.next()); // { "value": undefined, "done": true }
}

function* myFirstGeneratorFunction() {
  yield 'First value';
  yield 'Second value';
  yield 'Third value';

  return 'No values';
}