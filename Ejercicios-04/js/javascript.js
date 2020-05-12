
var grupoTarjetas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];

// Se duplica Array grupoTarjetas
var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);


function reparteTarjetas () {

  // Seleccionamos el elemento donde vamos a pintar el array
  var mesa = document.querySelector("#mesa");

  mesa.innerHTML = "";

  // Llama a loop dentro de la función reparteTarjetas()
  totalTarjetas.forEach(function(item) {

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