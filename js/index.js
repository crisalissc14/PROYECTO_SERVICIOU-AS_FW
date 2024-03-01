if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-workers.js')
        .then(registration => {
            console.log('Service Worker registrado con éxito:', registration);
        })
        .catch(error => {
            console.log('Error al registrar el Service Worker:', error);
        });
}
function cerrarSesion() {
    var confirmacion = confirm("¿Seguro de cerrar sesión?");

    if (confirmacion) {
        window.location.href = 'login.html';
    } else {

    }
}