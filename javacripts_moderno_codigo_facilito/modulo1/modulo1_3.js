let objeto = {
  numeros: [1, 2, 3],
  imprimir: function() {
    console.log(this); // el OBJETO
    this.numeros.forEach( function() {
      console.log(this); // el objeto WINDOW
    })
  }
}

objeto.imprimir(); // el objeto