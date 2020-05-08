
var grupoTarjetas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];




function reparteTarjetas () {

  var mesa = document.querySelector('#mesa');

  mesa.innerHTML = '';



  // Llama a loop dentro de la función  reparteTarjetas()
  grupoTarjetas.forEach(function(item) {
    // indice imprime la posición del item dentro del array
    console.log(item);

    // Declara elemento que será creado en el nodo
    var tarjeta = document.createElement('div');
    tarjeta.innerHTML = item;
    mesa.appendChild(tarjeta)
  }
);
}

reparteTarjetas();