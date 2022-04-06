# Curso de LinkedIn Learning de Jorge González Villanueva : JavaScript: TDD y pruebas unitarias esencial

---

## Inicio

**Testing en JavaScript**

Tenemos una interfaz que debe realizar las tareas programadas en el código, por otro lado APIS que transmiten información y por otro necesitamos testear el código para que no genere errores, envíe la información y se ejecute correctamente.

Tenemos tres áreas:

- **Tests unitarios**: los que más se utilizan. Son unidades, se prueban funciones, los envíos de los parámetros que se envían y qué tipos de datos devuelven.

- **Test funcionales** : trabajan sobre las funcionalidades, sobre la interfaz, se empieza a utilizar cuando el proyecto está más desarrollado. Veo los elementos interactivos y las tareas que realizan. Es similar a cuando el usuario lo prueba, pero se hacen pruebas automáticas.

- **Test de integración** : a las APIs, se ven los end points, que se devuelven los valores correctos, es para NodeJs, el JavaScript basado del lado del servidor.

---

## :star: 1 - El apasionado mundo del unit testing


### Unit testing

¿Por qué es necesario el unit testing?

Puedo tener funciones que se relacionen entre sí. Entonces programo test por cada una de las funciones que voy creando, para no tener errores. Compruebo que tipo de valores devuelve, qué tipos de valores recibe.

Y a medida que voy haciendo cambios en el código, puede ser que los test me avisen si esos cambios afectan al código que ya tenía.

Me protege de los errores que se producen al introducir nuevo código.



### BDD testing

Test Funcionales

Se crean cuando ya hay una interfaz, y se comprueba si la funcionalidad es la correcta.

Hay que definir:

- *feature*, una funcionalidad 

- *scenario*,  el escenario, en que estado está la aplicación

- *given*, las acciones de interacción del usuario (qué va a hacer)

- *when*, los valores iniciales, 

- *then*, qué queremos que ocurra una vez que el usuario hace dicha acción.

Se utilizan distintan bibliotecas, vamos a tener:

- *fixture.page*, por ejemplo en qué URL vamos a estar.

- *test.selector*, sobre qué selector actuará el usuario, que interacción se hace.

- *test.expected*, la interacción en concreta que se hace y qué cambios se experimentan.


Se puede progrmaar con Python o con JavaScript. Hay que elegir la librería con la que se esté más a gusto.



### El testing integrado en el flujo de trabajo

Por medio de TDD (Test Driven Development), es un bucle donde se crea el test, se crea el contenido de la función y se vuelve a hacer modificaciones.

**test falla** -> Al agregar una nueva funcionalidad, debemos saber exactamente qué debe hacer dicha funcionalidad. 

**test funciona** -> Al hacer el test nos vemos obligados a saber qué hace esa funcionalidad, por eso creamos el test, que va a fallar porque la función estará vacía. 

**refactorización** -> Pero al añadir el código de la función el test va a funcionar. Luego vamos a seguir refactorizando el codigo.

```
    nueva     ->  nuevo  -> modificación  -> automatizador  ->  run  -> despliegue 
funcionalidad     test      del código       de tareas          test    del código
```

Así voy a tener todo testeado

Voy a ser más conciente de cada función agregada

Puedo automatizar las tareas para no tener que hacer todos los test manualmente, dependiendo del framework en el que trabaje, y el gusto.


### Software utilizado en el curso


**NodeJS**

- en nodejs.org bajar y descargar

- con ```node --version```compruebo por terminal que se instaló correctamente Node

- con ```npm --version```compruebo por terminal que se instaló correctamente npm

**XAMPP** , **MAMP** , **NAMO**, el que quieras porque se va a trabajar en una base de datos con MySQL. De tener un error ver en que puerto se está trabajando, abriendo localhost se sabe en que puerto se estará trabajando.

**VSC** para editar código, asi se puede utilizar la terminal desde el proyecto.



### Descripción de los archivos base del curso

Hay dos archivos .zip:

- Archivos iniciales: tiene una carpeta *TODO* y un archivo *todo.sql* (la base de datos a utlizar en el proyecto)

- archivos finales, van a ser los archivos de referencia, como debería terminar todo

### Configuración del entorno local para el curso

### Descripción de la aplicación

---

## :star: 2 - Principios de unit testing

### Bibliotecas de unit testing en JavaScript

### Aserciones con Chai o Assert

### Instalación de MOcha y Chai en el proyecto

### Creación de bloques de pruebas con Describe

### Creación de pruebas unitarias con It

### Ejecución de Tests

### Añadiendo varios test sobre una función

### Test sobre URL 

### Código asincrónico en los test

### Ejecución exclusiva de tests

---

## :star: 3 - Categorías de aserciones

- Uso de compraciones

- Comparando por tipos de datos

- Trabajando con arrays

- Uso de objetos y clases

- Trabajando con errores

---

## :star: 4 - Creación de test complejos

### Uso de código compartido por diferentes tests

### Uso de hooks

### Creación de contenidos

### Reseteo de la base de datos

### Utilización del parámetro watch

---

## :star: 5 - Implementación de unit tests y diferentes frameworks

### El unit testing en Angular

### Aplicando unit testing en React

### Uso de unit testing en aplicaciones híbridas

---

