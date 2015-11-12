// GET /quizes/question

exports.question = function(req, res) {
	res.render('quizes/question', {pregunta: 'Capital de Italia'});
	res.render('quizes/question', {pregunta1: '¿En qué deporte se usa tiza?'});
	res.render('quizes/question', {pregunta2: '¿Cuántas manos tiene un caballo?'});
	res.render('quizes/question', {pregunta3: '¿Qué órgano segrega la hormona insulina?'});
};

// GET /quizes/answer

exports.answer = function(req, res) {
	if (req.query.respuesta === 'Roma'){
		res.render('quizes/answer', {respuesta: 'Correcto' });	
	}
	else
	{
		res.render('quizes/answer', {respuesta: 'Incorrecto'});
	}
	if (req.query.respuesta1 === 'Billar'){
		res.render('quizes/answer', {respuesta1: 'Correcto' });	
	}
	else
	{
		res.render('quizes/answer', {respuesta1: 'Incorrecto'});
	}
};
