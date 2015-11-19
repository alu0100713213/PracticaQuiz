function Respuesta(entrada){
		if(typeof(entrada) == "string")
			return entrada === 'string';
		else if(typeof(entrada) == "number")
			return entrada === 'number'
		else if(respuesta.constructor.name == "RegExp"){
			if(entrada.exec(r))
				return true;
			else
				return false;
		}
		else if(typeof(entrada) == "function"){
			return entrada;
		}
}

module.exports = Respuesta;
