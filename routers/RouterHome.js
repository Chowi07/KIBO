//en la creacion de rutas hay que tener en cuenta que se lee de arriba para abajo y no por llamado
//osea que si por ejemplo tengo una ruta :param primero y luego uan ruta comun com /pepe y yo solo quiero 
//ver pepe deberia  ponerlo antes que el param porque se lo come. es importante el orden
const express = require('express');


const routerHome = express.Router()

routerHome.get('/' , (req,res)=>{
    res.send("Bienvenidos este es el Home")
})

module.exports = routerHome 