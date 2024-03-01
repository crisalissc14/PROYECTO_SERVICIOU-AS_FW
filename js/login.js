function validateForm(event) {
    event.preventDefault();

    // Obtener valores del formulario
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;

    // Validar usuario y contraseña
    if (username === "Admin" && password === "12345") {
      // Redirigir a otra página si la validación es exitosa
      window.location.href = "index.html";
    } else {
      // Mostrar mensaje de error
      alert("Usuario o contraseña incorrecto");
    }
  }