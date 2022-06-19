let p = fetch('https://codigofacilito.com/articulos');

p.then(function(resultado) {
  console.log('Ya termine');
  console.log(resultado);
});

p.catch(function(err) {
  console.log('Peticion asincrona fallada');
  console.log(err); // para saber que error tengo
});

p.finally(function(d) {
  console.log('Termine');
});