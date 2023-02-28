// 8.- Escribe un programa que pida un número y diga si es divisible por 2

const number = prompt("Ingrese un número");

if (number % 2 === 0) {
  document.write(`${number} es divisible por 2`);
} else {
  document.write(`${number} no es divisible por 2`);
}
