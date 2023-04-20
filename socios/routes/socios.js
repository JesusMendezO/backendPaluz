'use strict';

var express = require('express');
var Controller = require('../controllers/proyectos');
var api = express.Router();


api.get('/proyectos/', Controller.getProyectos);
api.post('/crearproyectos/', Controller.postProyectos);
api.put('/actualizarproyectos', Controller.putProyectos);


module.exports = api;