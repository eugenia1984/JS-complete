const primerProceso = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, 2);
});

async function llamarProceso(){
    let valor = await primerProceso;
    return valor * 2;
}

async function llamarFuncionAsincrona(){
    let resultado = await llamarProceso();
    return resultado * 2;
}

llamarFuncionAsincrona().then(resultadoFinal=>{
    console.log('Al final tenemos un 