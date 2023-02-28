// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

const firstNumber = +prompt("Ingrese un número");
const secondNumber = +prompt("Ingrese otro número");

if (firstNumber > secondNumber) {
  document.write(
    `El mayor entre ${firstNumber} y ${secondNumber} es: ${firstNumber}`
  );
} else if (secondNumber > firstNumber) {
  document.write(
    `El mayor entre ${firstNumber} y ${secondNumber} es: ${secondNumber}`
  );
} else {
  document.write(`${firstNumber} y ${secondNumber} son iguales`);
}
