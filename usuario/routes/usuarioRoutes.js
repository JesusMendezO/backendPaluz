'use strict';

var express = require('express');
// var md_auth = require('../../usuarios/middlewares/authenticated');
var Controller = require('../controllers/usuario');
// var { ensureAuth } = require('../../usuarios/middlewares/authenticated');
var api = express.Router();

api.post('/perfil/usuario/', Controller.post);
api.put('/perfil/cuentausuario/', Controller.put);
api.get('/perfil/:nIdUsuario', Controller.getUsuario);
api.get('/usuarios', Controller.getUsuarios);
api.get('/rol', Controller.getRoles);
api.get('/tipo', Controller.getTipo)
module.exports = api;