
var grupoTarjetas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];

// Se duplica Array grupoTarjetas
var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);


// Función Math.random
function barajaTarjetas() {
  var resultado;
  // El método sort() ordena los elementos de unarreglo (array) localmente 
  // y devuelve el arreglo ordenado.

  resultado = totalTarjetas.sort(function() {
    // 1.- En el arreglo indicamos que partimos de una posición de en medio (0.5).
    // 2.- Math.random() restara un número al azar.
    return 0.5  - Math.random();
  })

  // Devuelve resultado
  return resultado;
}


function reparteTarjetas () {

  // Seleccionamos el elemento donde vamos a pintar el array
  var mesa = document.querySelector("#mesa");
  var tarjetasBarajadas = barajaTarjetas();

  mesa.innerHTML = "";

  // Llama a "resultado", que es la iteración de totalTarjetas con los elementos del array ordenados de forma aleatoria
  tarjetasBarajadas.forEach(function(item) {

    // Imprimo 
    console.log(item);

    // Declara elemento que será creado en el nodo
    var tarjeta = document.createElement("div");

    tarjeta.innerHTML = 
      "<div class='tarjeta'>" +
        "<div class='tarjeta__contenido'>" +
          item +
        "</div>" +
      "</div>";

    mesa.appendChild(tarjeta)
  });

}

// Función para agregar una clase al momento de hacer click en una tarjeta
function descubrir() {
  this.classList.add("descubierta");
}

reparteTarjetas();

// Seleccionar todos los nodos tipo tarjetas
document.querySelectorAll(".tarjeta").forEach(function(elemento) {
  
  // Agrega clase al momento de pasar evento click en cada nodo
  elemento.addEventListener("click", descubrir);
});
