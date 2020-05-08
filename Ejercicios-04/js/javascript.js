
var grupoTarjetas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];

// Se duplica Array grupoTarjetas
var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);


function reparteTarjetas () {

  var mesa = document.querySelector("#mesa");

  mesa.innerHTML = "";



  // Llama a loop dentro de la función  reparteTarjetas()
  totalTarjetas.forEach(function(item) {
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

reparteTarjetas();