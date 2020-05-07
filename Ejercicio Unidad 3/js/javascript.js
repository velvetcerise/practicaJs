  // BONUS: si quieres, puedes comprobar si alguno de los campos
  // está vacío y modificar el mensaje de bienvenida para pedir
  // Que se rellene

function recogeDatos(e) {
  // prevenir evento del formulario (enviar)
  e.preventDefault();


  var nombre = document.querySelector('#nombre').value;
  var fecha = document.querySelector('#fecha').value;

  
  var edad = 2020 - fecha;
  var bienvenida = document.querySelector('#bienvenida');
  var mensajeEdad;
  var mensaje;

  if (edad > 30) {
    mensajeEdad = 'abuelo';
  } else if (edad < 30) {
    mensajeEdad = 'jovenzuelo!';
  } else {
    mensajeEdad = '¡no me lo creo!';
  }

  var mensaje = 
          '<p>Hola, ' + 
          nombre + 
          ', tienes ' + 
          edad +
          ' años, ' +
          mensajeEdad +
          '</p>';

  // Ejercicio Bonus
  if (nombre.length === 0 || fecha.length === 0) {
    mensaje = '<p>Por favor, ingresa tus datos completos</p>';
  }
  
  // bienvenida.textContent = mensaje;

  bienvenida.innerHTML = mensaje;
}

var miForm = document.querySelector('#formulario');

miForm.addEventListener('submit', recogeDatos);




