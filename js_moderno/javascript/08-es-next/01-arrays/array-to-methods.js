const heroes = [
  'Batman',
  'Superman',
  'Flash',
  'Aquaman'
];

const heroesCopy = [
  'Batman',
  'Superman',
  'Flash',
  'Aquaman'
];

// heroes.sort();
const sortedHeroes = heroes.toSorted();
const reversedHeroes = heroes.toReversed();

console.table(heroes);
console.table(heroesCopy);
console.table(sortedHeroes);
console.table(reversedHeroes)