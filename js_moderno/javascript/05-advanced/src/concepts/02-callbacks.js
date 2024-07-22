import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
  const id = "5d86371f1efebc31def272e2";
  findHero(id, (error,hero) => {
    element.innerHTML = hero?.name || "No hero found";

    if(error) {
      element.innerHTML = error;
      return;
    }
  });
};

/**
 *
 * @param {String} id
 * @param {(error: String | null, hero: Object) => void} callback
 */
const findHero = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id);

  if(!hero) {
    callback(`Hero with id: ${id} not found`);
    return; // undefined
  }

  callback(null, hero);
};
