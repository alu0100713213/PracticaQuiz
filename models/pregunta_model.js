var respuesta_req = require('./respuesta_model.js');

function Pregunta(pregunta,respuesta){
	var resp = new Respuesta(respuesta);
	this.checkResponse = function(res){
		console.log("Pregunta > checkResponse > res = " + res);
		return resp.checkResponse(respuesta);
	}
	this.getPregunta = function(){
		return pregunta;
	}
	this.getRespuesta = function(){
		return respuesta
	}
}

module.exports = Pregunta;
