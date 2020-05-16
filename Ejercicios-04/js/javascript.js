
var grupoTarjetas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];

// Se duplica Array grupoTarjetas
var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);


// Función Math.random
function barajaTarjetas() {
  var resultado;

  // 1.- Se agrega a la variable resultado el método Math.random
  // 2.- Se múltiplica por 10 el método Math.random para que la "variable resultado" nos proporcione un número entero
  // 3.- Se agrega método floor que redondeara el método Math.random
  resultado = Math.floor(Math.random()* 10) + 1;
  
  // El método sort() ordena los elementos de unarreglo (array) localmente 
  // y devuelve el arreglo ordenado.

  console.log(resultado);
}


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


// Repaso de objetos

var miGato = {
  nombre: "Quinto",
  color: "naranja",
  edad: 10,
  bienEducado: false,

  // Funciones dentro de un objeto
  // Un método es una función propia o interna de un objeto
  maullar: function () {
    console.log('🐈 miauu!')
  }
};

// imprimir valor
  // miGato.nombre
  // miGato.color
  // miGato.edad
  // miGato.bienEducado

