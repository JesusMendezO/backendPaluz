"use strict";

const service = require('../services/equipos');

 // ************************
  // Metodo que obtiene preguntas ha publicar en el portal
  // ************************
  async function getEquipos(req, res) {
    
    const resultado = await service.getEquipos(req);
    res.status(resultado.status).send(resultado.data);
}



 // ************************
  // Metodo que inserta posible preguntas a publicar
  // ************************
  async function crearEquipos(req, res) {
    const resultado = await service.crearEquipos(req);
    res.status(resultado.status).send(resultado.data);
}

 // ************************
  // Metodo que actualiza posible preguntas a publicar
  // ************************
  async function putEquipos(req, res) {
     const params = req.body;
     const id = req.params.id;
     let resultado = await service.putEquipos(id, params);
     res.status(resultado.status).send(resultado.data);
}
 

module.exports = {
   
  getEquipos, 
  crearEquipos,
  putEquipos,

}