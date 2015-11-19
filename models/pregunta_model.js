//var respuesta_req = require('respuesta_model.js');

function Pregunta(args){
	this.args = args;
}

function PreguntaCorta(args){
	Pregunta.call(this,args);
	this.view_1 = "<input type='text' name='PreguntaCorta' >" + this.args + "</input>";
}

function PreguntaLarga(args){
	Pregunta.call(this,args);
	this.view_2 = "<textarea name='PreguntaLarga' rows='4' cols='50' >" + this.args + "</textarea>";
}

PreguntaCorta.prototype = new Pregunta;
PreguntaLarga.prototype = new Pregunta;

module.exports = Pregunta;
module.exports = PreguntaCorta;
module.exports = PreguntaLarga;
