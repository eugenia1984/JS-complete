const state = [
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

const index = 1;
const newName = 'Green Lantern';

/*
A pesar que el .map() devuelve un nuevo arreglo,
no regresa una nueva referencia a los objetos internos
*/
const newState = state.map( (hero, i) => {

  if( i === index) {
    hero.name = newName;
  }

  // Antes se hacia el ... para romper la referencia
  return {...hero};
});

state[0].name = 'Black volcano';

console.table(newState);

const newStateWith = state.with(index, {
  ...state.at(index),
  name: newName
});

console.table(newStateWith);