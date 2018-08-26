const express = require('express');
const socketIO = require('socket.io'); //Importamos los sockets
const http = require('http'); //Importamos la libreria HTTP de node

const path = require('path');

const app = express(); //Iniciamos Express 
let server = http.createServer(app); //Creamos el servidor HTTP de node mandando como argumento el express
//Express trabaja en verdad con el servicio HTTP de node, por lo que llama métodos desde ahí, lo que  permite que se
//manden las configuraciones de express al servidor HTTP de node sin problemas

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
//IO esta es la comunicación del Backend, se exporta mediante module para usarla en otro archivo
module.exports.io = socketIO(server); //Inicializamos socket
//io.on('[evento en ingles]', function(){})

require('./sockets/socket'); //Para que el server use el archivo de conf de sockets



server.listen(port, (err) => { //Cambiamos el app.listen por server(servidor HTTP de node)

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
