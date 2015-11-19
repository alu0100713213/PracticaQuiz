function Respuesta(entrada){
	if(typeof(entrada) == "string")
	{
		return function(x) { 
			return x === entrada; 
		};
	}
	else if(typeof(entrada) == "number")
	{
		return function(x) { 
			return x === entrada; 
		};
	}
	else if(entrada instanceof RegExp)
	{
		return function(x) { 
			return x.match(entrada); 
		};	
	}
	else if(entrada && entrada.constructor && entrada.call && entrada.apply)
	{
		return entrada;
	}
	else
	{
		return typeof entrada != 'undefined';
	}
}

module.exports = Respuesta;
