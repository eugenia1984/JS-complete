# Proyecto: 08-es-next

Para ver algunas de las nuevas características de JavaScript

---

Un **array**, al no ser primitivo, es un **objeto** por lo que pasa por referencia.

Si hacemos una copia de un array usando el **spreed operator** y cambiamos algún dato en la copia, tambien se cambia en el original. Esto sucede porque el array tiene de elementos objetos, los cuales va a ser pasados por referencia.

En este caso es que se usa el map para poder ir pasando por cada objeto y luego se lo retorna, asi se crea una copia, sin referencia al original. Pero igualmente si como algún value del objeto volvemos a tener otro que no es primitvo, deberia hacer lo mismo.

En el unico modo que el spred operator funciona es cuando solo tengo valores primitivos, asi al modificar la copia no modifico el original.

Otra nueva opción: **STRUCTURE CLONE**, al que le pasamos como parametro que necesitamos hacer copia.


---

## Método with()

Ayuda a crear un nuevo objeto y a la vez hacer una modificación al mismo. REgresa un nuevo arreglo, peor con la referencia de todos sus objetos.

```JavaScript
const newStateWith = state.with(index, {
  ...state.at(index),
  name: newName
});
```

---

## Método to

```JavaScript
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

heroes.sort();

console.table(heroes);
console.table(heroesCopy);
```

En este caso el sort me va a ordenar tanto a `heroes`como a `heroesCopy`, se modifica el arreglo original y su referencia.

- Hay métodos nuevos que comienzan con `.to...`:

`.toSorted()` -> copia la version del arreglo original, pero regresa un nuevo arreglo con los elementos ordenados de manera ascendente por defecto. No modifica el array original.


`.toReversed()` -> revierte el .toSorted(), como antes se usaba el `.sort()` lo ordena y tenemos el `reverse()` que revierte, pero asi antes se cambiaba el arreglo original.

`.splice()`, muta el arreglo original. Ahora tenemos el `.toSpliced()`.

---