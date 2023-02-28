// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

const number = +prompt("Ingrese un número");

if (
  number % 2 === 0 ||
  number % 3 === 0 ||
  number % 5 === 0 ||
  number % 7 === 0
) {
  document.write(`El número ${number} es divisible por 2, 3, 5 o 7`);
} else {
  document.write(`El número ${number} no es divisible por 2, 3, 5 o 7`);
}
