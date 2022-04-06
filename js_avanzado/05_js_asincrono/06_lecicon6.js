
		function primerProceso(){
			return new Promise((resolve, reject)=>{
				setTimeout(resolve, 2000, 'primer valor');
			});
		}

		function segundoProceso(){
			return new Promise((resolve, reject)=>{
				setTimeout(resolve, 1000, 'segundo valor');
			});
		}

		function tercerProceso(){
			return new Promise((resolve, reject)=>{
				setTimeout(resolve, 1000, 'tercer valor');
			});
		}

		async function llamaTodas(){

			let primerValor = await primerProceso();
			let segundoValor = await segundoProceso();
			let tercerValor = await tercerProceso();

			console.log(primerValor, segundoValor, tercerValor);
		}

		llamaTodas();
