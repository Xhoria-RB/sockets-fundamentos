const { io } = require('../server');


io.on('connection', (client) => {
    console.log('Usuario conectado');
    // Conf para saber si un usuario se conectó al servidor. Socket nos trae toda la info del cliente en el objeto client


    client.emit('enviarMensaje', {
        usuario: 'Admin',
        message: 'BIENVENIDO AL SERVER'
    })


    client.on('disconnect', () => { //on = escuchar eventos
        console.log('Usuario desconectado');
    });


    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        //El broadcast funciona como el emit, pero se envia a todos los usuarios conectados

        client.broadcast.emit('enviarMensaje', data);

        // if (message.usuario) {

        //     callback({
        //         resp: 'TODO SALÍO BIEN!'
        //     });

        // } else {

        //     callback({
        //         resp: 'TODO SALÍO MAL!!!!!!!'
        //     });
        // }
    });


});
