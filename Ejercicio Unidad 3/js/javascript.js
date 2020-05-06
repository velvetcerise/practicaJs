
function recogeDatos(e) {
  // prevenir evento del formulario (enviar)
  e.preventDefault();


  var nombre = document.querySelector('#nombre').value;
  var fecha = document.querySelector('#fecha').value;
  var edad = 2020 - fecha;
  
  console.log('Hola, ' + nombre + ", tienes " + edad + " años");
}

// Prueba eventListener
// function saludar() {
//   console.log('hola');
// }

var miForm = document.querySelector('#formulario');

// selecciona elemento al que quieres vincular el evento
// miForm.addEventListener("click", saludar); // ejemplo
/* addEventListener acepta dos parámetros ("evento"(click), funcion) */

miForm.addEventListener('submit', recogeDatos);


// También se puede utilizar una función anónima en este ejercicio
miForm.addEventListener("click", function) {
  console.log('Prueba');
}


