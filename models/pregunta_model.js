//var respuesta_req = require('respuesta_model.js');

function Pregunta(args){
	this.args = args;
}

function PreguntaCorta(args){
	Pregunta.call(this,args);
}

function PreguntaLarga(args){
	Pregunta.call(this,args);
}

PreguntaCorta.prototype = new Pregunta;
PreguntaLarga.prototype = new Pregunta;

module.exports = Pregunta;
module.exports = PreguntaCorta;
module.exports = PreguntaLarga;
