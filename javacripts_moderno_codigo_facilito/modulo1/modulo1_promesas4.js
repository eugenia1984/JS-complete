let p = fetch('https://api.github.com/users/codigofacilito');

p.then(function(resultado) {
  console.log('Ya termine');
  resultado.json().then(function(json) {  // .json() -> para convertir la informacion en formato json, es asincrona y retorna promesa
    console.log(json);
  }) 
});
