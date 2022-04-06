const objetoMap = new Map();
		objetoMap.set('un string', 'valor asociado a un string');
		objetoMap.set({}, 'valor asociado a un objeto');
		objetoMap.set(12, 'valor asociado a un número');

		for(key of objetoMap){
			console.log(key)
		}

		for([key, value] of objetoMap){
			console.log(value)
		}

		/*const objetoWeakMap = new WeakMap();
		objetoWeakMap.set('un string', 'valor asociado a un string');
		objetoWeakMap.set({}, 'valor asociado a un objeto');*/