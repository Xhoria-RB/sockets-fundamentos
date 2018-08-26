//Usamos var y funciones normales para mantener la compatibilidad
//Conf para saber si el cliente esta conectado al servidor
//Usamos var para mayor compatibilidad en los navegadores. io() es el mismo objeto io declarado en server
var socket = io();

socket.on('connect', function() { //Establece un canal de conexion abierta entre servidor-cliente
    //Los sockets estaran pendientes de los cambios al punto que si bajamos el servidor los sockets intentaran 
    //conectarse por un periodo de tiempo configurable hasta que el servidor esté activo otra vez o pase el tiempo determinado
    console.log('Conectado al servidor');
});
//Escuchar eventos
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//Enviar información. Socket.emit('[evento]', {})
socket.emit('enviarMensaje', {
    usuario: 'Ricardo',
    mensaje: 'Hola mundo!'
}, function(resp) {
    console.log('Respuesta server:', resp);
});

//Escuchando información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
})
