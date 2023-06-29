'use strict';
const base_equipos = require('../../models/equipos');
const sequelize = require('../../db/db_sequelize');
const {QueryTypes} = require('sequelize');
// const reg_preguntaspublicacionesportal = require('../../models/reg_preguntaspublicacionesportal');
// const reg_preguntasportal = require('../../models/reg_preguntasportal');

 // ************************
  // Metodo que obtiene preguntas ha publicar
  // ************************

  async function getEquipos(req) {
    try {
        
        const data = await sequelize.query(
            `
            select * from equipos`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        

       

        if (data.length === 0) {
            return {
                status: 400,
                error: 'No existen Equipos',
                data,
            };
        } else {
            return {
                status: 200,
                error: '',
                data: data
            };
        }
    } catch (err) {
        // do something
        return {
            status: 500,
            error: err,
            data: [],
        };
    }
}

 // ************************
  // Metodo que obtiene preguntas ha publicar
  // ************************




// ************************
  // Metodo que inserta las preguntas para luego publicarlas
  // *

  async function crearEquipos(req) {

    let data;
    const params = req.body;
    console.log(req.body);
   
       try {
  
   
          
         
   
           data = await base_equipos.create({
             nombre :params.nombre,
             descripcion:params.descripcion,
             fecha_registro :new Date(),
             fecha_modificacion:new Date()
           });
           console.log(data);
           return {
             
               status: 200,
               error: '',
               data: data,
           };
   
       } catch (err) {
           return {
               status: 500,
               error: err,
               data: err,
           };
       }
   }

   // ************************
  // Metodo que actualiza las preguntas para luego publicarlas
  // *

   
   async function putEquipos(id,params) {
    //const params = req.body;
    
    try {
        const data = await base_equipos.update({
           nombre: params.nombre,
           miembros: params.miembros,
           abreviatura: params.abreviatura,
           //dFecha_UltimaModificacion: new Date(),
        }, { where: { idEquipo: params.idEquipo} });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizar el equipo.",
                data,
            };
        } else {
            return {
                status: 200,
                error: "",
                data:  data,
            };
        }
    } catch (err) {
        return {
            status: 500,
            error: err,
            data: err
        };
    }
}


  // ************************
  // Metodo que elimina las preguntas para luego seran publicarlas
  // *

   






module.exports = {

  getEquipos,
  crearEquipos,
  putEquipos,
 

  

};