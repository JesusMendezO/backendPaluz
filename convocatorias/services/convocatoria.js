'use strict';
const base_convocatoria = require('../../models/convocatoria');

const sequelize = require('../../db/db_sequelize');
const {QueryTypes} = require('sequelize');
const mysql = require('../../db/db_mysql');

// const reg_preguntaspublicacionesportal = require('../../models/reg_preguntaspublicacionesportal');
// const reg_preguntasportal = require('../../models/reg_preguntasportal');

 // ************************
  // Metodo que obtiene preguntas ha publicar
  // ************************

  async function getConvocatoria(req) {
    try {
        
        const data = await sequelize.query(
            `
            select * from convocatoria
            where estado=1`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        

       

        if (data.length === 0) {
            return {
                status: 400,
                error: 'No hay preguntas convacatoria.',
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

  async function crearConvocatoria(req) {

    let data;
    const params = req.body;
    //const users = [params.coordinador,params.coordinador_ms,params.coordinador_cs,params.coordinador_logistica];
    //console.log(users.length);
       try {
  
   
          
         
   
           data = await base_convocatoria.create({
            idConvocatoria: params.idConvocatoria,
            idProyecto: params.idProyecto,
            actividad: params.actividad,
            locacion: params.locacion,
            fecha: params.fecha,
            puntoEncuentro: params.puntoEncuentro,
            duracion: params.duracion,
            horaEncuentro:params.horaEncuentro,
            horaSalida:params.horaSalida,
            horaRetorno:params.horaRetorno,
            cantidadVoluntarios:params.cantidadVoluntarios,
            equipos:params.equipos,
            logistica:params.logistica,
            insumos:params.insumos,
             fecha_registro :new Date(),
             fecha_modificacion:new Date()
           });
           
           
           
           
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

   
   async function putProyectos(codigo,params) {
    //const params = req.body;
    console.log(codigo);
    try {
        const data = await base_proyectos.update({
           nombre: params.nombre,
           descripcion: params.descripcion,
           //dFecha_UltimaModificacion: new Date(),
        }, { where: { codigo: params.codigo, estado:1  } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizarla pregunta, verifique la informacion.",
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

   
  async function eliminarPreguntasPublicadas(nPregunta) {
    try {
        const data = await reg_preguntaspublicacionesportal.update({
           bPublicada: 0,
           bActivo: 0,
           dFecha_Eliminacion: new Date(),
        }, { where: { nPregunta: nPregunta, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar la pregunta, verifique la informacion.",
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
  // Metodo que activa las preguntas que fueron desactivdas
  // *

   
  async function activarPreguntasPublicadas(nPregunta) {
    try {
        const data = await reg_preguntaspublicacionesportal.update({
           bPublicada: 1,
           bActivo: 1,
           dFecha_UltimaModificacion: new Date(),
           dFecha_Eliminacion: new Date(),
        }, { where: { nPregunta: nPregunta, bActivo:0 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al activar la pregunta, verifique la informacion.",
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
  // Metodo que publica las preguntas
  // *



  
//   const tableee= await sequelize.query(
//     `
//     select * from proyectos
//     where estado=1`,
//     {
//         replacements: {
           
//         },
//         type: QueryTypes.SELECT
//     }
// );
// console.log( tableee);
/////Crear Tablao
async function crearTablas(req) {
var cadena='';
    for (var key in req.body) {
        cadena=`${req.body[key]} varchar(255)not null,` + cadena
       
     }
     cadena=cadena.substring(0, cadena.length - 1);


    console.log(cadena);
    const opciones =[
    {
dato: 'prueba', tipo:0
    },
    {
        dato: 'prueba1', tipo:1
            },
            {
                dato: 'prueba2', tipo:0
                    },
                    {
                        dato: 'prueba3', tipo:1
                            },
            
]
var val='';
var name='';
var str='';
var tipo ='';
console.log(opciones)
for(let i=0;i <opciones.length; i++){
    
    for (var key in opciones[i]) {
       
//         if(key != 'dato'){
// if(opciones[i][key] === 0){
// tipo=` varchar(255)not null,`+tipo; 
// }else{
// tipo= ` dateqq, `+tipo;
// }

//         }else{
//             str=`${opciones[i][key]}`+tipo+`${str}`;
            
//         }
if(key == 'dato'){
name=opciones[i][key];
}
if(key == 'tipo'){

    if(opciones[i][key] === 0){
         tipo=` varchar(255)not null,`; 
         }else{
         tipo= ` DATE NULL, `
         }
}


     }
     str=name+tipo
   val=str+val
   
}
console.log(val);   
val=val.substring(0, val.length - 1);
    
    try {
        let createTodos = `create table if not exists todos(
            id int primary key auto_increment,
           
            ${val}
        )`;
        console.log(createTodos)
var data 
       // connect to the MySQL server
     mysql.query(createTodos, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      }else{
data = results;
      }
    });
  
    
  
  


        // const data = mysql.query(createTodos, function(err, results, fields) {
        //     if (err) {
        //     console.log(err.message);
        //     }
        //     });
        

       

        if (data.length === 0) {
            return {
                status: 400,
                error: 'No hay preguntas frecuentes.',
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
  // Metodo que inserta las preguntas para luego publicarlas
  // *

  async function crearProyectoUsuarios(param,user) {

    let data;
    const params = param;
    const users = user;
    console.log(params);
    console.log(users);
  
       try {
  
        
            console.log('paso')
             data = await proyectos_usuarios.create({
                id_proyecto: params,
                id_usuario:users,
                estado: 1,
                fecha_registro :new Date(),
                fecha_modificacion:new Date()
                //dFecha_UltimaModificacion: new Date(),
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


module.exports = {

  getConvocatoria,
  crearConvocatoria,
 // putProyectos,
  //crearTablas,
  //eliminarPreguntasPublicadas,
  //activarPreguntasPublicadas,
  //publicarPreguntas,
  

};