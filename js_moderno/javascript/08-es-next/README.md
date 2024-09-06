# Proyecto: 08-es-next

Para ver algunas de las nuevas características de JavaScript

---

Un **array**, al no ser primitivo, es un **objeto** por lo que pasa por referencia.

Si hacemos una copia de un array usando el **spreed operator** y cambiamos algún dato en la copia, tambien se cambia en el original. Esto sucede porque el array tiene de elementos objetos, los cuales va a ser pasados por referencia.

En este caso es que se usa el map para poder ir pasando por cada objeto y luego se lo retorna, asi se crea una copia, sin referencia al original. Pero igualmente si como algún value del objeto volvemos a tener otro que no es primitvo, deberia hacer lo mismo.

En el unico modo que el spred operator funciona es cuando solo tengo valores primitivos, asi al modificar la copia no modifico el original.

Otra nueva opción: **STRUCTURE CLONE**, al que le pasamos como parametro que necesitamos hacer copia.


---