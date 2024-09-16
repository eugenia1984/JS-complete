const superHeroes = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
  },
  {
    id: 3,
    name: "Flash",
  },
  {
    id: 4,
    name: "Aquaman",
  },
];

const superHeroesCopy = [...superHeroes];
superHeroesCopy[0].name = "Green Lanter";

const superHeroesCopy2 = [...superHeroes.map(hero => ({...hero}))];

const superHeroesCopy3 = structuredClone(superHeroes);

console.table(superHeroes);
console.table(superHeroesCopy);
console.table(superHeroesCopy2);
console.table(superHeroesCopy3);
