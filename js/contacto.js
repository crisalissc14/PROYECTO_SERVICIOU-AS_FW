function mostrar() {
    document.getElementById('formularioM').style.display = 'block';
}
function ocultar() {
    document.getElementById('formularioM').style.display = 'none';
}
function validarFormulario() {
    var nombre = document.getElementById('name').value;
    var apellido = document.getElementById('subname').value;
    var email = document.getElementById('email').value;
    var celular = document.getElementById('number').value;
    var fecha = document.getElementById('fecha').value;
    var hora = document.getElementById('hora').value;

    if (nombre === '' || apellido === '' || email === '' || celular === '' || fecha === '') {
        alert('Por favor complete todos los campos');
        return false;
    }

    var letras = /^[A-Za-z]+$/;
    if (!nombre.match(letras) || !apellido.match(letras)) {
        alert('El nombre y el apellido solo pueden contener letras');
        return false;
    }

    var numeros = /^[0-9]+$/;
    if (!celular.match(numeros)) {
        alert('El número de celular solo puede contener números');
        return false;
    }

    return true;
}

function limpiarFormulario() {
    document.getElementById('name').value = '';
    document.getElementById('subname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
    document.getElementById('fecha').value = '';
    document.getElementById('hora').value = '';
}

    document.addEventListener('DOMContentLoaded', function() {
        var fechaInput = document.getElementById('fecha');
        var fechaMinima = new Date();
        var dia = fechaMinima.getDate() + 1;
        var mes = fechaMinima.getMonth() + 1;
        var año = fechaMinima.getFullYear();
        if (dia < 10) {
            dia = '0' + dia;
        }
        if (mes < 10) {
            mes = '0' + mes;
        }
        fechaMinima = año + '-' + mes + '-' + dia;
        fechaInput.setAttribute('min', fechaMinima);
    });

