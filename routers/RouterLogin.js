 const express = require('express');

 const routerLogin = express.Router()


routerLogin.get('/',(req,res)=>{
    res.send("bienvenidos la login")
})




 module.exports = routerLogin