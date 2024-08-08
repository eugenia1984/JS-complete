import { heroes } from "../data/heroes";
/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwaitComponent = async (element) => {
  const id1 = "5d86371f233c9f2425f16916";
  const id2 = "5d86371f97c29d020f1e1f6d";

  try {
    const hero1 = await findHero(id1);
    const hero2 = await findHero(id2);

    element.innerHTML = `
    <h2>${hero1.name} <img src="${
      hero1.squarePic ? hero1.squarePic : hero1.picture
    }" width="80"/></h2>
    <h2>${hero2.name} <img src="${
      hero2.squarePic ? hero2.squarePic : hero2.picture
    }" width="80"/></h2>  
  `;
  } catch (error) {
    element.innerHTML = error;
  }
};

const findHero = async (id) => {
  const hero = heroes.find((hero) => hero.id === id);

  if (!hero) throw "Hero no found";

  return hero;
};
