var Pregunta = require('../models/pregunta_model.js');

function PreguntaLarga(args){
	Pregunta.call(this,args);
	this.view = "<textarea name='PreguntaLarga' rows='3' cols='30' placeholder='Responda aquí(textarea)'></textarea>";
}

module.exports = PreguntaLarga;
