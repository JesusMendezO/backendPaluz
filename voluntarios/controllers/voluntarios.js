'use strict';

const service = require('../services/voluntarios');


// Creamos un nuevo usuario
async function post(req, res) {
    const usuario = await service.crearVoluntario(req);
    res.status(usuario.status).send(usuario.data);

}
// Creamos un nuevo usuario
async function postU(req, res) {
    const usuario = await service.crearUsuario(req);
    res.status(usuario.status).send(usuario.data);

}
// Obtenemos el usuario
async function getUsuario(req, res) {
    const usuario = await service.getUsuario(req);
    res.status(usuario.status).send(usuario.data);
}



// Actualizamos el usuario
async function put(req, res) {
    let usuario = await service.updateUsuario(req);
    res.status(usuario.status).send(usuario.data);
}

// Envía un correo de notificación cuenta creada
async function enviarCorreoCuentaCreada(req, res) {
    try {
        const res = await correo.enviar(req.body, 2, 'CUENTA_CREADA_MARKET');
        return {
            status: 200,
            error: '',
            data: res
        }
    }
    catch (err) {
        return {
            status: 500,
            error: 'Error al enviar el correo',
            data: {}
        }
    }
}

module.exports = {
    post,
    postU,
    put,
    getUsuario,
    enviarCorreoCuentaCreada
};