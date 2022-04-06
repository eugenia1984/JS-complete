const target = function (nombre, apellido){
    console.log(`Mi nombre es ${nombre} ${apellido}`)
}

const handler = {
    apply: function( target, thisValue, args ) {
        console.log( `Se ha llamado la función ${target.name} con los parametros ${args}`);
        return target( ...args );
       }
}

const miProxy = new Proxy(target, handler);

miProxy('Natalia', 'Corea');

//

const DateProxied = new Proxy(Date, {
    construct(target, args){
        console.log( `Creamos un nuevo objeto Date`);
        return new target(...args)
    }
});
