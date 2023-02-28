// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

const number = prompt("Escribe un número");

if (number % 2 === 0) {
  document.write(`El número ${number} es divisible por 2`);
} else if (number % 3 === 0) {
  document.write(`El número ${number} es divisible por 3`);
} else if (number % 5 === 0) {
  document.write(`El número ${number} es divisible por 5`);
} else if (number % 7 === 0) {
  document.write(`El número ${number} es divisible por 7`);
} else {
  document.write(`El número ${number} no es divisible por ninguno de estos`);
}
