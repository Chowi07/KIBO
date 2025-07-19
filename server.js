const express = require('express');
const app = express();

//importacion de las rutas modulos
const routerHome = require('./routers/RouterHome');
const routerTable = require('./routers/RoutersTable');
const routerLogin = require('./routers/RouterLogin');

const PORT = 3010; 
const HOST = "127.0.0.1"

//routers declarados
app.use('/home',routerHome);
app.use('/table',routerTable);
app.use('/login',routerLogin);


//meodos HTTP 
app.get('/',(req,res)=>{
    res.send("BIENVENIDOS A KIBO")
})



//agregamos un msj de error si no encuentra la ruta 
app.get ('/{*any}', (req, res) => {
    res.status(404)
    res.send("La ruta no existe ")
})

//visualizacion en terminar si esta corriendo el servidor 
app.listen(PORT, HOST, ()=> {
    console.log(`Servidor corriendo http://${PORT}:${HOST}`);
})