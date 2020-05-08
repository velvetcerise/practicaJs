var grupoTarjetas2 = ["😻", "🧠", "👀", "🧐", "🥩", "🍉", "🥑", "🥗"];
var grupoTarjetas3 = ["🤡", "💩", "🎃", "🙀", "☠️", "👾", "😽", "😼"];

var totalTarjetasPrueba = grupoTarjetas1 + grupoTarjetas2 + grupoTarjetas3;

var totalTarjetas = grupoTarjetas1.concat(grupoTarjetas2, grupoTarjetas3);





// Se imprimen los valores de los arrays como string en la consola 
console.log(totalTarjetasPrueba);


// Utiliza método concat para crear un nuevo array
// Se imprime un array en la consola
console.log(totalTarjetas);

// Total de elementos en el array
console.log(totalTarjetas.length);


// Se agrega un nuevo elemento al array
var nuevoTotalTarjetas = totalTarjetas.push("test");
console.log(nuevoTotalTarjetas);

var arrayAnidado = [
  ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"],
  ["😻", "🧠", "👀", "🧐", "🥩", "🍉", "🥑", "🥗"],
  ["🤡", "💩", "🎃", "🙀", "☠️", "👾", "😽", "😼"]
];

console.log(arrayAnidado);
console.log(arrayAnidado[2]);
console.log(arrayAnidado[1][0]);