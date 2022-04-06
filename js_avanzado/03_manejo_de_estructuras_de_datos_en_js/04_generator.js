function* generadorSaludo(){
    yield 'Hola!';
    yield 'Como estás?'
    yield 'Un gusto conocerte'
}

let saludo = generadorSaludo();
console.log(saludo.next().value);
console.log(saludo.next().value);
console.log(saludo.next().value);


function* generador(iteraciones){
     while(iteraciones >= 0)
        yield --iteraciones;
 }

 let iterador = generador(3);

 console.log(iterador.next());
 console.log(iterador.next());
 console.log(iterador.next());
 console.log(iterador.next());
 console.log(iterador.next());
 console.log(iterador.next());
 console.log(iterador.next());
 console.log(iterador.next());

 for (const val of generador(2)) {
  console.log(val);
}