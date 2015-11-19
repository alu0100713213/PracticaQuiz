var respuesta_req = require('./respuesta_model.js');

function Pregunta(pregunta,respuesta){
	var resp = new Respuesta(pregunta);
	this.checkResponse = function(respuesta){
		//console.log("Pregunta: = " + respuesta);
		return resp.checkResponse(respuesta);
	}
	this.getPregunta = function(){
		return pregunta;
	}
	this.getRespuesta = function(){
		return respuesta
	}
}

function PreguntaCorta(pregunta, respuesta){
	var resp = new Respuesta(pregunta);
	
module.exports = Pregunta;
