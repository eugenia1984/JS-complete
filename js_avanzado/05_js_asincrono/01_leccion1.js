/*fetch('algún destino remoto').then(respuesta=>{
			if (respuesta.ok) {
				console.log('todo salió bien');
			}else{
				throw Error(respuesta.statusText);
			}
		});*/

const promesa = new Promise((resolve, reject)=>{
    
    let allOk = false;

    if(allOk){
        resolve('todo salió bien')
    }else{
        reject(new Error('hubo algún error'));
    }
});

promesa.then(valor=>{
    console.log(valor);
}, error=>{
    console.log(error);
});
		