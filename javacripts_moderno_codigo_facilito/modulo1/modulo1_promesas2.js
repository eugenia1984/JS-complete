let p = fetch('https://api.github.com/users/codigofacilito');

p.then(function(resultado) {
  console.log('Ya termine')
  console.log(resultado)
})