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

const deletedHero = heroes.toSpliced(0,1, 'Probando');

console.table(heroes);
console.table(heroesCopy);
console.table(sortedHeroes);
console.table(reversedHeroes);
console.table( deletedHero);