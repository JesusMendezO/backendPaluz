'use strict';

var express = require('express');
var Controller = require('../controllers/convocatoria');
var api = express.Router();


api.get('/convocatoria/', Controller.getConvocatoria);
// api.get('/mel/', Controller.getMel);
// api.get('/total/', Controller.getTotales);
// api.get('/ninos/', Controller.getNinos);
// api.get('/ninas/', Controller.getNinas);
// api.get('/meses/', Controller.getMeses);
// api.get('/semanas/', Controller.getSemanas);
// api.get('/beneficiarios/', Controller.getBeneficiarios);
// api.get('/preguntaseliminar/', Controller.getPreguntasEliminar);
// api.get('/preguntasPortal/', Controller.getPreguntasPortal);
api.post('/crearconvocatoria/', Controller.crearConvocatoria);
// api.put('/actualizarpreguntas/:nPregunta/', Controller.putPreguntasPublicadas);
// api.put('/actualizarpreguntasleidas/:nPregunta/', Controller.putPreguntasLeidas);
// api.put('/actualizarpreguntasnoleidas/:nPregunta/', Controller.putPreguntasnoLeidas);
// api.delete('/deletepreguntas/:nPregunta/', Controller.deletePreguntasPublicadas);
// api.delete('/activarpreguntas/:nPregunta/', Controller.activarPreguntasPublicadas);
// api.get("/busquedad-pregunta/:pregunta", Controller.getPreguntaRegistrada);
// api.post('/guardarpreguntasportal/', Controller.postGuardarPreguntasPortal);
// api.get('/buscarpreguntasportal/', Controller.buscarPrepuntasPublicadas);
// api.put('/publicarpreguntasportal/', Controller.postPublicaPreguntas);
// api.put('/ordenPregunta/:nPregunta/', Controller.ordenPregunta);
// api.get('/ultimafecha/', Controller.getUltimaFecha);

module.exports = api;