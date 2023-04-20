"use strict";

const service = require('../services/proyectos');

 // ************************
  // Metodo que obtiene preguntas ha publicar en el portal
  // ************************
  async function getProyectos(req, res) {
    console.log('hola')
    const resultado = await service.getProyectos(req);
    res.status(resultado.status).send(resultado.data);
}



 // ************************
  // Metodo que inserta posible preguntas a publicar
  // ************************
  async function postProyectos(req, res) {
    const resultado = await service.crearProyectos(req);
    res.status(resultado.status).send(resultado.data);
}

 // ************************
  // Metodo que actualiza posible preguntas a publicar
  // ************************
  async function putProyectos(req, res) {
     const params = req.body;
     const nPregunta = req.params.nPregunta;
     let resultado = await service.putProyectos(nPregunta, params);
     res.status(resultado.status).send(resultado.data);
}
 

module.exports = {
   
  getProyectos, 
  postProyectos,
  putProyectos,

}