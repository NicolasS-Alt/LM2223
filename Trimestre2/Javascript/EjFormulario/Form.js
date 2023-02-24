function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const email = document.getElementById("email").value.trim();
  const dni = document.getElementById("dni").value.trim();
  const pin = document.getElementById("pin").value;
  const pinRepetido = document.getElementById("pin-repetido").value;

  let error = false;
  let mensajeError = "";

  if (nombre === "") {
    error = true;
    mensajeError += "El campo Nombre es requerido.\n";
  }

  if (apellido === "") {
    error = true;
    mensajeError += "El campo Apellido es requerido.\n";
  }

  if (email === "") {
    error = true;
    mensajeError += "El campo Correo electrónico es requerido.\n";
  }

  if (dni === "") {
    error = true;
    mensajeError += "El campo DNI es requerido.\n";
  } else {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const regex = /^(\d{8})([A-Z])$/;

    if (regex.test(dni)) {
      const numero = dni.substr(0, 8);
      const letra = dni.substr(8, 1).toUpperCase();
      const letraCalculada = letras.charAt(numero % 23);

      if (letra !== letraCalculada) {
        error = true;
        mensajeError += "La letra del DNI es incorrecta.\n";
      } else {
        document.getElementById("mensaje-dni").textContent = "DNI válido";
        document.getElementById("mensaje-dni").style.color = "green";
      }
    } else {
      error = true;
      mensajeError += "El formato del DNI es incorrecto.\n";
    }
  }

 
}