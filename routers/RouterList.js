const express = require('express');

const routerList = express.Router()

//aca hay que hacer la coneccion con table   

routerList.get('/',(req,res)=>{
    res.send("bienvenidos listas")
})


module.routerList = routerList 