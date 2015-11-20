var Respuesta = require('./respuesta_model.js');
var Pregunta = require('./pregunta_model.js');
var Corta = require('./pregunta_corta.js');
var Larga = require('./pregunta_larga.js');
var AbstractQuiz = require('../models/abstract_quiz_model.js');

function Quiz() {
  AbstractQuiz.call(this);
  this.q.push(
    { pregunta: new Corta('¿Capital de Italia?'),
      respuesta: new Respuesta(/^\s*roma\s*$/i)
    },
    {
      pregunta: new Larga('¿Dónde se encuentra la Estatua de la Libertad?'),
      respuesta: new Respuesta(function(x) {
        if (('Nueva York')||('nueva york'))
        {
          return true;
        }
        else {
          return false;
        }
      }),
    },
    {
      pregunta: new Corta('En la programación HTML la función de la etiqueta b es:'),
      respuesta: new Respuesta(function(x) {
        if (('Aplica negrita a un texto')||('negrita')||('Negrita')){
          return true;
        }
        else {
          return false;
        }
      }),
    },
    {
      pregunta: new Larga('¿Cómo se llama cuando la luz cambia de dirección después de pasar por una lente?'),
      respuesta: new Respuesta(function(x) {
        if (('refracci[oó]n')||('Refracci[oó]n')){
          return true;
        }
        else {
          return false;
        }
      }),
    }

  );

  var self  = this;
  for(var i = 0; i<3;i++) {
    (function() {
      var n1 = Math.randomInt(9)+1;
      // debug("n1 = "+n1);
      var n2 = Math.randomInt(9)+1;
      // debug("n2 = "+n2);
      self.q.push(
        { pregunta: new Corta('¿ '+n1+'x'+n2+"= ?"),
          respuesta: new Respuesta(function(x) {
            return (x == n1*n2);
        })
      })
    })
  }
}

Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

module.exports = Quiz;
