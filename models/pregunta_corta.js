var Pregunta = require('../models/pregunta_model.js');

function PreguntaCorta(args){
  Pregunta.call(this,args);
  this.view = "<input type='text' name='respuesta' placeholder='Responda aquí' autofocus=''>";
}

module.exports = PreguntaCorta;
