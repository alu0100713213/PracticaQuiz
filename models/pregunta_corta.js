var Pregunta = require('../models/pregunta_model.js');

function PreguntaCorta(args){
	Pregunta.call(this,args);
	this.view = "<input type='text' name='PreguntaCorta' placeholder='Responda aquí(text)'>";
}

module.exports = PreguntaCorta;
