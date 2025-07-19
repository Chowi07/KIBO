const express = require('express');

const routerTable = express.Router()

routerTable.get('/',(req,res)=>{
    res.send("Bienvenidos esta en table")
})


module.exports = routerTable 