
function recogeDatos(e) {
  // prevenir evento del formulario (enviar)
  e.preventDefault();


  var nombre = document.querySelector('#nombre').value;
  var fecha = document.querySelector('#fecha').value;
  var edad = 2020 - fecha;
  var bienvenida = document.querySelector('#bienvenida');
  var mensaje = 'Hola, ' + nombre + ', tienes ' + edad + ' años';
  bienvenida.textContent = mensaje;
}

var miForm = document.querySelector('#formulario');

miForm.addEventListener('submit', recogeDatos);




