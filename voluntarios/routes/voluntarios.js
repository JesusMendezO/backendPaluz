'use strict';

var express = require('express');
// var md_auth = require('../../usuarios/middlewares/authenticated');
var Controller = require('../controllers/voluntarios');
// var { ensureAuth } = require('../../usuarios/middlewares/authenticated');
var api = express.Router();

api.post('/perfil/voluntario/', Controller.post);
api.post('/perfil/voluntarioU/', Controller.postU);
// api.put('/perfil/cuentausuario/', Controller.put);
// api.get('/perfil/:nIdUsuario', Controller.getUsuario);


module.exports = api;